/*Try this sequence:
Declare a constant variable max with the value 57
Set another variable actual to max - 13
Set another variable percentage to actual / max
If you type percentage in the console and press Enter you should see a value like 0.7719*/

/*const max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage)*/

/**
- After each step, run the code to make sure your code still works! 

- If your code fails to run, or you see a "ReferenceError" in the console, review your code and make sure you have completed all of the objectives.
  
- Don't forget you can put "console.log" anywhere to see what your values are at any time.
  
  ===== Step 1: =====
  Look at the code below and make a prediction of what the output will be. 
  
  After making your prediction, press 'Run' at the top and look at the output in the console. If you were surprised by anything, go back and look at the code to see what's going on.

*/

// code to be deleted
/*const birthYear = 1947;
const thisYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";

const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

console.log(greeting);*/

function eleccion_ordenador() {
    const choices = ["Piedra", "Papel", "Tijera"];
    const randomIndex = Math.floor(Math.random() * choices.length); // Genera un índice aleatorio entre 0 y 2
    return choices[randomIndex];
}

function eleccion_jugador() {
    const jugada_jugador = prompt("Escoge una jugada: ");
    return jugada_jugador;
}

function evaluacion_resultado(jugada_ordenador, jugada_jugador) {
    if (jugada_jugador === jugada_ordenador) {
        return "Es un empate";
    }
    else if (
        (jugada_jugador === "piedra" && jugada_ordenador === "tijera") ||
        (jugada_jugador === "papel" && jugada_ordenador === "piedra") ||
        (jugada_jugador === "tijera" && jugada_ordenador === "papel")
    ) {
        return "El jugador ha ganado";
    }
    else {
        return "El ordenador ha ganado"
    }
}

const eleccion_del_jugador = eleccion_jugador()
const eleccion_del_ordenador = eleccion_ordenador()
console.log("La eleccion del ordenador fue: " + eleccion_del_ordenador)
const resultado = evaluacion_resultado(eleccion_del_ordenador, eleccion_del_jugador)
console.log(resultado)