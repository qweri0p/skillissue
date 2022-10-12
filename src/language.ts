type language = "en" | "nl"
let lang:language;
export function detectLanguage() {
    const url = new URL(location.toString())
    const paramlang = url.searchParams.get("lang")
    if (paramlang) {
        if (paramlang === 'nl') {
            lang = 'nl'
        } else {
            lang = "en"
        }
    } else {
        if (navigator.language==='nl') {
            url.searchParams.append("lang", "nl")
            lang = 'nl'
        } else {
            url.searchParams.append("lang", "en")
            lang = 'en'
        }
    }
    return lang;
}