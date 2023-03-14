export default function getScreenResolution() {
    let window = window || this || self;
    return `${window?.screen?.availHeight}x${window?.screen?.availWidth}`; 
}