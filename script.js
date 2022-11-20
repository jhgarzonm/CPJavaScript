let tipoDeSuscripcion = parseInt(prompt('¿Qué tipo de suscripción tienes? \n 1. Free 2. Basic 3.Expert 4. Expert Plus'));

switch (tipoDeSuscripcion) {
   case 1:
       document.write("Solo puedes tomar los cursos gratis");
       break;
   case 2:
       document.write("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case 3:
       document.write("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case 4:
       document.write("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
       default: 
       document.write("Escoge una opción válida")
}