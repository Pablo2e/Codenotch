"use strict";
exports.__esModule = true;
var e_1 = require("./e");
var p_1 = require("./p");
var Cine = /** @class */ (function () {
    function Cine(pelicula, precio) {
        this.pelicula = pelicula;
        this.precio = precio;
    }
    Cine.prototype.entrarCine = function (esp) {
        var ocupados = new Array('A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'C1', /* 'C2','C3','C4','C5','C6','C7','C8',
        'D1','D2','D3','D4','D5','D6','D7','D8',
        'E1','E2','E3','E4','E5','E6','E7','E8',
        'F1','F2','F3','F4','F5','F6','F7' ,*/ 'F8', 'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8');
        var numero = Math.floor(Math.random() * 8 + 1);
        var letras = 'ABCDEFGHI';
        var letra = letras.charAt(Math.floor(Math.random() * 8 + 1));
        var asiento = letra + numero.toString();
        var espCompleto = new e_1.Espectador(esp.nombre);
        espCompleto.setEdad(Math.floor(Math.random() * 110));
        espCompleto.setDinero(Math.floor(Math.random() * 30));
        console.log("Asiento otorgado: " + asiento);
        console.log(espCompleto);
        console.log("Edad minima para poder ver la pelicula: " + this.pelicula.edadMinima);
        console.log("Precio de la entrada: " + this.precio);
        if (this.precio >= espCompleto.getDinero() || this.pelicula.edadMinima > espCompleto.getEdad()) {
            console.log("No puedes ver la pelicula");
        }
        else {
            console.log("Puedes ver la pelicula");
        }
        if (ocupados.includes(asiento) != true) {
            console.log("Asiento disponible");
        }
        else {
            console.log('asiento ocupado');
        }
    };
    return Cine;
}());
var pel1 = new p_1.Pelicula('Seven', 120, 18, 'John Doe');
var pel2 = new p_1.Pelicula('La Sirenita', 120, 0, 'Disney');
var pel3 = new p_1.Pelicula('Aventuras', 120, 13, 'Carlos Lopez');
var esp1 = new e_1.Espectador('Juan Perez');
var esp2 = new e_1.Espectador('Carlos Perez');
var esp3 = new e_1.Espectador('Pedro Perez');
var esp4 = new e_1.Espectador('Maria Perez');
var esp5 = new e_1.Espectador('Juan Perez');
var esp6 = new e_1.Espectador('Carlos Perez');
var esp7 = new e_1.Espectador('Pedro Perez');
var esp8 = new e_1.Espectador('Maria Perez');
var esp9 = new e_1.Espectador('Juan Perez');
var esp10 = new e_1.Espectador('Carlos Perez');
var esp11 = new e_1.Espectador('Pedro Perez');
var esp12 = new e_1.Espectador('Maria Perez');
var sala1 = new Cine(pel1, 15);
sala1.entrarCine(esp1);
