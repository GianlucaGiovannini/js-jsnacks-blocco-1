/* 
SNACK 7
Stampa le potenze di 2 fino a 1000
*/

const numeroDaElevare = 2;

for (let i = 0; i < 10; i++) {
    let numeroElevato = Math.pow(numeroDaElevare, i);
    console.log(numeroElevato)
}

// soluzione 2
for (let n = 0; Math.pow(2, n) < 1000; n++) {
    console.log(Math.pow(2, n))
}