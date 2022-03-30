/* 
SNACK 9
calcola la somma e la media dei primi 10 numeri
*/

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numeri);

let somma = 0;

for (let i = 0; i < numeri.length; i++) {
    somma = somma + parseInt(numeri[i]);
    console.log(somma)

}

const media = somma / numeri.length
console.log(media);

const stampaSomma = document.querySelector("h1")
stampaSomma.innerHTML = `la somma dei primi 10 numeri è ${somma}`

const stampaMedia = document.querySelector("h2")
stampaMedia.innerHTML = `la media della somma dei primi 10 numeri diviso i 10 numeri è ${media}`