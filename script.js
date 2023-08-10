
/** La computadora arroja un resultado al azar
 * Ya sea piedra,papel o tijeras **/
function getComputerChoice(){
  choices = ["Piedra", "Papel", "Tijeras"]
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

/** El usuario debe ingresar su opcion en
 * una ventana **/

/** El juego debe tener 5 rondas **/

/** Evaluar quien es el ganador **/