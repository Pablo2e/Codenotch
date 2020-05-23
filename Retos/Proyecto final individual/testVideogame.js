"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var platform_1 = require("./platform");
var person_2 = require("./person");
var platform_2 = require("./platform");
var videogame_1 = require("./videogame");
//Creo los objetos de la clase persona, los strings, los objetos Platform, los strings y el objeto Videogame
var juan = new person_1.Person("Juan", "Español", person_2.Profession.director, 5);
var carlos = new person_1.Person("Carlos", "Español", person_2.Profession.developer, 0);
var miguel = new person_1.Person("Miguel", "Español", person_2.Profession.manager, 10);
var desarrolladores = new Array(juan, carlos);
var idiomas = new Array("Español", "Ingles");
var xbox = new platform_1.Platform("xbox", 2018, "Microsoft", 256, 5, true, "4GB", true, platform_2.Almacenamiento.blueray, "Negro");
var nintendo = new platform_1.Platform("Nintendo", 2018, "Nintendo", 256, 1, true, "4GB", true, platform_2.Almacenamiento.cd, "Negro");
var playstation = new platform_1.Platform("Playstation", 2018, "Microsoft", 256, 5, true, "4GB", true, platform_2.Almacenamiento.blueray, "Negro");
var plataformas = new Array(xbox, playstation, nintendo);
var random = new videogame_1.Videogame("Random", 2020, desarrolladores, "Española", carlos, idiomas, plataformas, 50, 8);
//Prueba del metodo esPara
console.log(random.esPara("stadia"));
console.log(random.esPara("xbox"));
//Prueba del metodo esDesarrollador
console.log(random.esDesarrollador("juan"));
console.log(random.esDesarrollador("miguel"));
//Prueba del metodo esEnIdioma
/* console.log(random.esEnIdioma("Español"))
console.log(random.esEnIdioma("Ruso"))
//Prueba del metodo datos
console.log(random.datos())
//Prueba del metodo
console.log(random.devolverValoresString()) */ 
