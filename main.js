var testo = prompt("");
//array vuoto che riempirò con le parole
//inserite dall utente che vuole censurare
var arrayParole = [];
//stabilisco quanti parole censurare
for (var i = 0; i < 2; i++) {
  var paroleProibite = prompt();
  arrayParole.push(paroleProibite);
}
console.log("parole da censurare",arrayParole);

//array vuoto che popolerò con le parole di var testo
//ogni volta che c'e uno spazio é un valore
//NOTA slip crea un array quindi testoSplittato gia array avra un array
// al  suo interno
var testoSplittato = [];
testoSplittato.push(testo.split(" "));
console.log("testo diviso",testoSplittato);

//se una parola di testo splittato ê uguale ad una delle parole inserita
// paroleProibite sostituiscila con xxx
var trovata = '';

for (var i = 0; i < testoSplittato[0].length; i++) {
  if (testoSplittato[0].includes(arrayParole[i])) {
    trovata = trovata + " " + arrayParole[i];
    //posizione della parola pribita dentro al testo
    var posizione = testoSplittato[0].indexOf(arrayParole[i]);
    console.log("la posizione della parola da sostituire è",posizione);
    testoSplittato[0][posizione] = "xxx";
  }
}
console.log("parole trovate",trovata);
console.log(testoSplittato);
