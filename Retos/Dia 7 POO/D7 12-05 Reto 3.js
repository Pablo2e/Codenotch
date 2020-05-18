/* RETO 3:Añadir un método que se denomine mostrarTodos que muestre por consola cada una de los atributos de la clase
“Persona” seguido por “:” y el valor del atributo. */
class Persona{
    constructor(nombre, altura, peso, anyoNacimiento){
        this.nombre=nombre;
        this.altura=altura;
        this.peso=peso;
        this.anyoNacimiento=anyoNacimiento;
        
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
    }
}
var juan= new Persona ("Juan", 180, 90, 1990)
juan.mostrarTodos()