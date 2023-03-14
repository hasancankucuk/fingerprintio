export default function getSpeechSynthesis() {
    if (window && "speechSynthesis" in window && "getVoices" in window.speechSynthesis) {
        let voices = window?.speechSythesis?.getVoices();
        if(voices && voices.length > 0) {
            return voices;
        } else {
            return null;
        }
    } else {
        return null;
    }
}