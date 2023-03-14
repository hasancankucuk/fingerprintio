let window = window || this || self;
export default function isPrivateTab() {
    // works on chromium
    return window?.navigator?.webkitTemporaryStorage.queryUsageAndQuota((used, granted) => {
        return (granted && granted < browserPerformance());
    });
}


function browserPerformance() {
    return window?.performance?.memory?.jsHeapSizeLimit || 99999999999;
}
