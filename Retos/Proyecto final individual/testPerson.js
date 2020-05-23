"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var person_2 = require("./person");
//test metodo mismaPersona
var juan = new person_1.Person("Juan", "Español", person_2.Profession.developer, 5);
var carlos = new person_1.Person("Carlos", "Español", person_2.Profession.director, 0);
var marcos = new person_1.Person("Juan", "Español", person_2.Profession.developer, 5);
console.log(juan.mismaPersona(carlos));
console.log(juan.mismaPersona(marcos));
//test metodo mostrarValores
juan.mostrarValores();
//test metodo mostrarValoresString
carlos.mostrarValoresString();
