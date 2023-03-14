export default function getHdr() {
    return window?.matchMedia("(dynamic-range: high)")?.matches
}