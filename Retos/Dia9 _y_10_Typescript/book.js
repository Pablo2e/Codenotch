"use strict";
/* RETO 4: CLASE BOOK
Crear la Clase Book con la siguiente estructura:
• Atributos Privados:
o title: string
o nPages: number
o issn: string
o author: string
o editorial: string
• Constructor para todos los atributos.
• Metodos Públicos:
o getters y setters para todos los atributos
o toString ():string
Devuelve un string con TODA la información del libro con la
siguiente estructura:
“Title – Intriducción a Javascript
Numer of Pages- 233
ISSN – 2344433-BC23333
Author – Joseph Smith
Editorial – Now Editions" */
exports.__esModule = true;
exports.Book = void 0;
//creo y exporto la clase Book
var Book = /** @class */ (function () {
    //Creo el constructor y le asigno a los atributos los valores pasados por parametro
    function Book(title, nPages, issn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.issn = issn;
        this.author = author;
        this.editorial = editorial;
    }
    //Creo el metodo toString() que devuelve un string
    Book.prototype.toString = function () {
        return ("Title - " + this.title + "\n" +
            "Number of pages - " + this.nPages + "\n" +
            "ISSN - " + this.issn + "\n" +
            "Author - " + this.author + "\n" +
            "Editorial - " + this.editorial);
    };
    //Creo los getter y setters
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getNpages = function () {
        return this.nPages;
    };
    Book.prototype.getIssn = function () {
        return this.issn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setNpages = function (nPages) {
        this.nPages = nPages;
    };
    Book.prototype.setIssn = function (issn) {
        this.issn = issn;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    return Book;
}());
exports.Book = Book;
