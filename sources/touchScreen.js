export default function isTouchScreen() {
    if(window) {
        let touchPoints = window?.navigator?.maxTouchPoints;
        return touchPoints > 0;
    }
}