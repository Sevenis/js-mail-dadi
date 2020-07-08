// var nomi = ['Pietro', 'Luigi', 'Paolo'];
// console.log(nomi);
// console.log(nomi[0]);
// console.log(nomi[1]);
// console.log(nomi[2]);
//
// document.getElementById('primo-elemento').innerHTML = nomi[0];
// document.getElementById('secondo-elemento').innerHTML = nomi[1];
// document.getElementById('terzo-elemento').innerHTML = nomi[2];
//
// document.getElementById('elementi').innerHTML = nomi[0] + ' ' + nomi[1] + ' ' + nomi[2];
//
// var numeri = [3, 5, 'ciao'];
// document.getElementById('array-vario').innerHTML = numeri[0] + ' ' + numeri[1] + ' ' + numeri[2];
//
// // length determina lungezza array
// var lunghezza=nomi.length;
// console.log(lunghezza);
//
// // inserisce in coda un nuovo elemento nell'array
// var colore = 'rosso';
// nomi.push('Pietro', 7, colore);
//
// var lunghezza=nomi.length;
// console.log('Lunghezza dell\'array ' + lunghezza);
// console.log(nomi);
//
// var nomeMio = prompt('Inserisci il tuo nome');
// nomi.push(nomeMio);
//
// var lunghezza=nomi.length;
// console.log('Lunghezza dell\'array ' + lunghezza);
// console.log(nomi);

// crea un array di 3 elementi, fa chiedere un numero e ti visualizza il nome associato nell'Array
//
// var studenti = ['Pietro', 'Luigi', 'Paolo'];
// var num = parseInt(prompt('Inserisci un numero da 0 a 2'));
// document.getElementById('studente').innerHTML = 'Lo studente associato è: ' + studenti[num];


// esempio 3 array e istruzioni condizionali: check se il primo dell'array è uguale, minore o maggiore dell'ultimo

var numeri = [12,7,4,2,8]

var primo = numeri[0];
var ultimo = numeri[numeri.length - 1];
console.log(primo);
console.log(ultimo);

if (primo == ultimo) {
    console.log('sono uguali');
} else if (primo > ultimo) {
    console.log('il primo è maggiore');
} else {
    console.log('il secondo è maggiore');
}
