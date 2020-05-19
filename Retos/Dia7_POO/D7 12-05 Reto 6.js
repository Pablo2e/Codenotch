/* RETO FINAL:Crear una clase que se llame ”Agenda” que tenga un atributo que sea un array de objetos de la clase “Persona”.
Crear un método llamado printPersonas que imprima cada uno de los atributos de cada objeto persona. */
class Persona{
    constructor(nombre, altura, peso, anyoNacimiento, aficiones){
        this.nombre=nombre;
        this.altura=altura;
        this.peso=peso;
        this.anyoNacimiento=anyoNacimiento;
        this.aficiones=aficiones;
    }
    calcImc(){
        console.log(this.peso /(this.altura * this.altura) * 10000) 
    }
    edad(){
        var hoy = new Date();
        var anyo= hoy.getFullYear();
        return(anyo-this.anyoNacimiento)
    }
    mostrarTodos(){
        console.log("Nombre: "+this.nombre)
        console.log("Altura: "+this.altura)
        console.log("Peso: "+this.peso)
        console.log("Año de Nacimiento: "+this.anyoNacimiento)
        console.log("Aficiones: "+this.aficiones)
    }
    mostrarAficiones(){
        for (let i = 0; i < this.aficiones.length; i++) {
            console.log(this.aficiones[i]);
        }
    }
    getNombre(){
        return this.nombre;
    }
    getAltura(){
        return this.altura;
    }
    getPeso(){
        return this.peso;
    }
    getAnyoNacimiento(){
        return this.anyoNacimiento;
    }
    getAficiones(){
        return this.aficiones;
    }
    setNombre(nuevoNombre){
        this.nombre=nuevoNombre;
    }
    setAltura(nuevaAltura){
        this.altura=nuevaAltura;
    }
    setPeso(nuevoPeso){
        this.peso=nuevoPeso;
    }
    setAnyoNacimiento(nuevoAnyoNacimiento){
        this.anyoNacimiento=nuevoAnyoNacimiento;
    }
    setAficiones(nuevaAficiones){
        this.aficiones=nuevaAficiones;
    }
}
/* RETO FINAL:Crear una clase que se llame ”Agenda” que tenga un atributo que sea un array de objetos de la clase “Persona”.
Crear un método llamado printPersonas que imprima cada uno de los atributos de cada objeto persona. */

class Agenda{
    constructor(personas){
        this.personas=personas;
    }  
    printPersonas(){
        for (let i = 0; i < this.personas.length; i++) {
            this.personas[i].mostrarTodos();
        }      
    }
}
var juan= new Persona ("Juan", 180, 90, 1990,["Correr", "Leer", "Nadar"]);
var carlos= new Persona ("Carlos", 200, 110, 1975,["Balocesto", "Videojuegos", "Lucha"]);
var maria= new Persona ("Maria", 150, 50, 1960,["Bordar", "Leer"]);

var gente = new Agenda([juan, carlos, maria]);
gente.printPersonas();

