// richiesta km da percorrere
var chilometri = parseInt(prompt("Inserisci i chilometri che intendi percorrere"));

// richiesta eta del passeggero
var eta = parseInt(prompt("Inserisci la tua eta\'"));

// prezzi
var prezzoNonScontato = chilometri * 0.21;

var prezzoMinorenni = prezzoNonScontato - ((prezzoNonScontato / 100) * 20);

var prezzoOver65 = prezzoNonScontato - ((prezzoNonScontato / 100) * 40);

// prezzo totale del viaggio
if ( eta < 18 ) {
  alert("Il prezzo del tuo biglietto e\' di " + prezzoMinorenni + "\u20AC");
} else if ( eta >= 18 && eta < 65 ) {
  alert("Il prezzo del tuo biglietto e\' di " + prezzoNonScontato + "\u20AC");
} else {
  alert("Il prezzo del tuo biglietto e\' di " + prezzoOver65 + "\u20AC");
}
