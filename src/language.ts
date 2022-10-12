type language = "en" | "nl"
let lang:language;
export function detectLanguage() {
    if (navigator.language==='nl') {
        lang = "nl"
    } else {
        lang = "en"
    }
    return lang;
}