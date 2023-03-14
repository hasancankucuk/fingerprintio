export default function getLocalStorage() {
    if(window) {
        return window.localStorage;
    }
}