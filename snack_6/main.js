/* 
SNACK 6
Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente
*/

const numeroUtente = Number(prompt("Inserisci un numero"));


const numeroElevato = Math.pow(numeroUtente, 3)

console.log(numeroElevato)

const stampa_a_schermo = document.querySelector("h1")

stampa_a_schermo.innerHTML = `Il numero che hai scelto elevato al cubo è ${numeroElevato}`