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

//Importo la clase Book del del archivo book
import {Book} from "./book"
//Creo y exporto la clase Library
export class Library{
    //Creo 3 atributos privados, uno un array de objetos de la clase Book y 2 strings
    private books:Book[]
    private address:string
    private manager:string
    //Creo el constructor y le asigno a los atributos los valores pasados por parametro
    constructor(books:Book[], address:string, manager:string){
        this.books=books
        this.address=address  
        this.manager=manager  
    }
    //Creo los metodos
    public toString():string{ //devuelve un string
        let salida=""; //creo un string vacio para guardar el valor a mostrar
        let contador=0 //creo un contador a cero
        for (let i in this.books){ //recorro el array de objetos de la clase book
            contador++ //suma 1 al contador por vuelta
            //Uso el metodo toString() de la clase book que muestra el string con todos los datos del libro y se lo meto a salida
            salida+="Libro"+contador+"\n"+this.books[i].toString()+"\n";
        }
        return(salida)
    }
    public getNumbersOfBooks():number{
        return(this.books.length);
    }
    public findByAuthor(autor:string):Book[]{
        let salida=[]
        for (let i in this.books){
            if(autor===this.books[i].getAuthor()){
                salida.push(this.books[i])
            }
        }
        return(salida)
    }
    //getter y setters
    public getAddress(): string {
        return this.address
    }
    public getManager(): string {
        return this.manager
    }
    public setAddress(address: string) {
        this.address = address ;
    }
    public setManager(manager: string) {
        this.manager = manager ;
    }
} 

