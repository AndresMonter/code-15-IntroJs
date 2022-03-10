let edad = 18;
let esMayorDeEdad;

edad >= 18 ? esMayorDeEdad = true : esMayorDeEdad = false


alert(`Es mayor de edad: ${esMayorDeEdad ? `si` : `No`}`)

/* <condicion> ? <que pasa si se cumple> : <que pasa si no se cumple> */

// Arnoldo le gustan mucho los números y quiere saber más de ellos, él denomina
// números cool a los que son divisibles entre 5, el quiere crear un programa en el
// cual el ingrese un número y le diga si es cool o no, ¿puedes ayudarlo?

var numero = 10;


if (numero%5 === 0) {
     console.log("Es un numero cool");
 }else {
 console.log("No es un numero cool");
 }

// Humberto está repartiendo códigos por toda la ciudad. El quiere crear un programa
// que cuando un usuario ingrese un código este despliegue un mensaje. Para el
// código "happy" el quiere desplegar el mensaje "cool bro, the life is short" y para el
// código "sad" él quiere, desplegar el mensaje "go for tacos bro, tacos = smile"
// ** Desplegar el mensaje "código inválido" si el código no cumple con las condiciones anteriores

var codigo = "happy";

if (codigo === "happy") {
    console.log("cool bro, the life is short");
} else if (codigo === "sad"){
    console.log("go for tacos bro, tacos= smile");
    
}else{
    console.log("codigo invalido");
}

// Paco está haciendo un videojuego y necesita hacer un programa que determine la
// jerarquía de usuario de acuerdo a su nivel, las jerarquías son "paladin" : nivel 0 -10,
// "caballero dorado" : nivel 11 - 30, "dios destructor": 31 - 50.

var nivel = 10;


if (nivel <= 10 && nivel >=0){
    console.log("paladin");
} else if (nivel <= 30 && nivel >= 11){
    console.log("Caballero dorado");
} else if (nivel <= 50 && nivel >=31){
    console.log("Dios destructor");   
} else {
    console.log("Nivel invalido")
}