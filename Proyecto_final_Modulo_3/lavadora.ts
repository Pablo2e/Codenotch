/* Crear una subclase llamada Lavadora con las siguientes características: (INVESTIGAR COMO SE CREA UNA SUBCLASE A PARTIR DE UNA CLASE YA CREADA)
•	Su atributo es carga, además de los atributos heredados.
•	Por defecto, la carga es de 5 kg. Usa una constante para ello.
•	Implementará un constructor por defecto.
Hacer •	Los métodos que se implementara serán: 
o	Método getters y setters de carga
o	precioFinal():, si tiene una carga mayor de 30 kg, aumentara el precio 50 €, si no es así no se incrementara el precio. 
Llama al método padre y añade el código necesario. 
Recuerda que las condiciones que hemos visto en la clase Electrodoméstico también deben afectar al precio. */

import { Electrodomestico, colorElectro, consEnergetico } from "./electro"

const CARGA_DEFECTO:number=5

export class Lavadora extends Electrodomestico{
    public carga:number

    constructor(){
        super();
        this.carga=CARGA_DEFECTO
    }
//Getter
    public getCarga():number{
        return this.carga;
    }
//Setter
    public setCarga(carga){
        this.carga=carga;
    }
    public precioFinalL(){
        let valor = super.precioFinal();
        if(this.carga>=30){
            valor+=50
        }
        return valor
    }
}

/* var lav1 = new Lavadora()
lav1.setConsumo("A")
lav1.setColor("Negro")
lav1.setPrecioBase(220)
lav1.setPeso(50)
lav1.setCarga(20)
console.log(lav1.precioFinalL())

var lav2 = new Lavadora()
lav2.setConsumo("A")
lav2.setColor("Blanco")
lav2.setPrecioBase(120)
lav2.setPeso(40)
lav2.setCarga(35)
console.log(lav2.precioFinalL())

var lav3 = new Lavadora()
lav3.setConsumo("A")
lav3.setColor("Rojo")
lav3.setPrecioBase(400)
lav3.setPeso(80)
lav3.setCarga(50)
console.log(lav3.precioFinalL()) */

