/*RETO 2: PROBAR LA CLASE PERSON 
1. Guardar la clase Person en un fichero con extensión .ts (person.ts)
2. Modificar ese fichero para exportar la clase
export class Person
3. Importar la clase en otro fichero denominado personTest.ts
import { Person } from "./person”
4. Crear un Objeto de la clase Person y probar todos sus atributos y
métodos. */

//importo la clase Person del archivo person
import {Person} from "./person"
//creo un nuevo objeto persona
let juan:Person= new Person("Juan", 28, "Via 2");
//imprimo el atributo age del objeto de la clase persona juan
console.log(juan.age);
//llamo al metodo printName del objeto de la clase persona juan
juan.printName();
console.log(juan.yearOfBirth(2020));
console.log(juan.getAddress());
juan.setAddress("Gran Via 2");
console.log(juan.getAddress());
console.log(juan.mostrarDatos());