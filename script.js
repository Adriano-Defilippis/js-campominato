// Il computer deve generare 16 numeri casuali da 1 a 100.

// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// BONUS (*se e solo se avete concluso il caso base*):
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 con difficoltà 2=> da 1 a 50


// Creo la Funzione per Generare numeri random, il range e la quantità da generare le imposto con variabili locali
function generatoreRandom(minOutput, maxOutput, min, max){

var minOutput, maxOutput, n, min, max;

  for (var i = minOutput; i<=maxOutput; i++){

    n = Math.floor(Math.random() * (max - min) + min);
    console.log(n);
  }
  return n;
}






generatoreRandom(1, 16, 1, 100)
