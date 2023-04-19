
// Prendere da tastiera un un numero 

/*
let valore;
let valoreConvertito;
valore = prompt('Inserisci un numero');
valoreConvertito = parseInt(valore);
while(isNaN(valoreConvertito)) {
    valoreConvertito = parseInt(valore);
    valore = prompt('Inserisci un numero');
}
console.log(valore);
*/


let valore;
let valoreConvertito;
do {
    valore = prompt('Inserisci un numero');
    valoreConvertito = parseInt(valore);
} while(isNaN(valoreConvertito));
console.log(valore);


