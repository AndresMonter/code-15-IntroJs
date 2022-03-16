let iteracion =0;
while(iteracion < 5){
    console.log(`Valor de iteracion: ${iteracion}`)
    iteracion = iteracion + 1
}


let saludoHola = "hola"
while(saludoHola === "hola") {
    console.log("hola")
    saludoHola = prompt("Hola")
}

console.log("Te voy a acusar adios")


// Objetos 

const mascota = {
    nombre: "Firulais", 
    jugueteFavorito: "pelota",
    raza: {
         color: "cafe",
         tamaño: "mediano"
    }
}


mascota.edad = 6

console.log(mascota)


mascota ["raza"]["nombre"] = prompt("Cual es el nombre de la raza")

// Ejercicio

const yoMismo = {
    nombre: "Andres", 
    apellido:"Monter",
    edad:18,
    descipcion: "Hola me llamo Andres Monter y tego 18 años" 
}