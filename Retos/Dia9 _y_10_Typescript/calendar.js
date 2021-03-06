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
exports.Calendar = void 0;
//exporto y creo la clase Calendar
var Calendar = /** @class */ (function () {
    //Declaro el metodo constructor sin parametros
    function Calendar() {
        // inicializo people como un objeto de la clase array
        this.people = new Array();
    }
    //Declaro los Metodos
    Calendar.prototype.printCalendar = function () {
        var allPeople = ""; //declaro la variable allPeole como un string vacio
        for (var i in this.people) { //recorro el atributo people
            // llamo al metodo mostrarDatos de la clase Person para que agregue al string vacio los datos
            allPeople += this.people[i].mostrarDatos();
        } // retorno el valor
        return (allPeople);
    };
    //Seters agregados para que funcione calendarTest
    Calendar.prototype.setPersona = function (persona) {
        this.people.push(persona); //agrega un objeto persona al array de personas people
    };
    Calendar.prototype.setPersonas = function (personas) {
        for (var i in personas) { //recorre el array pasado por parametro
            this.people.push(personas[i]); //agrega un array de personas al array de personas people  
        }
    };
    return Calendar;
}());
exports.Calendar = Calendar;
