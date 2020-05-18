"use strict";
/* RETO 8: CLASE VECTOR
Crear la Clase Vector con la siguiente estructura:
• Atributos Privados:
o elements: array of numbers
• Constructor
o Parámetro:
o n:number. Longitud del vector
o k:number. Maximo valor de los elementos del vector
o Este constructor tiene que crear el atributo elements formado
por n números aleatorios entre 0 y k.
• Metodos Públicos:
o print()
Imprime por consola el vector
o add(v1:Vector):Vector
Realiza la suma de elements con v1
o subs(v1:Vector):Vector
Realiza la resta de elements con v1
o mult(v1:Vector):Vector
Realiza el producto de elements y v1
o multNumber(n:number):Vector
Realiza el producto entre elements y el número n */
exports.__esModule = true;
exports.Vector = void 0;
//creo y exporto la clase Vector
var Vector = /** @class */ (function () {
    //Creo el constructor con 2 parametros, los cuales me crearan el valor del atributo elements con numeros aleatorios entre 0 y k     
    function Vector(n, k) {
        this.elements = new Array;
        for (var i = 0; i < n; i++) {
            var valor = Math.floor(Math.random() * k);
            this.elements.push(valor);
        }
    }
    //Declaro los metodos
    Vector.prototype.print = function () {
        console.table(this.elements);
    };
    Vector.prototype.add = function (vector2) {
        //creo un objeto de la clase Vector con sus parametros en 0 porque está vacio
        var resultadoSuma = new Vector(0, 0);
        for (var i in this.elements) { //Recorro mi array elements
            var valor = this.elements[i] + vector2.elements[i]; //sumo [i] de mi elements con [i] del parametro
            resultadoSuma.elements.push(valor); //agrego el valor a [i] del nuevo Vector a mostrar
        }
        return (resultadoSuma);
    };
    Vector.prototype.subs = function (vector2) {
        var resultadoSubs = new Vector(0, 0);
        for (var i in this.elements) {
            var valor = this.elements[i] - vector2.elements[i];
            resultadoSubs.elements.push(valor);
        }
        return (resultadoSubs);
    };
    Vector.prototype.mult = function (vector2) {
        var resultadoMult = new Vector(0, 0);
        for (var i in this.elements) {
            var valor = this.elements[i] * vector2.elements[i];
            resultadoMult.elements.push(valor);
        }
        return (resultadoMult);
    };
    Vector.prototype.multNumberM = function (n) {
        var resultadoMultM = new Vector(0, 0);
        for (var i in this.elements) {
            var valor = this.elements[i] * n;
            resultadoMultM.elements.push(valor);
        }
        return (resultadoMultM);
    };
    //Creo el metodo MultSpecial para ser usado luego desde la clase Matrix
    Vector.prototype.multSpecial = function (n) {
        var resultadoMultM = new Vector(0, 0);
        for (var i in this.elements) {
            if (this.elements[i] % 2 === 0) { //comparo si [i] es par usando modulo
                var valor = this.elements[i] * n;
                resultadoMultM.elements.push(valor);
            }
            else {
                var valor = this.elements[i] * (n - 1);
                resultadoMultM.elements.push(valor);
            }
        }
        return (resultadoMultM);
    };
    return Vector;
}());
exports.Vector = Vector;
