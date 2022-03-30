/* SNACK 1
L’ utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const userNumber1 = Number(prompt("Inserisci un numero"))
console.log(userNumber1)

const userNumber2 = Number(prompt("Inserisci un'altro numero"))
console.log(userNumber2)

let stamp;

if (userNumber1 > userNumber2) {
    stamp = `il numero ${userNumber1} è maggiore del numero ${userNumber2}`;
} else if (userNumber1 < userNumber2) {
    stamp = `il numero ${userNumber2} è maggiore del numero ${userNumber1}`;
} else {
    stamp = `il numero ${userNumber1} è uguale al numero ${userNumber2}`;
}

console.log(stamp)