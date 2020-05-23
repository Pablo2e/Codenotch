import { Person } from "./person"
import { Profession } from "./person"

//test metodo mismaPersona
let juan:Person = new Person("Juan","Español", Profession.developer ,5)
let carlos:Person = new Person("Carlos","Español",Profession.director,0)
let marcos:Person = new Person("Juan","Español",Profession.developer,5)
console.log(juan.mismaPersona(carlos))
console.log(juan.mismaPersona(marcos))
//test metodo mostrarValores
juan.mostrarValores()
//test metodo mostrarValoresString
console.log(carlos.devolverValoresString())