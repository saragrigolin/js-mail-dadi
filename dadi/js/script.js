/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?

Consigli del giorno:
Iniziate dalla parte base, se tutto funziona passiamo a fare dei check su casi limite, fatto questo passiamo a vedere se esistono dei metodi di JS che possono aiutarci.
I bonus sono sempre da fare in cartella separata. */

//genero due numeri random da 1 a 6 e li mostro in console
let numberUser = Math.floor(Math.random() * 6) + 1;
let numberPc = Math.floor(Math.random() * 6) + 1;
console.log(numberUser, numberPc);

//variabili per DOM
let numbers = document.getElementById('numbers');
let result = document.getElementById('result');

//inserisco numeri estratti nel DOM
numbers.innerHTML = 'I numeri estratti sono: ' + numberUser + ' per l&apos;utente e ' + numberPc + ' per il PC.';

//controllo chi ha vinto
if (numberUser > numberPc) { //se il numero dell'utente è maggiore
    console.log('ha vinto utente');
    result.innerHTML = 'Ha vinto l&apos;utente!';
} else if (numberUser < numberPc) { //se il numero del PC è maggiore
    console.log('ha vinto il pc');
    result.innerHTML = 'Ha vinto il PC!';
} else { //se c'è spareggio
    console.log('pareggio');
    result.innerHTML = 'Spareggio!';
}