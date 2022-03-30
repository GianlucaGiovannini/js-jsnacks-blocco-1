/* 
SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/

/* const numero1 = Number(prompt("Inserisci un numero"))
const numero2 = Number(prompt("Inserisci un numero"))
const numero3 = Number(prompt("Inserisci un numero"))
const numero4 = Number(prompt("Inserisci un numero"))
const numero5 = Number(prompt("Inserisci un numero"))
const numero6 = Number(prompt("Inserisci un numero"))
const numero7 = Number(prompt("Inserisci un numero"))
const numero8 = Number(prompt("Inserisci un numero"))
const numero9 = Number(prompt("Inserisci un numero"))
const numero10 = Number(prompt("Inserisci un numero"))

const somma = numero1 + numero2 + numero3 + numero4 + numero5 + numero6 + numero6 + numero7 + numero8 + numero9 + numero10;

console.log(somma); */


const numeri = []

for (let i = 0; i < 10; i++) {
    let richiestaNumeri = Number(prompt("Inserisci un numero"))
    console.log(richiestaNumeri)
    numeri.push(richiestaNumeri)

    for (let s = 0; s < numeri.length; s++) {
        let sommaNumeri = numeri[s];
        let numeriSommati = sommaNumeri + sommaNumeri;
        console.log(numeriSommati)
    }
}