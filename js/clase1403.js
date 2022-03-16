// Ejercicio 1 

var calificaciones = [99,90,80,50,90,95,60,30,20,98,50,40];

// Ordebi de nebir a mayor 
var calificacionesOrdenadas = calificaciones.sort(function(a,b){return a-b});

var numMayor = calificacionesOrdenadas[calificacionesOrdenadas.length -1];


var numMenor = calificacionesOrdenadas[0];

console.log(numMenor, numMayor)

var sumatoria = 0;

for(var i = 0; i < calificaciones.length; i++)  {
    sumatoria = sumatoria + calificaciones[i];
}

var promedio = sumatoria/calificaciones.length;

// Ejercicio 2

var limite = 5;
var serie = [0,1];

for(var i =2; i < limite; i++) {
    serie[2] + serie [1]
    serie.push(serie[i-1] + serie[i-2])
}