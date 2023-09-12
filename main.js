// Triangle Perimeter Assignment Code
document.getElementById("btn").addEventListner("click", btnCLicked);

function btnCLicked() {

    let v1A = +document.getElementById("v1A").value;
    let v1B = +document.getElementById("v1B").value;
    let v1C = +document.getElementById("v1C").value;

    document.getElementById("Aoutput").innnerHTML = getDistance(v1A, v1B, v1C, v1D);
    document.getElementById("Boutput").innnerHTML = getDistance(v2A, v2B, v2C, v2D);
    document.getElementById("Coutput").innnerHTML = getDistance(v3A, v3B, v3C, v3D);
    document.getElementById("perimeteroutput").innnerHTML = getPerimeter;
}

function getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    let distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    return distance;
}

function getPerimeter(distanceA, distanceB, distanceC) {
    let perimeter = distanceA + distanceB + distanceC;
    return perimeter;
}