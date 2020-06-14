/* Crear una superclase llamada Electrodoméstico con las siguientes características:
•	Sus atributos son precio base, color, consumo energético (letras entre A y F) y peso. 
    Indica que se podrán heredar. (HAY UNA FORMA DE INDICAR QUE ESOS ATRIBUTOS PUEDEN SER HEREDADOS 
        POR SUS CLASES HIJAS) ES UNA PALABRA RESERVADA COMO PUBLIC Y PRIVATE
•	Por defecto, el color será blanco, el consumo energético será F, el precioBase es de 100 € y el peso de 5 kg. Usa constantes para ello. 
        SE PONEN SIEMPRE PRIMERO Y EN MAYUSCULA EN EL ARCHIVO
•	Los colores disponibles son: blanco, negro, rojo, azul y gris. No importa si el nombre esta en mayúsculas o en minúsculas.
•	Implementar un constructor por defecto.
Hacer •	Los métodos que implementara serán:
o	Métodos setter y getters de todos los atributos.
o	comprobarConsumoEnergetico(char letra(ES UN STRING DE UNA LETRA)): comprueba que la letra es correcta, si no es correcta usara la letra por defecto. 
        Se invocará al crear el objeto y no será visible (POR NADIE)
o	comprobarColor(String color): comprueba que el color es correcto, si no lo es usa el color por defecto. Se invocará al crear el objeto y no será visible.
o	precioFinal(): según el consumo energético, aumentara su precio, y según su tamaño, también. Esta es la lista de precios:

Letra	Precio	Tamaño	Precio
A	100 €	Entre 0 y 19 kg	10 €
B	80 €	Entre 20 y 49 kg	50 €
C	60 €	Entre 50 y 79 kg	80 €
D	50 €	Mayor que 80 kg	100 €
E	30 €
F	10 € */

export enum colorElectro {BLANCO = "blanco", NEGRO= "negro", ROJO= "rojo", AZUL= "azul" , GRIS= "gris"}
export enum consEnergetico {A = "A", B= "B", C= "C", D= "D" , E= "E", F= "F"}

const PRECIOB_DEFECTO:number=100
const COLOR_DEFECTO:colorElectro=colorElectro.BLANCO
const CONSUMO_DEFECTO:consEnergetico=consEnergetico.F
const PESO_DEFECTO:number=5


