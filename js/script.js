// richiesta km da percorrere
var chilometri = parseInt(prompt("Inserisci i chilometri che intendi percorrere"));

// richiesta eta del passeggero
var eta = parseInt(prompt("Inserisci la tua eta\'"));

// prezzi
var prezzoNonScontato = chilometri * 0.21;

var prezzoMinorenni = prezzoNonScontato - ((prezzoNonScontato / 100) * 20);

var prezzoOver65 = prezzoNonScontato - ((prezzoNonScontato / 100) * 40);

// prezzo totale del viaggio
