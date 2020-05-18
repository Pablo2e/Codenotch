var moduloPersona = require ('./r7')
var moduloAgenda = require ('./r8')

var juan = new moduloPersona ("Juan", 180, 90, 1990,["Correr", "Leer", "Nadar"]); 
var carlos = new moduloPersona ("Carlos", 200, 110, 1975,["Balocesto", "Videojuegos", "Lucha"]);
var maria = new moduloPersona ("Maria", 150, 50, 1960,["Bordar", "Leer"]);

var gente = new moduloAgenda ([juan, carlos, maria]);
gente.printPersonas();

juan.calcImc()
console.log(carlos.edad()) 
maria.mostrarAficiones()
juan.mostrarTodos() 

