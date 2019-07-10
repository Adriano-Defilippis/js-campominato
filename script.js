// Il computer deve generare 16 numeri casuali da 1 a 100.

// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// BONUS (*se e solo se avete concluso il caso base*):
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 con difficoltà 2=> da 1 a 50



// Creo la Funzione per Generare numeri random, e li pusha in un Array, il range e la quantità da generare le imposto con variabili locali
function generatoreRandom(minOutput, maxOutput, min, max, array){

var minOutput, maxOutput, n, min, max, array;

array = [];

  for (var i = minOutput; i<=maxOutput; i++){

    n = Math.floor(Math.random() * (max - min) + min);
    console.log("Numero ", i, " random generato dal pc; ", n);

    array.push(n);

  }
  return array;
}



// Funzione per chiedere massimo 20 input all'numUtente
function tentativiMax(max, array){

  var max;

  console.log(array.join(","));


  for (i = 0; i <= max; i++){

    input = parseInt(prompt('Inserisci un numero da 1 a 100. Attento alle mine!'));


  }

}

function in_array(input, a){
    //input => VALORE CERCATO
    //a => ARRAY

    for(var i = 0; i < a.length; i++) {
      if(a[i] == input) return true;
    }
    return false;
  }






// Esecuzione del codice
var sequenzaRandom = generatoreRandom(1, 16, 1, 100);

var input = parseInt(prompt('Inserisci un numero da 1 a 100. Attento alle mine!'));


// Log dei numeri generati in base alla funzione generatoreRandom;
console.log("Array generato dal pc ", sequenzaRandom);

console.log("Lunghezza array generato dal pc ", sequenzaRandom.length);


var penetrazion = true;

// Ciclo che mi permette di uscire dalla richiesta input se il numero inserito è presente nell'array generato dal pc
while (penetrazion == true){

  input = parseInt(prompt('Inserisci un numero da 1 a 100. Attento alle mine!'));

  if(in_array(input, sequenzaRandom)) {
    alert('presente');

    console.log(input, ' presente');

    penetrazion = false;
  }else{
    alert('elemento non trovato');
    console.log(input, ' elemento non trovato');
    penetrazion = true;
  }
}
