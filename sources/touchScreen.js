export default function isTouchScreen() {
    let window = window || this || self;
    if(window) {
        let touchPoints = window?.navigator?.maxTouchPoints;
        return touchPoints > 0;
    }
}