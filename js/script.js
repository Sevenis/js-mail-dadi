var listaEmails = ['bill@microsoft.com', 'sjobs@apple.com', 'mr_z@facebook.com']
var email = prompt('Inserire la propria email');
var checkMail = 'Email non trovata!';

for(i = 0; i < listaEmails.length; i++){
    if(email == listaEmails[i]) {
        checkMail = 'Email trovata!';
    }
}

document.getElementById('check-email').innerHTML = checkMail;
