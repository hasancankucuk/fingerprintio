export default function getTimeZone() {
    let window = window || this || self;
    if(window) {
        let timeZone = window?.Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone;
        return timeZone;
    }
}