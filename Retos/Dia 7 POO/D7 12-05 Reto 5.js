//RETO 5:Añadir los métidos getters y setters para cada atributo de la clase “Persona”.
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
var juan= new Persona ("Juan", 180, 90, 1990,["Correr", "Leer", "Nadar"])
juan.mostrarAficiones()