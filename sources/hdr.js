export default function getHdr() {
    let window = window || this || self;
    return window?.matchMedia("(dynamic-range: high)")?.matches
}