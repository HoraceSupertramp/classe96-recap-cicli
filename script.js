
for (let i = 0; i < 10; i++) {
    // istruzioni...
}

for (/*inizializzazione*/, /*condizione di continuazione */, /*incremento */) {
    // corpo
}

while (/*condizione di continuazione */) {
    // corpo
}

// ---------------------------------------------------


for (/*inizializzazione*/, /*condizione di continuazione */, /*incremento */) {
    // corpo
}


/*inizializzazione*/
while(/*condizione di continuazione */) {
    // corpo
    /*incremento */
}


const a = [1, 2, 3];
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

// equivalente con while

const a = [1, 2, 3];
let i = 0;
while(i < a.length) {
    console.log(a[i]);
    i++;
}