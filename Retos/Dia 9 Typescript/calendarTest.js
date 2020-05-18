"use strict";
/* RETO 3: CLASE CALENDAR
Crear un fichero denominado calendar.ts
Importar la clase Person
Crear la clase calendar con la siguiente estructura:
• Atributos Público:
o people: array de objetos de la clase Person.
• Constructor sin parámetros que inicialice el array people.
• Métodos Públicos:
o printCalendar()
Imprime por consola los datos de todas las personas de la
agenda.
Probar la clase calendar en un fichero denominado calendarTest.ts */
exports.__esModule = true;
//importo la clase Person del archivo person
var person_1 = require("./person");
//importo la clase Calendar del archivo calendar
var calendar_1 = require("./calendar");
// creo 3 nuevos objetos de la clase persona
var juan = new person_1.Person("Juan", 28, "Gran Via 2");
var maria = new person_1.Person("María", 60, "Peru 8");
var carlos = new person_1.Person("Carlos", 34, "Roma 32");
// creo un nuevo objeto de la clase Calendar
var gente = new calendar_1.Calendar;
gente.setPersona(juan);
console.log(gente);
gente.setPersonas([maria, carlos]);
console.log(gente.printCalendar());
