export default function getScreenResolution() {
    return `${window?.screen?.availHeight}x${window?.screen?.availWidth}`; 
}