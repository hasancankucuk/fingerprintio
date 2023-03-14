// ref = https://github.com/RobinLinus/ubercookie/blob/70fc746046b98d2b20954befe083ecd2a10f7e21/index.html

export default function getRectFingerprint() {
    var elem = document.createElement('div');
    var s = elem.style;
    s.position = 'absolute';
    s.left = '3.1px';
    s.top = '2.1px';
    s.zIndex = '-100';
    s.visibility = 'hidden';
    s.fontSize = '19.123px';
    s.transformOrigin = '0.1px 0.2px 0.3px';
    s.webkitTransformOrigin = '0.1px 0.2px 0.3px';
    s.webkitTransform = 'scale(1.01123) matrix3d(0.251106, 0.0131141, 0, -0.000109893, -0.0380797, 0.349552, 0, 7.97469e-06, 0, 0, 1, 0, 575, 88, 0, 1)';
    s.transform = 'scale(1.01123) matrix3d(0.251106, 0.0131141, 0, -0.000109893, -0.0380797, 0.349552, 0, 7.97469e-06, 0, 0, 1, 0, 575, 88, 0, 1)';
    elem.innerHTML = '<h1>Sed ut perspiciatis unde</h1>pousdfnmv<b>asd<i id="target">asd</i></b>';
    document.body.appendChild(elem);
    var uuid = '';
    var rect = document.getElementById('target').getClientRects()[0];
    for (var key in rect) {
        uuid += rect[key];
    }

    if (elem.remove) elem.remove();
    return uuid;
}