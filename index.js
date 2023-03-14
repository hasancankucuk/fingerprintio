import { audioFingerprint, getColorDepth, getColorGamut, getFonts, getHardwareConcurrency,
    getOs, getOsCpu, getPlugins, getRectFingerprint, getScreenResolution, getSpeechSynthesis,
    getStorageSupport, getTimeZone, isTouchScreen, getUserAgent, getVideoCard, getVendor } from "./sources";

import hashService from "./services/";

let fingerprintObject = {
    AudioFingerprint: audioFingerprint() || null,
    ColorDepth: getColorDepth() || null,
    ColorGamut: getColorGamut() || null,
    Fonts: getFonts() || null,
    HardwareConcurrency: getHardwareConcurrency() || null,
    Os: getOs() || null,
    OsCpu: getOsCpu() || null,
    Plugins: getPlugins() || null,
    RectFingerprint: getRectFingerprint() || null,
    ScreenResolution: getScreenResolution() || null,
    SpeechSynthesis: getSpeechSynthesis() || null,
    StorageSupport: getStorageSupport() || null,
    TimeZone: getTimeZone() || null,
    TouchScreen: isTouchScreen() || null,
    UserAgent: getUserAgent() || null,
    VideoCard: getVideoCard() || null,
    Vendor: getVendor() || null
};

export default function getFingerprint() {
    return hashService(fingerprintObject);
}