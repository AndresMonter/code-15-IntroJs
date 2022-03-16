let iterador = 0
while (iterador < 5 ) {
    console.log(iterador)
    iterador = iterador +1
}

//
for (iterador = 0; iterador < 5; iterador++) {
    console.log(iterador)
}

//

for(i=0, j=5; i<5; i++, j--) {
    console.log(`valor de i = ${i} y valor de ${j}`)
}

// Ejercicio

agregar = "si";
modulo3 = [];
while (agregar === "si") {
  
  modulo3.push({
    nombre: prompt("nombre"),
    apellido: prompt("apellido"),
  });
  agregar=prompt("Deseas agregar a un alumno");
}

for (let i = 0; i < modulo3.length; i++) {
  console.log(`El nombre del alumno es ${modulo3[i].nombre} y su apellido ${modulo3[i].apellido}`);
}
