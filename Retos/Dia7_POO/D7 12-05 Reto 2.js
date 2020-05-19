/* RETO 2:Añadir el atributo anyoNacimientoa la clase ”Pesona” e implementar el método edad que tome como parámetro
el año actual y calcule la edad de la persona.*/
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
}
var juan= new Persona ("Juan", 180, 90, 1990)
console.log(juan.edad())
