import { TTSParam, sign, makeCORSHeaders, splitAndMerge } from "./utils.ts"
const DEFAULT_AUDIO_FORMAT = "audio-24khz-48kbitrate-mono-mp3";
const Edge_TTS_VOICE_URL = "https://speech.platform.bing.com/consumer/speech/synthesize/readaloud/voices/list?trustedclienttoken=6A5AA1D4EAFF4E9FB37E23D68491D6F4";

let VOICE_LIST = [];
const TOKEN_REFRESH_BEFORE_EXPIRY = 3 * 60;
let tokenInfo = {
    endpoint: null,
    token: null,
    expiredAt: null
};

let Edge_TTS_ENDPOINT_URL = "";
let EDGE_ENDPONT = undefined;
interface EdgeEndpointParam {
    t: String
}

interface EdgeEndpointJWTParam {
    exp: String
}

async function getVoice() {

    const response = await fetch(Edge_TTS_VOICE_URL, {
        method: "GET",
        headers: {
            "Authorization": EDGE_ENDPONT.t,
            "Content-Type": "application/ssml+xml",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0",
            "X-Microsoft-OutputFormat": DEFAULT_AUDIO_FORMAT
        },
    });

    const data = await response.json();
    VOICE_LIST = data.map((v) => (v["ShortName"]))
    let VOICE_LIST_en = VOICE_LIST.filter(function (x) { return x.startsWith("en") });
    let VOICE_LIST_zh = VOICE_LIST.filter(function (x) { return x.startsWith("zh") });
    let VOICE_LIST_ja = VOICE_LIST.filter(function (x) { return x.startsWith("ja") });
    VOICE_LIST = VOICE_LIST_en.concat(VOICE_LIST_zh.concat(VOICE_LIST_ja));
    console.error(VOICE_LIST);

}
async function getEndpoint() {
    const now = Date.now() / 1000;

    if (tokenInfo.token && tokenInfo.expiredAt && now < tokenInfo.expiredAt - TOKEN_REFRESH_BEFORE_EXPIRY) {
        return tokenInfo.endpoint;
    }

    // 获取新token
    const endpointUrl = "https://dev.microsofttranslator.com/apps/endpoint?api-version=1.0";
    const clientId = crypto.randomUUID().replace(/-/g, "");

    try {
        const response = await fetch(endpointUrl, {
            method: "POST",
            headers: {
                "Accept-Language": "zh-Hans",
                "X-ClientVersion": "4.0.530a 5fe1dc6c",
                "X-UserId": "0f04d16a175c411e",
                "X-HomeGeographicRegion": "zh-Hans-CN",
                "X-ClientTraceId": clientId,
                "X-MT-Signature": await sign(endpointUrl),
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0",
                "Content-Type": "application/json; charset=utf-8",
                "Content-Length": "0",
                "Accept-Encoding": "gzip"
            }
        });

        if (!response.ok) {
            throw new Error(`获取endpoint失败: ${response.status}`);
        }

        const data = await response.json() as EdgeEndpointParam;
        const jwt = data.t.split(".")[1];
        const decodedJwt = JSON.parse(atob(jwt)) as EdgeEndpointJWTParam;

        tokenInfo = {
            endpoint: data,
            token: data.t,
            expiredAt: decodedJwt.exp
        };

        return data;

    } catch (error) {
        console.error("获取endpoint失败:", error);
        // 如果有缓存的token，即使过期也尝试使用
        if (tokenInfo.token) {
            console.log("使用过期的缓存token");
            return tokenInfo.endpoint;
        }
        throw error;
    }
}
function getSsml(text, voiceName, rate, pitch, volume, style, slien = 0) {
    let slien_str = '';
    if (slien > 0) {
        slien_str = `<break time="${slien}ms" />`
    }
    return `<speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" version="1.0" xml:lang="zh-CN"> 
                <voice name="${voiceName}"> 
                    <mstts:express-as style="${style}"  styledegree="2.0" role="default" > 
                        <prosody rate="${rate}" pitch="${pitch}" volume="${volume}">${text}</prosody> 
                    </mstts:express-as> 
                    ${slien_str}
                </voice> 
            </speak>`;

}

interface EdgeRequestParam {
    text: String;
    voiceName: String;
    rate?: String;
    pitch?: String;
    volume?: String;
    style?: string;
    slien?: number;
}

async function EdgeProxyDownloader(formData: EdgeRequestParam): Promise<Response> {


    try {

        const response = await fetch(Edge_TTS_ENDPOINT_URL, {
            method: "POST",
            headers: {
                "Authorization": EDGE_ENDPONT.t,
                "Content-Type": "application/ssml+xml",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0",
                "X-Microsoft-OutputFormat": DEFAULT_AUDIO_FORMAT
            },
            body: getSsml(formData.text, formData.voiceName, formData.rate, formData.pitch, formData.volume, formData.style, formData.slien)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('TTS API Error:', {
                status: response.status,
                statusText: response.statusText,
                body: errorText,
                headers: Object.fromEntries(response.headers.entries())
            });
            console.error('TTS formData:', formData)
            console.error('TTS DEFAULT_AUDIO_FORMAT:', DEFAULT_AUDIO_FORMAT)

            return new Response(
                JSON.stringify({
                    error: `TTS API error: ${response.status} ${response.statusText}`,
                    details: errorText
                }),
                {
                    status: response.status,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        // Return the audio response
        return new Response(response.body, {
            status: 200,
            headers: {
                'Content-Type': response.headers.get('Content-Type') || 'audio/mpeg',
                'Content-Length': response.headers.get('Content-Length') || '',
            }
        });
    } catch (error) {
        console.error('TTS Handler Error:', error);
        return new Response(
            JSON.stringify({
                error: 'Internal server error',
                message: error instanceof Error ? error.message : 'Unknown error'
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }



}

export async function EdgeProxyHandler(req: TTSParam): Promise<Response> {

    EDGE_ENDPONT = await getEndpoint();
    Edge_TTS_ENDPOINT_URL = `https://${EDGE_ENDPONT.r}.tts.speech.microsoft.com/cognitiveservices/v1`;


    if (VOICE_LIST.length == 0) {
        await getVoice();
    }



    const maxChunkSize = 4096;
    const chunks = splitAndMerge(req.input.trim(), maxChunkSize, "\n");
    let audioChunks: Array<Blob> = []
    while (chunks.length > 0) {
        try {
            // const ClientId = crypto.randomUUID().replace(/-/g, "");
            // const generation = crypto.randomUUID().toString();

            let voice = req.voice;
            if (!VOICE_LIST.includes(voice)) {
                voice = VOICE_LIST[0]
            }

            // Create form data as URLSearchParams (application/x-www-form-urlencoded)
            const formData = {
                text: chunks.shift(),
                voiceName: voice,
                rate: '+0%',
                pitch: '+0Hz',
                volume: '+0%',
                style: `general`,
                slien: 0,
            };
            let audio_chunk = await (await EdgeProxyDownloader(formData as EdgeRequestParam)).blob();

            audioChunks.push(audio_chunk)

        } catch (error) {
            console.error('TTS Handler Error:', error);
            return new Response(
                JSON.stringify({
                    error: 'Internal server error',
                    message: error instanceof Error ? error.message : 'Unknown error'
                }),
                {
                    status: 500,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }
    }

    const concatenatedAudio = new Blob(audioChunks, { type: 'audio/mpeg' });
    const response = new Response(concatenatedAudio, {
        headers: {
            "Content-Type": "audio/mpeg",
            ...makeCORSHeaders()
        }
    });


    return response;
}