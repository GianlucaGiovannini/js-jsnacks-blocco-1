/* 
SNACK 6
Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente
*/
// chiedi all'utente un numero 
const numeroUtente = prompt("Inserisci un numero");

// calcola il cubo del numero che ha scelto 
const numeroElevato = parseInt(Math.pow(numeroUtente, 3))

console.log(numeroElevato)

// calcola il cubo dei numeri che l'utente ha digitato quindi se digita 5 bisogna fare la potenza di 1 - 2 - 3 - 4 - 5 

for (let i = 1; i <= numeroUtente; i++) {
    let cubi = parseInt(Math.pow(i, 3))

    console.log(cubi)
}







const stampa_a_schermo = document.querySelector("h1")

stampa_a_schermo.innerHTML = `Il numero che hai scelto elevato al cubo è ${numeroElevato}`