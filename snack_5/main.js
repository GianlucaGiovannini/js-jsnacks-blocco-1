/* 
SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

const numeriDispari = [];


for (let i = 0; i < 6; i++) {
    let numeroGiocatore = Number(prompt("Inserisci un numero"));
    console.log(numeroGiocatore)


    if (numeroGiocatore % 2 != 0) {
        numeriDispari.push(numeroGiocatore)
    }

}

console.log(numeriDispari)

const doveStampo = document.querySelector("h1");

doveStampo.innerHTML = `i numeri dispari che hai scritto sono i seguenti: ${numeriDispari}`