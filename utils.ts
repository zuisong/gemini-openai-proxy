export function getToken(headers: Record<string, string>) {
    for (const [k, v] of Object.entries(headers)) {
        if (k.toLowerCase() == "authorization") {
            return v.substring(v.indexOf(" ") + 1)
        }
    }
    return null
}