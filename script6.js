//Solución 1

/*let array1 = ['a', 'b', 'c', 'd'];
let array2 = ['e', 'f', 'g', 'h'];

function leerArray(a) {
    document.write("El primer elemento del array es " +  a[0]);
}

leerArray(array2);*/

//Solución 2

/*let array1 = ['a', 'b', 'c', 'd'];
let array2 = ['e', 'f', 'g', 'h'];

 
function leerArray(a) {
    let length = a.length;
    for (var i = 0; i < length; i++)
    document.write("Componente del array " +  a[i] + ' ');
}

leerArray(array1); */

//Solución 3 

let object1 = {
    marca: 'Toyota',
    modelo: 'Corolla',
    annio: 2020
}; 
let object2 = {
    marca: 'Chevrolet',
    modelo: 'Spark',
    annio: 2022
}; 

 
function leerObjeto(a) {
    document.write("Este es nuestro objeto: " + Object.values(a));
}

leerObjeto(object1);  

/*let myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
  };

  function readObject(object) {
    for (let key in object) {
      document.write(object[key]);
       }
   }
  readObject(myCar); */