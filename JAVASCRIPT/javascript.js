/*

INZIO:

// Chiedo informazioni all'utente che necessito:

- Nome
- Cognome
- Colore preferito */

let nameuser = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let prefercolor = prompt("Inserisci il tuo colore preferito");

let number1 = parseInt(prompt("Inserisci il primo numero"));
let number2 = parseInt(prompt("Inserisci il secondo numero"));


// Calcolo la divisione tra i due numeri inseriti
let number = number1 / number2;








// Creazione della password con variabili

let password = nameuser + surname + prefercolor + number;





// Stampo su consolle la variabile password

console.log(password);
document.getElementById("password").InnerHTML = password;











//FINE

