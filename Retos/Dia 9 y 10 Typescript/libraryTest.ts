/* RETO 7: PROBAR LA CLASE LIBRAR
1. Guardar la clase Library en un fichero con extensión .ts(library.ts) 
2. Modificar ese fichero para exportar la clase
3. Importar la clase en otro fichero denominado libraryTest.ts
4. Crear un Objeto de la clase Library y probar todos sus atributos y
métodos. */

//Importo la clase Book del del archivo book y Library de library
import {Book} from "./book"
import {Library} from "./library"
//Creo 3 objetos de la clase Book para meter dentro de mi objeto de la clase Library
let libro1:Book = new Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions")
let libro2:Book = new Book("Introducción a HTML5", 234, "8944433-BC23333", "Joseph Smith", "Now Editions")
let libro3:Book = new Book("CSS para dummies", 455, "234000-AC23333", "Jose Perez", "Editiones Luna")
//Creo el array de objetos de la clase Library
let libros=[libro1,libro2,libro3]
//Creo el objeto de la clase Library
let biblioteca:Library = new Library(libros,"Ancona 7","Ana Martinez")
//Pruebo los atributos y los metodos
console.log(biblioteca.toString())
console.log(biblioteca.getNumbersOfBooks())
console.log(biblioteca.findByAuthor("Joseph Smith"))
console.log(biblioteca.findByAuthor("Jose Perez"))
console.log(biblioteca.getAddress());
console.log(biblioteca.getManager());
biblioteca.setAddress("Milán 21")
biblioteca.setManager("Laura Gomez")
console.log(biblioteca)