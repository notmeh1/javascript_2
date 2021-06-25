function cachipunTrigger(){
    const repetitions = prompt('Ingresar cantidad de veces que quedemos jugar')
    const repertitionQty = Number.parseInt(repetitions)

    alert(`El juego se repetira ${repertitionQty} veces`)

    for (let count = 1; count <= repertitionQty; count = count + 1) {
        const userMove = prompt ('Elija su jugada piedra papel o tijera')
        const randomMoveIndex = Math.floor(Math.random() * (4 - 1)) + 1; // 1 , 2 o 3
        let machineMove = "";

        switch (randomMoveIndex) {
        case 1:
        machineMove = "Piedra";
        break;
        case 2:
        machineMove = "Papel";
        break;
        case 3:
        machineMove = "Tijera";
        break;
        }

        let winner = ""; // Machine - User - Both - Unknown

        if (machineMove === "Piedra") {
          if (userMove === "Papel" || userMove === "papel") {
            winner = "User";
          } else if (userMove === "Tijera" || userMove === "tijera") {
            winner = "Machine";
          } else {
            winner = "Both";
          }
        } else if (machineMove === "Papel") {
          if (userMove === "Tijera" || userMove === "tijera") {
            winner = "User";
          } else if (userMove === "Piedra" || userMove === "piedra") {
            winner = "Machine";
          } else {
            winner = "Both";
          }
        } else if (machineMove === "Tijera") {
          if (userMove === "Piedra" || userMove === "piedra") {
            winner = "User";
          } else if (userMove === "Papel" || userMove === "papel") {
            winner = "Machine";
          } else {
            winner = "Both";
          }
        } else {
          winner = "Unknown";
        }
        if (winner === "User") {
            alert("El Jugador gana, felicidades.")
        } else if (winner === "Machine"){
            alert("La computadora gana, intente otra ves")
        } else {
            alert("Hay un empate")
        }

        const resultJSON = JSON.stringify({ userMove, machineMove })
        document.getElementById("winner").innerHTML = (winner);
        console.log({ userMove, machineMove });
        console.log(`El ganador es: ${winner}`);
    }
}