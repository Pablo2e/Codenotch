export class Espectador {
    private nombre: string
    private edad: number
    private dinero: number
       
    constructor(nombre: string){
        this.nombre=nombre;
    }
    //Getters y Setters
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string){
        this.nombre = nombre;
    }

    public getEdad(): number {
        return this.edad;
    }
    public setEdad(edad: number){
        this.edad = edad;
    }

    public getDinero(): number {
        return this.dinero;
    }
    public setDinero(dinero: number){
        this.dinero = dinero;
    }
}
