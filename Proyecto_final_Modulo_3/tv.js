"use strict";
/* Crear una subclase llamada Television con las siguientes características:
•	Sus atributos son resolución (en pulgadas) y sintonizador TDT (booleano), además de los atributos heredados.
•	Por defecto, la resolución será de 20 pulgadas y el sintonizador sera false.
•	Implementará un constructor por defecto.
•	Los métodos que se implementara serán:
o	Método getter y setter de resolución y sintonizador TDT.
o	precioFinal(): si tiene una resolución mayor de 40 pulgadas, se incrementara el precio un 30% y
    si tiene un sintonizador TDT incorporado, aumentara 50 €.
    Recuerda que las condiciones que hemos visto en la clase Electrodomestico también deben afectar al precio. */
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
exports.Tv = void 0;
var electro_1 = require("./electro");
var RES_DEFECTO = 20;
var TDT_DEFECTO = false;
var Tv = /** @class */ (function (_super) {
    __extends(Tv, _super);
    //CONSTRUCTOR
    function Tv() {
        var _this = _super.call(this) || this;
        _this.resolucion = RES_DEFECTO;
        _this.sintTdt = TDT_DEFECTO;
        return _this;
    }
    //Getters
    Tv.prototype.getResolucion = function () {
        return this.resolucion;
    };
    Tv.prototype.getTdt = function () {
        return this.sintTdt;
    };
    //Setters
    Tv.prototype.setResolucion = function (resolucion) {
        this.resolucion = resolucion;
    };
    Tv.prototype.setTdt = function (sintTdt) {
        this.sintTdt = sintTdt;
    };
    Tv.prototype.precioFinalT = function () {
        var valor = _super.prototype.precioFinal.call(this);
        if (this.resolucion >= 40) {
            valor += valor * 0.30;
        }
        if (this.sintTdt != false) {
            valor += 50;
        }
        return valor;
    };
    return Tv;
}(electro_1.Electrodomestico));
exports.Tv = Tv;
/* var tv1 = new Tv()
tv1.setConsumo("A")
tv1.setColor("Negro")
tv1.setPrecioBase(400)
tv1.setPeso(10)
tv1.setResolucion(55)
tv1.setTdt(true)
console.log(tv1.precioFinalT())

var tv2 = new Tv()
tv2.setConsumo("F")
tv2.setColor("Gris")
tv2.setPrecioBase(50)
tv2.setPeso(30)
tv2.setResolucion(20)
tv2.setTdt(false)
console.log(tv2.precioFinalT()) */ 
