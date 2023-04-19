
// Chiedere all'utente di inserire un numero N e successivamente
// riempire un array con N valori di qualsiasi tipo presi da tastiera.

/*
const stringaInserita = prompt('Inserisci un numero');
const n = parseInt(stringaInserita);
const array = [];
for (let i = 0; i < n; i++) {
    // prenderà un valore con prompt() e lo mette nell'array
    const valore = prompt(`Inserisci il valore numero ${i + 1}`);
    array.push(valore); // array[array.length] = valore;
}
console.log(array);
*/


// Riempire un array con dei valori presi da tastiera,
// finché l'utente non inserisce la stringa 'FINE'.

/*
const array = [];
let valore = prompt("Inserisci un valore qualsiasi (inserisci FINE per terminare)");
while(valore !== 'FINE') {
    array.push(valore);
    valore = prompt("Inserisci un valore qualsiasi (inserisci FINE per terminare)");
}
console.log(array);
*/

/*
const a = [1, 2, 3];
for (let i = 0; i < a.length; i++) {
    console.log(a);
}
*/

/*
const array = [
    1,
    2,
    3,
];
const valore = parseInt(prompt("Inserisci un numero"));
let esisteValoreUguale = false;
let i = 0;
while (i < array.length && esisteValoreUguale == false) {
    if (array[i] === valore) {
        esisteValoreUguale = true;
    }
    i++;
}
if (esisteValoreUguale === true) {
    console.log("Trovato")
} else {
    console.log('Non trovato');
}
*/
