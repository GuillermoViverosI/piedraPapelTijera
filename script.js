
/** La computadora arroja un resultado al azar
 * Ya sea piedra,papel o tijeras **/
function getComputerChoice(){
  choices = ["Piedra", "Papel", "Tijeras"]
  const computerChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
  return computerChoice;
}

/** El usuario debe ingresar su opcion en
 * una ventana **/
function getPlayerChoice(){
  const playerChoice = prompt("Ingresa tu elección: ").toLowerCase();
  return playerChoice;
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function singleRound(playerSelection,computerSelection){
  const ganador = "";
  if (playerSelection == "piedra" && computerSelection == "tijeras"){
    ganador = "jugador";
    return alert("El jugador ha ganado esta ronda! tu seleccionaste: " + playerSelection + " y la computadora: " + computerSelection);
  } else if (playerSelection == "papel" && computerSelection == "piedra"){
    ganador = "jugador";
    return alert("El jugador ha ganado esta ronda! tu seleccionaste: " + playerSelection + " y la computadora: " + computerSelection);
  } else if (playerSelection == "tijeras" && computerSelection == "papel"){
    ganador = "jugador";
    return alert("El jugador ha ganado esta ronda! tu seleccionaste: " + playerSelection + " y la computadora: " + computerSelection);
  } else if (playerSelection == "piedra" && computerSelection == "papel"){
    ganador = "computadora";
    return alert("La computadora ha ganado esta ronda! tu seleccionaste: " + playerSelection + " y la computadora: " + computerSelection);
  } else if (playerSelection == "papel" && computerSelection == "tijeras"){
    ganador = "computadora";
    return alert("La computadora ha ganado esta ronda! tu seleccionaste: " + playerSelection + " y la computadora: " + computerSelection);
  } else if (playerSelection == "tijeras" && computerSelection == "piedra"){
    ganador = "computadora";
    return alert("La computadora ha ganado esta ronda! tu seleccionaste: " + playerSelection + " y la computadora: " + computerSelection);
  } else{
    return alert("Esta ronda ha sido un empate! tu seleccionaste: " + playerSelection + " y la computadora: " + computerSelection );
  }
}

singleRound(playerSelection, computerSelection);
/** El juego debe tener 5 rondas **/



/** Evaluar quien es el ganador **/