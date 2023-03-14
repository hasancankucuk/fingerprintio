export default function getSessionStorage() {
    if(window) {
        return !!window.sessionStorage;
    }
}