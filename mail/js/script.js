/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. 

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?

Consigli del giorno:
Iniziate dalla parte base, se tutto funziona passiamo a fare dei check su casi limite, fatto questo passiamo a vedere se esistono dei metodi di JS che possono aiutarci.
I bonus sono sempre da fare in cartella separata.*/

//chiedo all'utente di inserire la propria email
const mail = prompt('Inserisci la tua email');

//creo un array di indirizzi mail
const mails = ['mariorossi@gmail.com', 'mariorossi82@gmail.com', 'mariaverdi@gmail.com', 'mariaverdi@outlook.it'];
console.log(mails);

let span = document.querySelector('span');
let find = false;

//creo un ciclo for che cerchi 
for (let index = 0; index < mails.length; index++) {
    const element = mails[index];

    //controllo se un elemento dell'array è uguale alla mail inserita dall'utente
    if (mail.toLowerCase() == element.toLowerCase()) {
        find = true;
    }
}

//se l'indirizzo mail inserito dall'utente corrisponde a uno dell'array, allora
if (find) {
    console.log('Indirizzo email presente nella lista');
    span.innerHTML = 'Indirizzo mail ' + mail + ' presente nella lista';
} else { //altrimenti
    console.log('Indirizzo email non presente nella lista');
    span.innerHTML = 'Indirizzo mail ' + mail + ' non presente nella lista';
}