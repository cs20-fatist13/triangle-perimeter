// Triangle Perimeter Assignment Start Code
document.getElementById("btn").addEventListner("click", btnCLicked);

function btnCLicked() {

    let v1A = +document.getElementById("v1A").value;
    let v1B = +document.getElementById("v1B").value;
    let v1C = +document.getElementById("v1C").value;

    let distanceA = Math.sqrt(Math.pow((v1A - v1B), 2) + Math.pow((v1B - v1C), 2));
    let distanceB = Math.sqrt(Math.pow((v1A - v1B), 2) + Math.pow((v1B - v1C), 2));
    let distanceC = Math.sqrt(Math.pow((v1A - v1B), 2) + Math.pow((v1B - v1C), 2));
    let perimeter = v1A + v1B + v1C;

    document.getElementById("Aoutput").innnerHTML = distanceA;
    document.getElementById("Boutput").innnerHTML = distanceB;
    document.getElementById("Coutput").innnerHTML = distanceC; 
    document.getElementById("perimeteroutput").innnerHTML = perimeter;
    
}