let tipoDeSuscripcion = parseInt(prompt('¿Qué tipo de suscripción tienes? \n 1. Free 2. Basic 3.Expert 4. Expert Plus'));

if (tipoDeSuscripcion == 1) {
    document.write("Solo puedes tomar los cursos gratis"); 
}   else if (tipoDeSuscripcion == 2) {
    document.write("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
    else if (tipoDeSuscripcion == 3) {
    document.write("Puedes tomar casi todos los cursos de Platzi durante un año");
}
    else if (tipoDeSuscripcion == 4) {
    document.write("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
    else { 
    document.write("Escoge una opción válida");
}
