// Primo esercizio

var stringa = "Sto imparando JavaScript";

document.getElementById("maiuscola").innerHTML = stringa.toUpperCase();
document.getElementById("minuscola").innerHTML = stringa.toLowerCase();

let stringaArray = stringa.split("");

document.getElementById("strArray").innerHTML = stringaArray.join(", ");
document.getElementById("estraiCaratteri").innerHTML = stringa[2] + stringa[1] + stringa[14] + stringa[18];
document.getElementById("concatena").innerHTML = stringa + " JS";

let indexMpar = stringa.indexOf("mpar");
let indexMparEnd = stringa.indexOf("ando");

document.getElementById("estraiStringa").innerHTML = stringa.slice(indexMpar, indexMparEnd);


// Secondo esercizio

var persone = ["Giovanni", "Carla", "Piero", "Mirtilla"];

document.getElementById("array").innerHTML = persone;
document.getElementById("lunghezza").innerHTML = persone.length;
document.getElementById("elemento").innerHTML = persone[2];
document.getElementById("ultimo").innerHTML = persone[persone.length - 1];

persone.splice(2, 1, "Massimo")
document.getElementById("modificato").innerHTML = persone;


// Terzo esercizio

var nascita = [2001, 1990, 1987, 2018, 2010];

function calcolaEta(nascita) {
    var calcolo = 2022 - nascita;
    return calcolo;
}

document.getElementById("eta1").innerHTML += calcolaEta(nascita[0]) + " anni";
document.getElementById("eta2").innerHTML += calcolaEta(nascita[1]) + " anni";
document.getElementById("eta3").innerHTML += calcolaEta(nascita[2]) + " anni";
document.getElementById("eta4").innerHTML += calcolaEta(nascita[3]) + " anni";
document.getElementById("eta5").innerHTML += calcolaEta(nascita[4]) + " anni";

let anni = [calcolaEta(nascita[0]), calcolaEta(nascita[1]), calcolaEta(nascita[2]), calcolaEta(nascita[3]), calcolaEta(nascita[4])];

document.getElementById("arrayEta").innerHTML += anni;



// Quarto esercizio

let animali = ["coniglio", "cane", "gatto", "criceto"];

document.getElementById("intero").innerHTML = animali;

animali.push("leone");
document.getElementById("aggiunto").innerHTML = animali;

animali.pop();
document.getElementById("estratto").innerHTML = animali;

document.getElementById("verifica1").innerHTML = animali.includes("coniglio");
document.getElementById("verifica2").innerHTML = animali.includes("leone");