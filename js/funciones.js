//FUNCIONES   ``

{
    // SCOPE 
}

// Estructura de una funcion
function nombreFuncion(){
   // Instrucciones   
   // Las instrucciones declaradas dentro del cuerpo de una funcion 
   // Solo se ejecutaran cuando yo lo decida e invoque a la funcion   
}

// Mandar ejecutar/correr la funcion 
// Con su nombre y parentesis
nombreFuncion();



function saludar() {
    let nombre = prompt("")
    console.log(`hola ${nombre}`)
}

// Ejercicios

// 1. Crear una función que nos muestre en consola los días de la semana.

function diasSemana(){
    var dia = ("Lunes, " +  "Martes, " + "Miercoles , " + "Jueves ,  " +  "Viernes ," +  "Sabado y " +  "Domingo ")
    console.log(`Los dias de la semana son ${dia}`)
}


// 2. Crear una función que nos muestre un numero A, un numero B y la suma de A y B

function numeros(){
   var numeroA = 5 
   var numeroB = 7
   console.log(`El numero A es ${numeroA} y el numero B es ${numeroB} `)
   console.log(`El resultado de la suma es   ${numeroA + numeroB}`)
}


// 3. Crear una función que nos muestre la longitud de un arreglo que tú crearás

function mostrarLongitud (){
    let arreglo = [1, 4, 5 ,6 ,7 ,8 , 8];
    console.log(arreglo.length);
}

// Ejercicios 



// Parametros Nos sirven para que las funciones sean dinamicas

// Ejemplo sin parametros 

function sumarDosNumeros () {
    let n1 = 10;
    let n2 = 60;
    console.log(n1 + n2);
}


// Ejemplos con parametros 
function sumarDosNumerosConParametros (numeroA,numeroB) {
    let suma = numeroA + numeroB;
    console.log(suma);
}
// Mandar llamar la funcion y enviar valores como parametros
sumarDosNumerosConParametros (1, 10);

//

function registrarUsuario (nombreUsuario){
     console.log("Bienvenido " + nombreUsuario);
}

registrarUsuario(prompt(""))


function mostrarNumeros(limite){
    for(let i =0; i<= limite; i++){
        console.log(i);
    }
}

