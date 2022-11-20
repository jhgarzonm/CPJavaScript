/* let tipoDeSuscripcion = parseInt(prompt('¿Qué tipo de suscripción tienes? \n 1. Free 2. Basic 3.Expert 4. Expert Plus'));

if (tipoDeSuscripcion == 1) {
    document.write("Solo puedes tomar los cursos gratis"); 
}  if (tipoDeSuscripcion == 2) {
    document.write("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
   if (tipoDeSuscripcion == 3) {
    document.write("Puedes tomar casi todos los cursos de Platzi durante un año");
}
    else if (tipoDeSuscripcion == 4) {
    document.write("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
    else { 
    document.write("Escoge una opción válida");
} */

let tipoDeSuscripcion = ['Free', 'Basic', 'Expert', 'Expert Plus']

if (tipoDeSuscripcion = 0) {
    document.write("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion = 1) {
    document.write("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion = 2) {
    document.write("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion = 3) {
    document.write("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

// Respuesta profe

/* function conseguirTipoSuscripcion(suscripcion) {
    if (suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    
    if (suscripcion == 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    
    if (suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    
    if (suscripcion == 'ExpertDuo') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }

    console.warn('Ese tipo de suscripción no existe')
} */

// Respuesta profe con objetos y un solo condicional 

/* const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};

function conseguirTipoSuscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }

    console.warn('Ese tipo de suscripción no existe')
} */