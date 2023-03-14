export default function getColorGamut() {
    let values = ['srgb', 'p3', 'rec2020'];
    for (let item in values) {
        return (matchMedia(`(color-gamut: ${item})`).matches);
    }
}