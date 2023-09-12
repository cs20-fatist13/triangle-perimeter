// Triangle Perimeter Assignment Code
document.getElementById("btn").addEventListner("click", btnCLicked);

function btnCLicked() {

    let xA = +document.getElementById("xA").value;
    let yA = +document.getElementById("yA").value;
    let xB = +document.getElementById("xB").value;
    let yB = +document.getElementById("yB").value;
    let xC = +document.getElementById("xC").value;
    let yC = +document.getElementById("yC").value;

   let AB = dist(xA, yA, xB, yB);
    let AC = dist(xA, yA, xC, yC);
    let BC = dist(xB, yB, xC, yC);
    let perimeter = peri(distanceA, distanceB, distanceC);

   
    document.getElementById("ABoutput").innnerHTML = AB;
    doccument.getElementById("ACoutput").innnerHTML = AC;
    document.getElementById("BCoutput").innnerHTML = BC;
    document.getElementById("Perimeteroutput").innnerHTML = perimeter;
    
}

function dist(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    let distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    return distance;
}

function peri(distanceA, distanceB, distanceC) {
    let perimeter = distanceA + distanceB + distanceC;
    return perimeter;
}