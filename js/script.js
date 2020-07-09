// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// var listaEmails = ['bill@microsoft.com', 'sjobs@apple.com', 'mr_z@facebook.com']
// var email = prompt('Inserire la propria email');
// var checkMail = 'Email non trovata!';
//
// for(i = 0; i < listaEmails.length; i++){
//     if(email == listaEmails[i]) {
//         checkMail = 'Email trovata!';
//     }
// }
//
// document.getElementById('check-email').innerHTML = checkMail;

// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// inizializzo variabili
var dado1 = Math.floor(Math.random() * 6 ) + 1;
var dado2 = Math.floor(Math.random() * 6 ) + 1;
var check = "I due dadi sono uguali!"

// Processo check valori
if (dado1 != dado2) {
    if (dado1 > dado2) {
        check = "Vince Player One!";
    } else {
        check = "Vince Player Two!"
    }
}

// stampo messaggio esito
document.getElementById('lancio-dado').innerHTML = "Player One lancia " + dado1 + " e Player Two lancia " + dado2 + '. ' + check;
