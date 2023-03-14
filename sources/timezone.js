export default function getTimeZone() {
    if(window) {
        let timeZone = window?.Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone;
        return timeZone;
    }
}