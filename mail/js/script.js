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

/* first version
//chiedo all'utente di inserire la propria email
const mail = prompt('Inserisci la tua email');

//creo un array di indirizzi mail
const mails = ['mariorossi@gmail.com', 'mariorossi82@gmail.com', 'mariaverdi@gmail.com', 'mariaverdi@outlook.it'];
console.log(mails);

let span = document.querySelector('span');
let find = false;

//creo un ciclo for che cerchi gli indirizzi dell'array
for (let index = 0; index < mails.length; index++) {
    const element = mails[index];

    //controllo se un elemento dell'array è uguale alla mail inserita dall'utente
    if (mail.toLowerCase() == element.toLowerCase()) {
        find = true;
    }
}

if (mail == '') { //se la stringa è vuota
    console.log('inserita stringa vuota');
    span.innerHTML = 'Aggiorna la pagina ed inserisci la tua email';
} else if (find) { //se l'indirizzo mail inserito dall'utente corrisponde a uno dell'array, allora
    console.log('Indirizzo email presente nella lista');
    span.innerHTML = 'Indirizzo mail ' + mail + ' presente nella lista';
} else if (find == false) { //altrimenti se non è presente
    console.log('Indirizzo email non presente nella lista');
    span.innerHTML = 'Indirizzo mail ' + mail + ' non presente nella lista';
}
*/

//second version
//creo variabile per bottone
const button = document.getElementById('generate');

//creo un array di indirizzi mail
const mails = ['mariorossi@gmail.com', 'mariorossi82@gmail.com', 'mariaverdi@gmail.com', 'mariaverdi@outlook.it'];
console.log(mails);

//creo variabili per p e il boolean find
let p = document.querySelector('p');
let find = false;

//al click del bottone effettuo le verifiche
button.addEventListener('click', function () {
    const mail = document.getElementById('email');
    const indirizzo = mail.value;

    //ciclo for per controllare gli indirizzi mail dell'array
    for (let index = 0; index < mails.length; index++) {
        const element = mails[index];
        //controllo se un elemento dell'array è uguale alla mail inserita dall'utente
        if (indirizzo.toLowerCase() == element.toLowerCase()) {
            find = true;
        }
    }

    if (indirizzo == '') { //se la stringa è vuota
        console.log('inserita stringa vuota');
        p.innerHTML = 'Aggiorna la pagina ed inserisci la tua email';
    } else if (find) { //se l'indirizzo mail inserito dall'utente corrisponde a uno dell'array, allora
        console.log('Indirizzo email ' + indirizzo + ' presente nella lista');
        p.innerHTML = 'Indirizzo mail ' + indirizzo + ' presente nella lista.';
    } else if (find == false) { //altrimenti se non è presente
        console.log('Indirizzo email ' + indirizzo + ' non presente nella lista');
        p.innerHTML = 'Indirizzo mail ' + indirizzo + ' non presente nella lista.';
    }
})
