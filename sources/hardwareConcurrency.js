export default function getHardwareConcurrency() {
    if(window) {
        return window.navigator?.hardwareConcurrency;
    }
}