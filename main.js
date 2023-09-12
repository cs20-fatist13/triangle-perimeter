// Triangle Perimeter Assignment Code
document.getElementById("btn").addEventListner("click", btnCLicked);

function btnCLicked() {

    let xA = +document.getElementById("xA").value;
    let yA = +document.getElementById("yA").value;
    let xB = +document.getElementById("xB").value;
    let yB = +document.getElementById("yB").value;
    let xC = +document.getElementById("xC").value;
    let yC = +document.getElementById("yC").value;

   let distanceA = getDistance(xA, yA, xB, yB);
    let distanceB = getDistance(xB, yB, xC, yC);
    let distanceC = getDistance(xC, yC, xA, yA);
    let perimeter = getPerimeter(distanceA, distanceB, distanceC);

   
    document.getElementById("ABoutput").innnerHTML = distanceA + distanceB;
    doccument.getElementById("acoutput").innnerHTML = distanceA + distanceC;
    document.getElementById("bcoutput").innnerHTML = distanceB + distanceC;
    document.getElementById("Perimeteroutput").innnerHTML = perimeter;
    
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