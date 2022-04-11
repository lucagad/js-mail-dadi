
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
  console.log(userMail);
  console.log(userAuth);
};

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
