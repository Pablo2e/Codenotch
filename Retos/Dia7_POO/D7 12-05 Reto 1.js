/* RETO 1:Crea una clase “Persona” definida a través de sus características físicas, y haz que se pueda 
calcular el IMC (índice de mas corporal) de cualquier persona que se haya creado como un objeto de la clase. */
class Persona{
    constructor(nombre, altura, peso){
        this.nombre=nombre;
        this.altura=altura;
        this.peso=peso;
    }
    calcImc(){
        return(this.peso /(this.altura * this.altura) * 10000)
     }
}
juan= new Persona ("Juan", 180, 90)
console.log(juan.calcImc())
