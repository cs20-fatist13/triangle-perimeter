// Triangle Perimeter Assignment Code
document.getElementById("btn").addEventListener("click", btnClicked);


function btnClicked() {
  let xA = +document.getElementById("xA").value;
  let yA = +document.getElementById("yA").value;
  let xB = +document.getElementById("xB").value;
  let yB = +document.getElementById("yB").value;
  let xC = +document.getElementById("xC").value;
  let yC = +document.getElementById("yC").value;

  let AB = getDistance(xA, yA, xB, yB);
  let AC = getDistance(xA, yA, xC, yC);
  let BC = getDistance(xB, yB, xC, yC);
  let perimeter = getPerimeter(AB, AC, BC);

  document.getElementById("AB-output").innerHTML = AB.toFixed(2);
  document.getElementById("AC-output").innerHTML = AC.toFixed(2);
  document.getElementById("BC-output").innerHTML = BC.toFixed(2);
  document.getElementById("Perimeter-output").innerHTML = perimeter.toFixed(2);
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

//function dist(x1, y1, x2, y2) {
//let xDistance = x2 - x1;
//let yDistance = y2 - y1;
//let distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
//return distance;
//}

//function peri(distanceA, distanceB, distanceC) {
//let perimeter = distanceA + distanceB + distanceC;
//return perimeter;
//}
