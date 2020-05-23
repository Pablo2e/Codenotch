"use strict";
/* •	Crear una clase denominada Person con los siguientes atributos privados:
•	name
•	nationality
•	profession. Puede ser developer, tester, manager o director
•	experienceYears. Años de experiencia  */
exports.__esModule = true;
exports.Person = exports.Profession = void 0;
var Profession;
(function (Profession) {
    Profession["developer"] = "Developer";
    Profession["tester"] = "Tester";
    Profession["manager"] = "Manager";
    Profession["director"] = "Director";
})(Profession = exports.Profession || (exports.Profession = {}));
var Person = /** @class */ (function () {
    //	Esta clase debe tener un constructor que incluirá en sus parámetros todos estos atributos.
    function Person(name, nationality, profession, experienceYears) {
        this.name = name;
        this.nationality = nationality;
        this.profession = profession;
        this.experienceYears = experienceYears;
    }
    // Metodos setters y getters de los atributos privados.
    Person.prototype.setName = function (newName) {
        this.name = newName;
    };
    Person.prototype.setNationality = function (newNationality) {
        this.nationality = newNationality;
    };
    Person.prototype.setProfesion = function (newProfesion) {
        this.profession = newProfesion;
    };
    Person.prototype.setExperienceYears = function (newExperienceYears) {
        this.experienceYears = newExperienceYears;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getNationality = function () {
        return this.nationality;
    };
    Person.prototype.getProfession = function () {
        return this.profession;
    };
    Person.prototype.getExperienceYears = function () {
        return this.experienceYears;
    };
    //•	Crear un método que te devuelva verdadero si la persona pasada como parámetro es igual a la persona.
    Person.prototype.mismaPersona = function (persona) {
        if (persona.name === this.name && persona.nationality === this.nationality && persona.profession === this.profession
            && persona.experienceYears === this.experienceYears) {
            return true;
        }
        else {
            return false;
        }
    };
    //crear un método que devuelva el valor de todos estos atributos.
    Person.prototype.mostrarValores = function () {
        console.log(this.name + "\n" + this.nationality + "\n" + this.profession + "\n" + this.experienceYears);
    };
    //crear un método que devuelva en un string el valor de todos estos atributos.
    Person.prototype.devolverValoresString = function () {
        return "Nombre: " + this.name + " \nNacionalidad: " + this.nationality + " \nProfesi\u00F3n: " + this.profession + " \nA\u00F1os de experiencia: " + this.experienceYears;
    };
    return Person;
}());
exports.Person = Person;
