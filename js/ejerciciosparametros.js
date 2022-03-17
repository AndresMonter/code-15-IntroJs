//Crear una función que reciba un número y nos muestre en la consola si es positivo o negativo

function evaluarNumero(numero) {
    if(numero > 0) {
        console.log(numero + ' es positivo');
    } else if(numero < 0) {
        console.log(numero + ' es negativo');
    } else {
        console.log(numero + ' no es ni positivo ni negativo')
    }
}


//Crear una función que reciba el nombre de un cliente y un numero que hace referencia a un ahorro y nos muestre en la consola un mensaje con el nombre del cliente y el monto ahorrado
function datos(nombreCliente , montoAhorrado){
 console.log(`El nombre del cliente  es ${nombreCliente} y el monto ahorrado  es de  $ ${montoAhorrado} `)
     
  }
  datos(prompt("Introduce tu nombre") ,prompt ("Introduce el monto ahorrado"))

 //  Crear una función que reciba un arreglo de calificaciones y nos muestre el promedio

 function calcularPromedio(arregloCalificaciones){
     let sumatoria = 0;
     for(let i = 0; i< arregloCalificaciones.length; i++) {
         sumatoria = sumatoria + arregloCalificaciones [i];       
     }
     let promedio = sumatoria/arregloCalificaciones.length;
     console.log(promedio);
 }

 calcularPromedio([100,100,90, 70]);