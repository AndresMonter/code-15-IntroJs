//Formas de crear arreglos

const arr1 = new Array(3)

const arr2 = new Array(1 , 2 , 3 ,4 )

const arr3 = [1, 2 , 3 ,4]

console.log(arr1)

//

//Array Mixto
const arrMixto = ["Andres", 18 , true, ()=> console.log("Hola"), "Europa" ]
//


let alumnos= ["Andres","Sergio","Hiromi","Luis","Fer"]

// Push agrega  
alumnos.push("Rosaisela","Christopher")
//

// pop elimina ultimo 
console.log(ultimoConcursanteEliminado)
//

// Unshift agrega al inicio

alumnos.unshift("Karen", "Estiven")

//Shift elimina el primero
const alumnoEliminado=alumnos.shift()

//Concat agrega  valores al final 

alumnos.concat("Ignacio","Ander","Iris")

// Se almacena si no se pierde
let alumnos2 = alumnos.concat("Ignacio","Ander","Iris") 


// Join para que muestre el resultado como texto 
let alumnosString = alumnos.join(",")
//console.log(alumnosString)
//Andres,Sergio,Hiromi,Luis,Fer

// Slice toma ubicacion 
let alumnosSlice = alumnos.slice(1,3)
//console.log(alumnosSlice)
//Array(2)[ Sergio,Hiromi ]

//Includes nos dice si existe algo en el arreglo 
alumnos.includes("Andres")
true

//IndexOf nos ayuda a encontrar cual fue el primer dato del arreglo y desde que posicion 
let calificaciones = [7,5,6,8,9,6,8,7,9,0]
calificaciones.indexOf(6, 0) 
2
//

// Sort ordera menor a mayor
numeros.sort()
[ 3,3,3,5,6,6,7 ]

//Reverse ordena mayor a menor
numeros.reverse()
[ 7,6,6,5,3,3,3 ]