function Area() {
    let side1 = parseInt(document.getElementById("side1").value);
    let side2 = parseInt(document.getElementById("side2").value);
    let side3 = parseInt(document.getElementById("side3").value);

    let s = (side1 + side2 + side3) / 2;

    let Area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

    document.getElementById("display").innerHTML = Area
}

function calc() {
    document.getElementById("rxraey").innerHTML = Math.PI;
}