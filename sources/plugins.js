export default function getPlugins() {    
    let window = window || this || self;
    if(window) {
        return window.navigator?.plugins;
    }
}