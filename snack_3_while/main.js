/* 
SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/


/* let somma, numero_utente;

somma = 0;

for (let i = 0; i < 10; i++) {
    numero_utente = Number(prompt("Inserisci un numero"))
    somma = somma + numero_utente;
    console.log(somma)
} */


let userNumber;
let chiedi = 1;
let somma = 0;

while (chiedi <= 10) {
    userNumber = Number(prompt("Inserisci un numero"));

    somma += userNumber;

    chiedi++

}

console.log(somma)