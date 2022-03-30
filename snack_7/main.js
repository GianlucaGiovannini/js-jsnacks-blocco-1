/* 
SNACK 7
Stampa le potenze di 2 fino a 1000
*/

const numeroDaElevare = 2;

for (let i = 0; i < 1000; i++) {
    let numeroElevato = Math.pow(numeroDaElevare, i);
    console.log(numeroElevato)
}