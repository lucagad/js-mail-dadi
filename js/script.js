
// ESERCIZIO 1

const classe61 = [
  "Domenico Agostino",
  "Mihai Badia",
  "Riccardo Becattini",
  "Manuel Benini",
  "Bruno Bernardini",
  "Guido Buono",
  "Pierluigi Cancellaro",
  "Francesco Cataletto",
  "Stefano Cravotta",
  "Giovanni Crispino",
  "Giancarlo Croce",
  "Enrico De Stefano",
  "Silvia Dugato",
  "Francesco Ercoli",
  "Luca Gaddini",
  "Marco Gagliano",
  "Cristina Gasperini",
  "Gabriele Giusti",
  "Chiara Grillo",
  "Manuela Ienuso",
  "Michele Iliescu",
  "Ketevan Jorjoliani",
  "Renato Lami",
  "Davide Manciucca",
  "Emanuele Mastronardi",
  "Luca Mazzarini",
  "Daniele Monteleone",
  "Salvatore Olivieri",
  "Leonardo Pellegrini",
  "Agostino Piquè",
  "Davide Pizzolla",
  "Antonio Pollo",
  "Ivan Russo",
  "Amanjit Singh",
  "Sebastiano Visco"
  ];

// 1. Creo un arrey con gli utenti autorizzati
// 2. Chiedo d'inserire la mail
// 3. Confonto la lista degli autorizzati con il valore inserito
// 4. Stampo il risultato della verifica.

// Creo una variabile con valore = alla lunghezza dell'array
const numItems = classe61.length;

// Creo un array vuoto in cui andrò ad inserire gli utenti autorizzati
let userAuth = [];

// Creo un elenco di mail autorizzate ed le inserisco nel relativo array
for (let i =0; i < numItems; i++){
  const firstLastName = classe61[i].split(' ');
  //const userMail = "mail"+i+"@mail.com";
  const userMail = firstLastName[0].toLowerCase()+"."+firstLastName[1].toLowerCase()+"@boolean.careers";
  userAuth.push (userMail);
  //console.log(userMail);
  //console.log(userAuth);
};

console.log(userAuth);

// Creo una variabile in cui andrò ad inserire la mail prelevata dalla pagina HTML
let mailInserted;
const btnLogin = document.querySelector("#btn_login");

// Al click del bottone Accedi assegno il valore del input alla variabile creata in precedenza ed verifico se la mail è presente tra gli autorizzati.
btnLogin.addEventListener("click", function(){
  const emailForm = document.querySelector("#InputEmail");
  console.log(emailForm);

  mailInserted = emailForm.value;
  console.log("MAIL INSERITA:",mailInserted);

  // Creo un flag che utilizzarò per creare il messaggio di alert in base alla presneza o meno dell'indirizzo mail inserito dall'utente
  let flagAuth = false;

  for(let i = 0; i< userAuth.length ; i++){
    if (mailInserted === userAuth[i]) flagAuth = true;
  }

  // Se il flag è stato variato da false a true all'interno del for significa che l'utente è autorizzato ad accedere.
  if(flagAuth===true) {
    alert("ACCESSO ESEGUITO")
  } else alert("ACCESSO NEGATO. RIPROVA")

});

// /ESERCIZIO 1


// ESERCIZIO 2

// 1. Al click del botton genero due numeri random
// 2. Verifico quale dei due è maggiore
// 3. Stampo il vincitore


const btnDice = document.querySelector("#btn_dice");


const numberMax = 6;

// Al click del bottone Lancia assegno il valore del input alla variabile creata in precedenza

btnDice.addEventListener("click", function(){
  let output ="";
  let numberRandom = [];

  for (let i = 0; i < 2; i++){
    let number = Math.floor((Math.random() * numberMax) + 1) ;
    numberRandom.push(number);
  }

if (numberRandom[0] > numberRandom[1]){
  output = `
    <h5>Risultato:</h5>
    <h6>HAI VINTO!!</h6>
    <span> Il tuo numero é: ${numberRandom[0]}</span>
    <span> Il numero del tuo avversario é: ${numberRandom[1]}</span>
`;
} else if (numberRandom[0] < numberRandom[1]){
  output = `
    <h5>Risultato:</h5>
    <h6>HAI PERSO!!</h6>
    <span> Il tuo numero é: ${numberRandom[0]}</span>
    <span> Il numero del tuo avversario é: ${numberRandom[1]}</span>
`;
} else if (numberRandom[0] === numberRandom[1]){
  output = `
    <h5>Risultato:</h5>
    <h6>PAREGGIO</h6>
    <span> Il tuo numero ed quello dell'avversario é: ${numberRandom[0]}</span>
`;}

const outputBox = document.querySelector(".result");
outputBox.className+=(" display_click");
outputBox.innerHTML = output;
console.log(outputBox);
console.log(numberRandom);

});






