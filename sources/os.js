import { Platform } from "../models/platform";

export default function getOs() {
    if(window) {
        let os = window?.navigator?.platform;
        return checkOs(os);
    }
}

function checkOs(os) {
    switch(os) {
        case Platform.Windows:
            return 'Windows';
        case Platform.Linux:
            return 'Linux';
        case Platform.MacOS:
            return 'MacOS';
        default:
            return '';        
    }
}