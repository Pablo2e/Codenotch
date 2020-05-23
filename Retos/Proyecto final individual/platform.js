"use strict";
exports.__esModule = true;
exports.Platform = exports.Almacenamiento = void 0;
/* •	Crear una clase denominada Platform con los siguientes atributos privados:
•	name
•	releaseYear
•	company.
•	nBits.
•	generation.
•	hasHD
•	hdSize
•	hasInternetConnetion
•	storageDevice. Puede ser (cartucho, tarjeta, cd, dvd o bluray)
•	color. */
var Almacenamiento;
(function (Almacenamiento) {
    Almacenamiento["cartucho"] = "Cartucho";
    Almacenamiento["tarjeta"] = "Tarjeta";
    Almacenamiento["cd"] = "CD";
    Almacenamiento["dvd"] = "DVD";
    Almacenamiento["blueray"] = "Blueray";
})(Almacenamiento = exports.Almacenamiento || (exports.Almacenamiento = {}));
var Platform = /** @class */ (function () {
    //creo el constructor
    function Platform(name, releaseYear, company, nBits, generation, hasHD, hdSize, hasInternetConnetion, storageDevice, color) {
        this.name = name;
        this.releaseYear = releaseYear;
        this.company = company;
        this.nBits = nBits;
        this.generation = generation;
        this.hasHD = hasHD;
        this.hdSize = hdSize;
        this.hasInternetConnetion = hasInternetConnetion;
        this.storageDevice = storageDevice;
        this.color = color;
    }
    //getters y setters
    Platform.prototype.setName = function (newName) {
        this.name = newName;
    };
    Platform.prototype.setReleaseYear = function (newReleaseYear) {
        this.releaseYear = newReleaseYear;
    };
    Platform.prototype.setCompany = function (newCompany) {
        this.company = newCompany;
    };
    Platform.prototype.setNBits = function (newNBits) {
        this.nBits = newNBits;
    };
    Platform.prototype.setGeneration = function (newGeneration) {
        this.generation = newGeneration;
    };
    Platform.prototype.setHasHD = function (newHasHD) {
        this.hasHD = newHasHD;
    };
    Platform.prototype.setHdsize = function (newHdsize) {
        this.hdSize = newHdsize;
    };
    Platform.prototype.setHasInternetConnetion = function (newHasInternetConnetion) {
        this.hasInternetConnetion = newHasInternetConnetion;
    };
    Platform.prototype.setStorageDevice = function (newStorageDevice) {
        this.storageDevice = newStorageDevice;
    };
    Platform.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    Platform.prototype.getName = function () {
        return this.name;
    };
    Platform.prototype.getReleaseYear = function () {
        return this.releaseYear;
    };
    Platform.prototype.getCompany = function () {
        return this.company;
    };
    Platform.prototype.getNBits = function () {
        return this.nBits;
    };
    Platform.prototype.getGeneration = function () {
        return this.generation;
    };
    Platform.prototype.getHasHD = function () {
        return this.hasHD;
    };
    Platform.prototype.getHdsize = function () {
        return this.hdSize;
    };
    Platform.prototype.getHasInternetConnetion = function () {
        return this.hasInternetConnetion;
    };
    Platform.prototype.getStorageDevice = function () {
        return this.storageDevice;
    };
    Platform.prototype.getColor = function () {
        return this.color;
    };
    //•	Crear un método que te devuelva verdadero si la persona pasada como parámetro es igual a la persona.
    Platform.prototype.mismaPlataforma = function (persona) {
        if (persona.name === this.name && persona.releaseYear === this.releaseYear && persona.company === this.company && persona.nBits === this.nBits && persona.generation === this.generation &&
            persona.hasHD === this.hasHD && persona.hdSize === this.hdSize && persona.hasInternetConnetion === this.hasInternetConnetion && persona.storageDevice === this.storageDevice && persona.color === this.color) {
            return true;
        }
        else {
            return false;
        }
    };
    //crear un método que devuelva el valor de todos estos atributos.
    Platform.prototype.mostrarValores = function () {
        console.log(this.name + "\n" + this.releaseYear + "\n" + this.company + "\n" + this.nBits + "\n" + this.generation + "\n" + this.hasHD + "\n" + this.hdSize + "\n" + this.hasInternetConnetion + "\n" + this.storageDevice + "\n" + this.color);
    };
    //crear un método que devuelva en un string el valor de todos estos atributos.
    Platform.prototype.mostrarValoresString = function () {
        return "Nombre: " + this.name + " \nA\u00F1o de lanzamiento: " + this.releaseYear + " \nCompa\u00F1ia: " + this.company + " \nNbits: " + this.nBits + " \nGeneraci\u00F3n: " + this.generation + " \n\u00BFTiene Alta definici\u00F3n?: " + this.hasHD + " \nTama\u00F1o HD: " + this.hdSize + " \n\u00BFTiene conexi\u00F3n a internet?: " + this.hasInternetConnetion + " \nTipo de almacenamiento: " + this.storageDevice + " \nColor: " + this.color;
    };
    return Platform;
}());
exports.Platform = Platform;
