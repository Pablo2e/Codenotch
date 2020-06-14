"use strict";
/* Crear una subclase llamada Lavadora con las siguientes características: (INVESTIGAR COMO SE CREA UNA SUBCLASE A PARTIR DE UNA CLASE YA CREADA)
•	Su atributo es carga, además de los atributos heredados.
•	Por defecto, la carga es de 5 kg. Usa una constante para ello.
•	Implementará un constructor por defecto.
Hacer •	Los métodos que se implementara serán:
o	Método getters y setters de carga
o	precioFinal():, si tiene una carga mayor de 30 kg, aumentara el precio 50 €, si no es así no se incrementara el precio.
Llama al método padre y añade el código necesario.
Recuerda que las condiciones que hemos visto en la clase Electrodoméstico también deben afectar al precio. */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Lavadora = void 0;
var electro_1 = require("./electro");
var CARGA_DEFECTO = 5;
var Lavadora = /** @class */ (function (_super) {
    __extends(Lavadora, _super);
    function Lavadora() {
        var _this = _super.call(this) || this;
        _this.carga = CARGA_DEFECTO;
        return _this;
    }
    //Getter
    Lavadora.prototype.getCarga = function () {
        return this.carga;
    };
    //Setter
    Lavadora.prototype.setCarga = function (carga) {
        this.carga = carga;
    };
    Lavadora.prototype.precioFinalL = function () {
        var valor = _super.prototype.precioFinal.call(this);
        if (this.carga >= 30) {
            valor += 50;
        }
        return valor;
    };
    return Lavadora;
}(electro_1.Electrodomestico));
exports.Lavadora = Lavadora;
/* var lav1 = new Lavadora()
lav1.setConsumo("A")
lav1.setColor("Negro")
lav1.setPrecioBase(220)
lav1.setPeso(50)
lav1.setCarga(20)
console.log(lav1.precioFinalL())

var lav2 = new Lavadora()
lav2.setConsumo("A")
lav2.setColor("Blanco")
lav2.setPrecioBase(120)
lav2.setPeso(40)
lav2.setCarga(35)
console.log(lav2.precioFinalL())

var lav3 = new Lavadora()
lav3.setConsumo("A")
lav3.setColor("Rojo")
lav3.setPrecioBase(400)
lav3.setPeso(80)
lav3.setCarga(50)
console.log(lav3.precioFinalL()) */
