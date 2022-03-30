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
    somma = somma + parseInt(numeroUtente[i]);
    console.log(somma)
}

const stampa_a_schermo = document.querySelector("h1")

stampa_a_schermo.innerHTML = `la somma di tutte le cifre che compongono il numero che è scelto è ${somma}`