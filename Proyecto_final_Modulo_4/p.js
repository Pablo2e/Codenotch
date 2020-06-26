"use strict";
exports.__esModule = true;
exports.Pelicula = void 0;
var Pelicula = /** @class */ (function () {
    function Pelicula(titulo, duracion, edadMinima, director) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.edadMinima = edadMinima;
        this.director = director;
    }
    Pelicula.prototype.pelicula = function () {
        return ("Titulo " + this.titulo + ", Duraci\u00F3n " + this.duracion + ", Edad Minima " + this.edadMinima + ", Director " + this.director);
    };
    return Pelicula;
}());
exports.Pelicula = Pelicula;
