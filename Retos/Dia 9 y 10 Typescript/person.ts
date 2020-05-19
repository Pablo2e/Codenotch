/* RETO 1: CLASE PERSON
Crear la Clase Person con la siguiente estructura:
• Atributos Públicos:
o name: string
o age: number
• Atributos Privados:
o address: string
• Constructor para todos los atributos
• Metodos Públicos:
o printName()
Imprime por consola el nombre
o yearOfBirth(currentYear: number):number
Calcula y devuelve el año de nacimiento
o setAddress(address:string)
Modifica el atributo address con el valor pasado como
parámetro.
o getAddress():string
Devuelve el valor del atributo address.  */

//creo y exporto la clase Person
export class Person{ 
    //Declaro los atributos
    public name: string;
    public age: number;
    private address: string;
    //Declaro el metodo constructor y doy valor a los atributos
    constructor(name:string, age:number, address:string){
        this.name=name
        this.age=age
        this.address=address
    }
    //Declaro los metodos publicos
    public printName() {
        console.log(this.name)
    }
    public yearOfBirth(currentYear:number):number{//El parametro es un numero y devuelve un numero
        return(currentYear-this.age)
    }
    //Declaro los getter y los setter
    public getAddress():string {
        return this.address;
        }
	public setAddress(address:string) {
        this.address=address;
    } 
    //metodo agregado para que funcione calendarTest
    public mostrarDatos(){
        return("Nombre: "+ this.name+ "\n" +
                "Edad: "+this.age+ "\n" +
                "Dirección: "+this.address+ "\n")
        }
}