export class Electrodomestico{
    protected precioBase: number = PRECIOB_DEFECTO;
    protected color:colorElectro= COLOR_DEFECTO
    protected consumo: consEnergetico = CONSUMO_DEFECTO;
    protected peso: number = PESO_DEFECTO;
    //public carga: number
//constructor
    constructor(){
        
    }
//getters
    public getPrecioBase():number{
        return this.precioBase;
    }
    public getColor():string{
        return this.color;
    }
    public getConsumo():consEnergetico{
        return this.consumo;
    }
    public getPeso():number{
        return this.peso
    }
    /* public getCarga():number{
        return this.carga
    } */
//Setters
    public setPrecioBase(precioBase){
        this.precioBase= precioBase;
    }
    public setColor(color){
        this.color=this.comprobarColor(color);
    }
    public setConsumo(consumo){
        this.consumo=this.comprobarConsumoEnergetico(consumo)
    }
    public setPeso(peso){
        this.peso=peso;
    }
    /* public setCarga(carga){
        this.carga=carga;
    } */
//metodos
    private comprobarConsumoEnergetico(char:string){
        char=char.toUpperCase()
        if(char===consEnergetico.A || char===consEnergetico.B || char===consEnergetico.C || char===consEnergetico.D || char===consEnergetico.E || char===consEnergetico.F){
            return char
        }else{
            return CONSUMO_DEFECTO
        }
    }
    private comprobarColor(nColor:string){
        nColor=nColor.toLowerCase()
        if(nColor===colorElectro.BLANCO || nColor===colorElectro.NEGRO ||nColor===colorElectro.AZUL || nColor===colorElectro.ROJO || nColor===colorElectro.GRIS){
                return nColor as colorElectro
        }else{
            return COLOR_DEFECTO
        }
    }
    public precioFinal(){
        let total:number=0
        switch (this.getConsumo()) {
            case "A":
                if(this.getPeso()>=0 && this.getPeso()<=19){
                    total=this.getPrecioBase()+10+100
                    return total  
                }else if(this.getPeso()>=20 && this.getPeso()<=49){
                    total=this.getPrecioBase()+50+100
                    return total    
                }else if(this.getPeso()>=50 && this.getPeso()<=79){
                    total=this.getPrecioBase()+80+100
                    return total    
                }else if (this.getPeso()>=80 ){
                    total=this.getPrecioBase()+100+100
                    return total   
                }
            break;
            case "B":
                if(this.getPeso()>=0 && this.getPeso()<=19){
                    total=this.getPrecioBase()+10+80
                    return total    
                }else if(this.getPeso()>=20 && this.getPeso()<=49){
                    total=this.getPrecioBase()+50+80
                    return total    
                }else if(this.getPeso()>=50 && this.getPeso()<=79){
                    total=this.getPrecioBase()+80+80
                    return total    
                }else if (this.getPeso()>=80 ){
                    total=this.getPrecioBase()+100+80
                    return total    
                }
            break;
            case "C":
                if(this.getPeso()>=0 && this.getPeso()<=19){
                    total=this.getPrecioBase()+10+60
                    return total    
                }else if(this.getPeso()>=20 && this.getPeso()<=49){
                    total=this.getPrecioBase()+50+60
                    return total    
                }else if(this.getPeso()>=50 && this.getPeso()<=79){
                    total=this.getPrecioBase()+80+60
                    return total    
                }else if (this.getPeso()>=80 ){
                    total=this.getPrecioBase()+100+60
                    return total    
                }
            break;
            case "D":
                if(this.getPeso()>=0 && this.getPeso()<=19){
                    total=this.getPrecioBase()+10+50
                    return total    
                }else if(this.getPeso()>=20 && this.getPeso()<=49){
                    total=this.getPrecioBase()+50+50
                    return total    
                }else if(this.getPeso()>=50 && this.getPeso()<=79){
                    total=this.getPrecioBase()+80+50
                    return total    
                }else if (this.getPeso()>=80 ){
                    total=this.getPrecioBase()+100+50
                    return total    
                }
            break;
            case "E":
                if(this.getPeso()>=0 && this.getPeso()<=19){
                    total=this.getPrecioBase()+10+30
                    return total    
                }else if(this.getPeso()>=20 && this.getPeso()<=49){
                    total=this.getPrecioBase()+50+30
                    return total    
                }else if(this.getPeso()>=50 && this.getPeso()<=79){
                    total=this.getPrecioBase()+80+30
                    return total    
                }else if (this.getPeso()>=80 ){
                    total=this.getPrecioBase()+100+30
                    return total    
                }
            break;
            case "F":
                if(this.getPeso()>=0 && this.getPeso()<=19){
                    total=this.getPrecioBase()+10+10
                    return total    
                }else if(this.getPeso()>=20 && this.getPeso()<=49){
                    total=this.getPrecioBase()+50+10
                    return total    
                }else if(this.getPeso()>=50 && this.getPeso()<=79){
                    total=this.getPrecioBase()+80+10
                    return total    
                }else if (this.getPeso()>=80 ){
                    total=this.getPrecioBase()+100+10
                    return total    
                }
            break;
        }
    }
}

/* var ele1 = new Electrodomestico()
ele1.setConsumo("F")
ele1.setColor("Amarillo")
ele1.setPrecioBase(20)
ele1.setPeso(1)
//console.log(ele1.precioFinal())

var ele2 = new Electrodomestico()
ele2.setConsumo("F")
ele2.setColor("Azul")
ele2.setPrecioBase(18)
ele2.setPeso(1)
//console.log(ele2.precioFinal())

var ele3 = new Electrodomestico()
ele3.setConsumo("B")
ele3.setColor("Blanco")
ele3.setPrecioBase(10)
ele3.setPeso(1)
//console.log(ele3.precioFinal())

var ele4 = new Electrodomestico()
ele4.setConsumo("A")
ele4.setColor("Blanco")
ele4.setPrecioBase(200)
ele4.setPeso(50)
console.log(ele4.precioFinal())

var ele5 = new Electrodomestico()
ele5.setConsumo("F")
ele5.setColor("Blanco")
ele5.setPrecioBase(30)
ele5.setPeso(5)
console.log(ele5.precioFinal()) */

/*var arrayElec:Electrodomestico[] = new Array(ele1, ele2, ele3)
 function recorrer(array){
    let salida:number=0
    for (let i = 0; i < array.length; i++){
        salida += array[i].precioFinal();
        console.log(salida)
    }
}
//arrayElec.forEach(element => console.log(element.precioFinal()));
recorrer(arrayElec) */