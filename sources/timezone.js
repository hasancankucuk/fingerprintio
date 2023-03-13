export default function getTimeZone() {
    let window = window || this || self;
    if(window) {
        // console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
        let timeZone = window?.Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone;
        return timeZone;
    }
}