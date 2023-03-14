export default function getPlugins() {    
    if(window) {
        return window.navigator?.plugins;
    }
}