"use strict";
exports.__esModule = true;
exports.Espectador = void 0;
var Espectador = /** @class */ (function () {
    function Espectador(nombre) {
        this.nombre = nombre;
    }
    //Getters y Setters
    Espectador.prototype.getNombre = function () {
        return this.nombre;
    };
    Espectador.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Espectador.prototype.getEdad = function () {
        return this.edad;
    };
    Espectador.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Espectador.prototype.getDinero = function () {
        return this.dinero;
    };
    Espectador.prototype.setDinero = function (dinero) {
        this.dinero = dinero;
    };
    return Espectador;
}());
exports.Espectador = Espectador;
