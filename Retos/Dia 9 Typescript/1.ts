/* Crear la Clase Person con la siguiente estructura:
• Atributos Públicos:
o name: string
o age: string
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
Devuelve el valor del atributo addess. */
export class Person{
    public name: string;
    public age: string;
    private address: string;

    constructor(name:string, age:string, address: string){
        this.name=name
        this.age=age
        this.address=address
    }
    //metodos
    public printName() {
        console.log(this.name)
    }
    public yearOfBirth(currentYear:number):number  {
        return(currentYear-parseInt(this.age))
    }
    //getter y setter
    public getAddress():string {
        return this.address;
        }
	public setAddress(address:string) {
        this.address=address;
    }   
	
}
let juan:Person= new Person("Juan","28", "Via 2");
console.log(juan.age);
console.log(juan.yearOfBirth(2020))
console.log(juan.getAddress())
juan.setAddress("Gran Via 2")
console.log(juan.getAddress())
