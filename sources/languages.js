function getBrowserLanguage() {
    return window?.navigator?.language;
}

function getSupportedLanguages() {
    return window?.navigator?.languages;
}

export {
    getBrowserLanguage,
    getSupportedLanguages
}