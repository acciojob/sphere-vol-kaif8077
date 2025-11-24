let radiusInput = document.getElementById('radius');

function volume_sphere(e) {
    e.preventDefault();

    let radius = parseFloat(radiusInput.value);

    if (isNaN(radius) || radius <= 0) {
        v.value="NaN"
        return;
    }

    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    let v = document.getElementById('volume');
    v.value = volume.toFixed(4);
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
