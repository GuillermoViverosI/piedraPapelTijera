
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

function singleRound(playerSelection,computerSelection){
  let ganador = "";
  if (playerSelection == "piedra" && computerSelection == "tijeras"){
    ganador = "jugador";
    return ganador;
  } else if (playerSelection == "papel" && computerSelection == "piedra"){
    ganador = "jugador";
    return ganador;
  } else if (playerSelection == "tijeras" && computerSelection == "papel"){
    ganador = "jugador";
    return ganador;
  } else if (playerSelection == "piedra" && computerSelection == "papel"){
    ganador = "computadora";
    return ganador;
  } else if (playerSelection == "papel" && computerSelection == "tijeras"){
    ganador = "computadora";
    return ganador;
  } else if (playerSelection == "tijeras" && computerSelection == "piedra"){
    ganador = "computadora";
    return ganador;
  } else{
    return alert("Esta ronda ha sido un empate! tu seleccionaste: " + playerSelection + " y la computadora: " + computerSelection );
  }
}

/** El juego debe tener 5 rondas **/

function game(){
  let jugador = 0;
  let computadora = 0;
  let x = 0;
  while (x < 5){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    let ganador = singleRound(playerSelection,computerSelection);
    if (ganador == "jugador"){
      jugador += 1;
      x += 1; 
      alert("El jugador ha ganado esta ronda! tu seleccionaste: " + playerSelection + " y la computadora: " + computerSelection);
    }
    else if (ganador == "computadora"){
      computadora += 1;
      x += 1; 
      alert("La computadora ha ganado esta ronda! tu seleccionaste: " + playerSelection + " y la computadora: " + computerSelection);
    }
    else{
      x += 1; 
      jugador += 1;
      computadora += 1;
    }
  }
  alert("Juego terminado! obtuviste: " + jugador + " puntos, y la computadora: " + computadora + " puntos" )
}

game();


/** Evaluar quien es el ganador **/