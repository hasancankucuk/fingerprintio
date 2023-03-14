export default function getUserAgent() {
    if(window) {
        return window?.navigator?.userAgent;
    }
}