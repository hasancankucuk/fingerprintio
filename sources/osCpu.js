export default function getOsCpu() {
    let window = window || this || self;
    return window?.navigator.oscpu;
}