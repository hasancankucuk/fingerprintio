export default function getSessionStorage() {
    let window = window || this || self;
    if(window) {
        return !!window.sessionStorage;
    }
}