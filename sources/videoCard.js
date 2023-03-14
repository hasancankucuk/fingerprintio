export default function getVideoCard() {
    const gl = document?.createElement('canvas')?.getContext('webgl');
    if(!gl) {
        return null;
    }

    const debugInfo = gl?.getExtension('WEBGL_debug_renderer_info');
    return debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : null;
}
