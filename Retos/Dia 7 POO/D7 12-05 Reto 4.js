/* RETO 4:Añadir el atributo aficiones a la clase “Persona”, que es un array de strings, y crear un método denominado 
mostrarAficiones, que muestre por consola las aficiones de la persona */
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
    }
    mostrarAficiones(){
        
        for (let i = 0; i < this.aficiones.length; i++) {
            console.log(this.aficiones[i]);
            
        }
    }
}
var juan= new Persona ("Juan", 180, 90, 1990,["Correr", "Leer", "Nadar"])
juan.mostrarAficiones()