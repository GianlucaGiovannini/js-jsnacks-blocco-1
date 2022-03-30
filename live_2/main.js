/* 
SNACK 2 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

*/

const userWord1 = prompt("Inserisci una parola")
const userWord2 = prompt("Inserisci un'altra parola")

const firstWord = userWord1.length
const secondWord = userWord2.length

let stamp;

if (firstWord > secondWord) {
    stamp = `la parola più corta è ${userWord1} ed è lunga ${firstWord} caratteri`
} else if (firstWord < secondWord) {
    stamp = `la parola più corta è ${userWord2} ed è lunga ${secondWord} caratteri`
} else {
    stamp = `la parola ${userWord1} e la parola ${userWord2} sono lunghe uguali cioè ${firstWord} caratteri ciascuna`
}

console.log(stamp)

const stampa_a_schermo = document.querySelector("h1")

stampa_a_schermo.innerHTML = stamp