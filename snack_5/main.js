/* 
SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

const numeriDispari = [];
const numeriPari = [];


for (let i = 0; i < 6; i++) {
    let numeroGiocatore = Number(prompt("Inserisci un numero"));
    console.log(numeroGiocatore)


    if (numeroGiocatore % 2 != 0) {
        numeriDispari.push(numeroGiocatore)
    } else {
        numeriPari.push(numeroGiocatore)
    }

}

console.log(numeriDispari)

const doveStampoDispari = document.querySelector(".dispari");
const doveStampoPari = document.querySelector(".pari");

doveStampoDispari.innerHTML = `i numeri dispari che hai scritto sono i seguenti: ${numeriDispari}`

doveStampoPari.innerHTML = `i numeri dispari che hai scritto sono i seguenti: ${numeriPari}`