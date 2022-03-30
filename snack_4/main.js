/* 
in un array sono contenuti i nomi degli invitati alla festa del grande gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa
*/

const userEnable = ["gianluca", "marco", "alessio", "manuel", "fabio", "martina", ]

const userName = prompt("Inserisci il tuo nome")
console.log(userName);

let enable = false;

for (let i = 0; i < userEnable.length; i++) {
    const control = userEnable[i]

    if (userName == control) {
        enable = true
        console.log(enable)
    }
}

let stamp;

if (enable != true) {
    stamp = "utente non abilitato"
} else {
    stamp = "utente abilitato"
}

console.log(stamp);

const stampa_a_schermo = document.querySelector("h1")
stampa_a_schermo.innerHTML = stamp;