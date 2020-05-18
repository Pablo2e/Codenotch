"use strict";
/* RETO 1: CLASE PERSON
Crear la Clase Person con la siguiente estructura:
• Atributos Públicos:
o name: string
o age: number
• Atributos Privados:
o address: string
• Constructor para todos los atributos
• Metodos Públicos:
o printName()
Imprime por consola el nombre
o yearOfBirth(currentYear: number):number
Calcula y devuelve el año de nacimiento
o setAddress(address:string)
Modifica el atributo address con el valor pasado como
parámetro.
o getAddress():string
Devuelve el valor del atributo addess.  */
exports.__esModule = true;
exports.Person = void 0;
//creo y exporto la clase Person
var Person = /** @class */ (function () {
    //metodo constructor y doy valor a los atributos
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    //Declaro los metodos publicos
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return (currentYear - this.age);
    };
    //Declaro los getter y los setter
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    //metodo agregado para que funcione calendarTest
    Person.prototype.mostrarDatos = function () {
        return ("Nombre: " + this.name + "\n" +
            "Edad: " + this.age + "\n" +
            "Dirección: " + this.address + "\n");
    };
    return Person;
}());
exports.Person = Person;
