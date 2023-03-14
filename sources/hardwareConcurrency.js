export default function getHardwareConcurrency() {
    let window = window || this || self;
    if(window) {
        return window.navigator?.hardwareConcurrency;
    }
}