
import { TTSParam, makeCORSHeaders, splitAndMerge } from "./utils.ts"
const OAI_TTS_ENDPOINT_URL = "https://www.openai.fm/api/generate";
const DEFAULT_AUDIO_FORMAT = "mp3";

//https://platform.openai.com/docs/guides/text-to-speech

const VOICE_LIST = ['alloy', 'ash', 'ballad', 'coral', 'echo', 'fable', 'nova', 'onyx', 'sage', 'shimmer']


const DEFAULT_PROMPT = `Voice Affect: Calm, composed, and reassuring; project quiet authority and confidence, BBC reporter host accent.
Tone: Sincere, empathetic, and gently authoritative—express genuine apology while conveying competence.
Pacing: Steady and moderate; unhurried enough to communicate care, yet efficient enough to demonstrate professionalism.
Emotion: Genuine empathy and understanding; speak with warmth, especially during apologies ("I'm very sorry for any disruption...").
Pronunciation: Clear and precise, emphasizing key reassurances ("smoothly," "quickly," "promptly") to reinforce confidence.
Pauses: Brief pauses after offering assistance or requesting details, highlighting willingness to listen and support.`;



export async function OaiProxyDownloader(formData: URLSearchParams): Promise<Response> {
    try {
        // const ClientId = crypto.randomUUID().replace(/-/g, "");

        // For POST, we need to sign the URL + the form data or just the URL
        // const Signature = await sign(OAI_TTS_ENDPOINT_URL);



        const response = await fetch(OAI_TTS_ENDPOINT_URL, {
            method: "POST",
            headers: {
                // "X-ClientVersion": "4.0.530a 5fe1dc6c",
                // "X-UserId": "0f04d16a175c411e",
                // "X-ClientTraceId": ClientId,
                // "X-MT-Signature": Signature,
                // "X-HomeGeographicRegion": "en-US",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0",
                // KEY CHANGE: Use form content type instead of JSON
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "audio/*",
                "Accept-Encoding": "gzip, deflate, br"
            },
            // KEY CHANGE: Send form data as string, not JSON
            body: formData.toString()
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
export async function OaiProxyHandler(req: TTSParam): Promise<Response> {
    const maxChunkSize = 4096;
    const chunks = splitAndMerge(req.input.trim(), maxChunkSize, "\n");
    let audioChunks: Array<Blob> = []
    while (chunks.length > 0) {
        try {
            // const ClientId = crypto.randomUUID().replace(/-/g, "");
            const generation = crypto.randomUUID().toString();

            // Create form data as URLSearchParams (application/x-www-form-urlencoded)
            let voice = req.voice;
            if (!VOICE_LIST.includes(voice)) {
                voice = VOICE_LIST[0]
            }
            const formData = new URLSearchParams({
                'input': chunks.shift(),
                'voice': voice,
                'generation': generation,
                'response_format': req.response_format ?? DEFAULT_AUDIO_FORMAT,
                'prompt': req.instructions ?? DEFAULT_PROMPT
            });
            let audio_chunk = await (await OaiProxyDownloader(formData)).blob();

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