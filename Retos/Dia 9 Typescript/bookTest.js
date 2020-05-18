"use strict";
/* RETO 5: PROBAR LA CLASE BOOK
1. Guardar la clase Book en un fichero con extensión .ts (book.ts)
2. Modificar ese fichero para exportar la clase
3. Importar la clase en otro fichero denominado bookTest.ts
4. Crear un Objeto de la clase Book y probar todos sus atributos y
métodos. */
exports.__esModule = true;
//Importo la clase Book del del archivo book
var book_1 = require("./book");
// creo 3 objetos de la clase libros con sus datos
var libros = new book_1.Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
var libros2 = new book_1.Book("Introducción a HTML5", 234, "8944433-BC23333", "Joseph Smith", "Now Editions");
var libros3 = new book_1.Book("CSS para dummies", 455, "234000-AC23333", "Jose Perez", "Editiones Luna");
//Uso el metodo toString() de la clase Book para mostrar el contenido de los objetos 
console.log(libros.toString());
console.log(libros2.toString());
console.log(libros3.toString());
//Pruebo los atributos y metodos
console.log(libros.getTitle());
console.log(libros.getNpages());
console.log(libros.getIssn());
console.log(libros.getAuthor());
console.log(libros.getEditorial());
libros3.setTitle(" HTML para dummies");
libros3.setNpages(367);
libros3.setIssn("234000-AC23333");
libros3.setAuthor("Juan Lopes Perez");
libros3.setEditorial("Ediciones El Sol");
console.log(libros3.toString());
