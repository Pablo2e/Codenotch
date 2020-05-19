"use strict";
/* RETO 10: CLASE MATRIX
Crear la Clase Matrix con la siguiente estructura:
• Atributos Privados:
    o elements: array of Vector
• Constructor
    o Parámetro:
    o n:number. Numero de filas
    o m:number. Numero de columas
    o k:number. Maximo valor de los elementos del vector
Este constructor tiene que crear el atributo elements formado por n objetos de la clase Vector con m numeros aleatorios entre 0 y k.
• MetodosPúblicos:
    o print() Imprime por consola la matriz
    o add(m1:Matrix):Matrix Realiza la suma de elements con m1
    o multNumber(n:number):Matrix Realiza el producto entre elements y el número n
    o mutSpecial(n:number):Matrix
    Si elements[i,j] es par se multiplica por el numero n
    Si elements[i,j] es impar se multiplica por el numero n-1 */
exports.__esModule = true;
exports.Matrix = void 0;
//Importo la clase Vector del archivo vector    
var vector_1 = require("./vector");
//Creo y exporto la clase Matrix
var Matrix = /** @class */ (function () {
    //Creo el constructor, asigno valor a los parametros y creo 3 atributos publicos
    function Matrix(n, m, k) {
        this.n = n;
        this.m = m;
        this.k = k;
        //creo el atributo elements formado por n objetos de la clase Vector con m numeros aleatorios entre 0 y k.
        this.elements = new Array(); //Inicializo elements como un nuevo array
        for (var i = 0; i < n; i++) { //recorro elements
            var vec1 = new vector_1.Vector(m, k); //creo un nuevo vector con los parametros correspondientes a la clase
            this.elements.push(vec1); //agrego al array de vectores los vectores creados
        }
    }
    //Creo los metodos publicos
    Matrix.prototype.print = function () {
        console.table(this.elements);
    };
    Matrix.prototype.add = function (m2) {
        //creo un objeto de la clase Matrix con sus parametros en 0 porque está vacio
        var resultadoSuma = new Matrix(0, 0, 0);
        for (var i in this.elements) { //Recorro elements
            //Sumo [i] de mi elements con [i] del parametro usando el metodo add de la clase vector (que suma vectores)
            var valor = this.elements[i].add(m2.elements[i]);
            resultadoSuma.elements.push(valor); //Agrego el valor al elements del vector del objeto Matrix
        }
        return (resultadoSuma);
    };
    Matrix.prototype.multNumber = function (n) {
        var resultadoMult = new Matrix(0, 0, 0);
        for (var i in this.elements) {
            var valor = this.elements[i].multNumberM(n);
            resultadoMult.elements.push(valor);
        }
        return (resultadoMult);
    };
    Matrix.prototype.multSpecial = function (n) {
        var resultadoMult = new Matrix(0, 0, 0);
        for (var i in this.elements) {
            var valor = this.elements[i].multSpecial(n);
            resultadoMult.elements.push(valor);
        }
        return (resultadoMult);
    };
    return Matrix;
}());
exports.Matrix = Matrix;
