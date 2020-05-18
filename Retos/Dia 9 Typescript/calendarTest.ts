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

//importo la clase Person del archivo person
import {Person} from "./person"
//importo la clase Calendar del archivo calendar
import {Calendar} from "./calendar"
// creo 3 nuevos objetos de la clase persona
let juan:Person= new Person("Juan", 28, "Gran Via 2");
let maria:Person= new Person("María", 60, "Peru 8");
let carlos:Person= new Person("Carlos", 34, "Roma 32");
// creo un nuevo objeto de la clase Calendar
let gente:Calendar = new Calendar;
gente.setPersona(juan)
console.log(gente);
gente.setPersonas([maria, carlos]);
console.log(gente.printCalendar())