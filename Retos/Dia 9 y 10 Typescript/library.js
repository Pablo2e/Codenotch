"use strict";
/* RETO 6: CLASE LIBRARY
Crear la Clase Library con la siguiente estructura:
•Atributos Privados:
o books: array of Book
o address: string
o manager: string
•Constructor para todos los atributos.
•MetodosPúblicos:
o getters y setters para los atributos address y manager
o toString():string
Devuelve un string con TODA la información de todos los libros de la biblioteca con la siguiente estructura:
“Libro1:Title–Intriduccióna Javascript
Numerof Pages-233
ISSN –2344433-BC23333
Author–Joseph Smith
Editorial –Now Editions.......”
o getNumberOfBooks():number
Devuelve el numero de libros de la biblioteca.
o findByAuthor(author:string):Book[]
Devuelve un [] de libros cuyo autor coincida con el nombre que se pasa como parámetro del método.*/
exports.__esModule = true;
exports.Library = void 0;
//Creo y exporto la clase Library
var Library = /** @class */ (function () {
    //Creo el constructor y le asigno a los atributos los valores pasados por parametro
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    //Creo los metodos
    Library.prototype.toString = function () {
        var salida = ""; //creo un string vacio para guardar el valor a mostrar
        var contador = 0; //creo un contador a cero
        for (var i in this.books) { //recorro el array de objetos de la clase book
            contador++; //suma 1 al contador por vuelta
            //Uso el metodo toString() de la clase book que muestra el string con todos los datos del libro y se lo meto a salida
            salida += "Libro" + contador + "\n" + this.books[i].toString() + "\n";
        }
        return (salida);
    };
    Library.prototype.getNumbersOfBooks = function () {
        return (this.books.length);
    };
    Library.prototype.findByAuthor = function (autor) {
        var salida = [];
        for (var i in this.books) {
            if (autor === this.books[i].getAuthor()) {
                salida.push(this.books[i]);
            }
        }
        return (salida);
    };
    //getter y setters
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    return Library;
}());
exports.Library = Library;
