export default function getColorDepth() {
    let window = window || this || self;
    return window?.screen?.colorDepth;
}