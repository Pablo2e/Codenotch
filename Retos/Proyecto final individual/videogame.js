"use strict";
exports.__esModule = true;
exports.Videogame = exports.Score = void 0;
var person_1 = require("./person");
var platform_1 = require("./platform");
var person_2 = require("./person");
var platform_2 = require("./platform");
/* •	Crear una clase que se llame Videogame con los siguientes atributos privados
•	title
•	releaseYear
•	developers: array of Person
•	nacionality
•	director: Person
•	languages: array of string
•	plataforms: array of platform
•	price
•	score: (0-10) */
var Score;
(function (Score) {
    Score[Score["cero"] = 0] = "cero";
    Score[Score["uno"] = 1] = "uno";
    Score[Score["dos"] = 2] = "dos";
    Score[Score["tres"] = 3] = "tres";
    Score[Score["cuatro"] = 4] = "cuatro";
    Score[Score["cinco"] = 5] = "cinco";
    Score[Score["seis"] = 6] = "seis";
    Score[Score["siete"] = 7] = "siete";
    Score[Score["ocho"] = 8] = "ocho";
    Score[Score["nueve"] = 9] = "nueve";
    Score[Score["diez"] = 10] = "diez";
})(Score = exports.Score || (exports.Score = {}));
var Videogame = /** @class */ (function () {
    function Videogame(title, releaseYear, developers, nacionality, director, languages, platforms, price, score) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.developers = developers;
        this.nacionality = nacionality;
        this.director = director;
        this.languages = languages;
        this.platforms = platforms;
        this.price = price;
        this.score = score;
    }
    //Getters y setters
    Videogame.prototype.getTitle = function () {
        return this.title;
    };
    Videogame.prototype.getReleaseYear = function () {
        return this.releaseYear;
    };
    Videogame.prototype.getDevelopers = function () {
        return this.developers;
    };
    Videogame.prototype.getNationality = function () {
        return this.nacionality;
    };
    Videogame.prototype.getDirector = function () {
        return this.director;
    };
    Videogame.prototype.getLanguages = function () {
        return this.languages;
    };
    Videogame.prototype.getPlatforms = function () {
        return this.platforms;
    };
    Videogame.prototype.getPrice = function () {
        return this.price;
    };
    Videogame.prototype.getScore = function () {
        return this.score;
    };
    Videogame.prototype.setTitle = function (newTitle) {
        this.title = newTitle;
    };
    Videogame.prototype.setReleaseYear = function (newReleaseYear) {
        this.releaseYear = newReleaseYear;
    };
    Videogame.prototype.setDevelopers = function (newDevelopers) {
        this.developers = newDevelopers;
    };
    Videogame.prototype.setNationality = function (newNationality) {
        this.nacionality = newNationality;
    };
    Videogame.prototype.setDirector = function (newDirector) {
        this.director = newDirector;
    };
    Videogame.prototype.setLanguages = function (newLanguages) {
        this.languages = newLanguages;
    };
    Videogame.prototype.setPlatforms = function (newPlatforms) {
        this.platforms = newPlatforms;
    };
    Videogame.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    Videogame.prototype.setScore = function (newScore) {
        this.score = newScore;
    };
    //Crear un método que te devuelva si el videojuego ha salido para una platafoma determinada. 
    Videogame.prototype.esPara = function (plataforma) {
        var salida = "";
        for (var i in this.platforms) {
            if (this.platforms[i].getName() == plataforma) {
                salida = "Este juego se puede jugar en " + plataforma;
            }
            else {
                salida = "Este juego no se puede jugar en " + plataforma;
            }
            return salida;
        }
    };
    //Crea un método que te devuelva si un desarrollador ha desarrollado el videojuego.
    Videogame.prototype.esDesarrollador = function (nombre) {
        var salida = "";
        for (var i in this.developers) {
            if (this.developers[i].getName() == nombre) {
                salida = nombre + " ha desarrollado " + this.title;
            }
            else {
                salida = nombre + " no ha participado en el desarrollo de " + this.title;
            }
            return salida;
        }
    };
    //Crear un método que te devuelva si el videojuego ha sido desarrollado en un idioma determinado.
    Videogame.prototype.esEnIdioma = function (idioma) {
        var salida = "";
        for (var i in this.languages) {
            if (this.languages[i] == idioma) {
                salida = "Este juego ha sido desarrollado en " + idioma;
            }
            else {
                salida = "Este juego no ha sido desarrollado en " + idioma;
            }
            return salida;
        }
    };
    //Crear un método que muestre todos los datos de los videojuegos
    Videogame.prototype.datos = function () {
        var desarrolladores = "";
        for (var i in this.developers) {
            desarrolladores += this.developers[i].devolverValoresString();
        }
        var idiomas = "";
        for (var i in this.languages) {
            idiomas += this.languages[i] + ", ";
        }
        var plataformas = "";
        for (var i in this.platforms) {
            plataformas += this.platforms[i].mostrarValoresString() + ", ";
        }
        return this.title + " \n" + this.releaseYear + " \n" + desarrolladores + " \n" + this.nacionality + " \n" + this.director.devolverValoresString() + " \n" + idiomas + " \n" + plataformas + " \n" + this.price + " \n" + this.score + " \n ";
    };
    //Crear un método que devuelva en un string el valor de todos estos atributos.
    Videogame.prototype.devolverValoresString = function () {
        var desarrolladores = "";
        for (var i in this.developers) {
            desarrolladores += this.developers[i].devolverValoresString() + "\n";
        }
        var idiomas = "";
        for (var i in this.languages) {
            idiomas += this.languages[i] + ", ";
        }
        var plataformas = "";
        for (var i in this.platforms) {
            plataformas += this.platforms[i].mostrarValoresString() + ", ";
        }
        return "Nombre del juego: " + this.title + "\nA\u00F1o de lanzamiento: " + this.releaseYear + "\nDesarrolladores: " + desarrolladores + "Nacionalidad: " + this.nacionality + "\nDirector: " + this.director.devolverValoresString() + "\nIdiomas: " + idiomas + "\nPlataformas: " + plataformas + "\nPrecio: " + this.price + "\nPuntuaci\u00F3n: " + this.score;
    };
    return Videogame;
}());
exports.Videogame = Videogame;
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
var random = new Videogame("Random", 2020, desarrolladores, "Española", carlos, idiomas, plataformas, 50, 8);
//Prueba del metodo esPara
console.log(random.esPara("stadia"));
console.log(random.esPara("xbox"));
//Prueba del metodo esDesarrollador
console.log(random.esDesarrollador("juan"));
console.log(random.esDesarrollador("miguel"));
//Prueba del metodo esEnIdioma
console.log(random.esEnIdioma("Español"));
console.log(random.esEnIdioma("Ruso"));
//Prueba del metodo datos
console.log(random.datos());
//Prueba del metodo
console.log(random.devolverValoresString());
