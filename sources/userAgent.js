export default function getUserAgent() {
    let window = window || this || self;
    if(window) {
        return window?.navigator?.userAgent;
    }
}