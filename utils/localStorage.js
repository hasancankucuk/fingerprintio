export default function getLocalStorage() {
    let window = window || this || self;
    if(window) {
        return window.localStorage;
    }
}