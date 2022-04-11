
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

const numItems = classe61.length;
let userAuth = [];



//Creo un elenco di mail autorizzate ed le inserirsco nel relativo array
for (let i =0; i < numItems; i++){
  const firstLastName = classe61[i].split(' ');
  //const userMail = "mail"+i+"@mail.com";
  const userMail = firstLastName[0].toLowerCase()+"."+firstLastName[1].toLowerCase()+"@boolean.careers";
  userAuth.push (userMail);
  console.log(userMail);
  console.log(userAuth);
};

let mailInserted;
const btnLogin = document.querySelector("#btn_login");

btnLogin.addEventListener("click", function(){
  const emailForm = document.querySelector("#InputEmail");
  console.log(emailForm);

  mailInserted = emailForm.value;
  console.log("MAIL INSERITA:",mailInserted);

  let flagAuth = false;

  for(let i = 0; i< userAuth.length ; i++){
    if (mailInserted === userAuth[i]) flagAuth = true;
  }

  if(flagAuth===true) {
    alert("ACCESSO ESEGUITO")
  } else alert("ACCESSO NEGATO. RIPROVA")

});
