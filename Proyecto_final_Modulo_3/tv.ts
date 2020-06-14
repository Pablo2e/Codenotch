/* Crear una subclase llamada Television con las siguientes características:
•	Sus atributos son resolución (en pulgadas) y sintonizador TDT (booleano), además de los atributos heredados.
•	Por defecto, la resolución será de 20 pulgadas y el sintonizador sera false.
•	Implementará un constructor por defecto.
•	Los métodos que se implementara serán: 
o	Método getter y setter de resolución y sintonizador TDT.
o	precioFinal(): si tiene una resolución mayor de 40 pulgadas, se incrementara el precio un 30% y 
    si tiene un sintonizador TDT incorporado, aumentara 50 €. 
    Recuerda que las condiciones que hemos visto en la clase Electrodomestico también deben afectar al precio. */

import { Electrodomestico, colorElectro, consEnergetico } from "./electro"

const RES_DEFECTO:number = 20;
const TDT_DEFECTO:boolean = false;

export class Tv extends Electrodomestico{
    private resolucion: number;
    private sintTdt: boolean;

    //CONSTRUCTOR
    constructor(){
        super();
        this.resolucion=RES_DEFECTO;
        this.sintTdt=TDT_DEFECTO
        
    }
    //Getters
    public getResolucion():number{
        return this.resolucion;
    }
    public getTdt():boolean{
        return this.sintTdt;
    }
    //Setters
    public setResolucion(resolucion){
        this.resolucion=resolucion;
    }
    public setTdt(sintTdt){
        this.sintTdt=sintTdt;
    }
    public precioFinalT(){
        let valor = super.precioFinal();
        if(this.resolucion>=40){
            valor+=valor*0.30
        }
        if(this.sintTdt!=false){
            valor+=50
        }
        return valor
    }
}

/* var tv1 = new Tv()
tv1.setConsumo("A")
tv1.setColor("Negro")
tv1.setPrecioBase(400)
tv1.setPeso(10)
tv1.setResolucion(55)
tv1.setTdt(true)
console.log(tv1.precioFinalT())

var tv2 = new Tv()
tv2.setConsumo("F")
tv2.setColor("Gris")
tv2.setPrecioBase(50)
tv2.setPeso(30)
tv2.setResolucion(20)
tv2.setTdt(false)
console.log(tv2.precioFinalT()) */