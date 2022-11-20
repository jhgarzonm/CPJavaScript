let suma = parseInt(prompt('¿Cuánto es 2 + 2?'));

if (suma == 4) {
    document.write('4 ¡Muy bien!');
} 
else {
    document.write('Vamos a intentarlo de nuevo');
}
/*while (suma !== 4) {
   let suma = parseInt(prompt('¿Cuánto es 2 + 2?'));
} */

//El problema en todas las soluciones es que ninguna consigue que el ciclo vuelva a generar la pregunta automáticamente, hay que refrescar la página siempre.
//Respuesta para ese problema: 

while (respuesta != '4') {
  let pregunta = prompt('¿Cuánto es 2 + 2')
  respuesta = pregunta;
} // La variable que pregunta el valor se crea dentro del ciclo, haciendo que se siga preguntando hasta que se de la respuesta correcta, es necesario crear una variable aparte llamada respuesta, a diferencia del primer intento de resolución  

/*let pregunta = prompt('¿Cuánto es 2 + 2?');
let respuesta = parseInt(pregunta);

if(respuesta != 4){
    alert('Incorrecto :(');
} else {
    alert("¡Felicitaciones es Correcto!");
}
*/

/*let num = 10;
let num2 = 10;
const result = num + num2;
let questions = {
  q1: `Cuanto es ${num} + ${num2}`
}
function Quizzer() {
  let userInput = prompt(questions.q1);
  if (userInput == result) {
    alert("Felicitaciones, respondiste correctamente el desafio 😎");
  } else {
    alert("lamentablemente, tu respuesta es incorrecta, sigue practicando ❌!");
  }
}
Quizzer(); */