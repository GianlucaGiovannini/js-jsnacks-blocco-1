/* 
SNACK 8
chiedi un numero di 4 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero
*/

const numeroUtente = prompt("inserisci un numero di 4 cifre");
console.log(numeroUtente)

if (isNaN(numeroUtente)) {
    alert("non hai inserito un numero")
}

let somma = 0;

for (let i = 0; i < numeroUtente.length; i++) {
    somma += parseInt(numeroUtente[i]);
    // si può fare anche con somma = somma + parseInt(numeroUtente[i]);
    console.log(somma)
}

const stampa_a_schermo = document.querySelector("h1")

stampa_a_schermo.innerHTML = `la somma di tutte le cifre che compongono il numero che è scelto è ${somma}`

//soluzione fabio
/* 
const numeroUser2 = prompt("Inserisci un numero di 4 cifre");

let somma2 = 0;

for (let n = 0; n < numeroUser2.length; n++){
    let numero = parseInt(numeroUser2[n]); 
    somma2 += numero;
} 

*/