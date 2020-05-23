import { Person } from "./person"
import { Platform} from "./platform"
import { Profession } from "./person"
import { Almacenamiento } from "./platform"
import { Videogame } from "./videogame"

//Creo los objetos de la clase persona, los strings, los objetos Platform, los strings y el objeto Videogame
let juan:Person = new Person("Juan","Español", Profession.director ,5)
let carlos:Person = new Person("Carlos","Español",Profession.developer,0)
let miguel:Person = new Person("Miguel","Español",Profession.manager,10)
let desarrolladores:Person[]= new Array(juan, carlos)
let idiomas:string[]= new Array("Español", "Ingles")
let xbox:Platform = new Platform("xbox", 2018,"Microsoft", 256, 5, true ,"4GB", true, Almacenamiento.blueray, "Negro")
let nintendo:Platform = new Platform("Nintendo", 2018,"Nintendo", 256, 1, true ,"4GB", true, Almacenamiento.cd, "Negro")
let playstation:Platform = new Platform("Playstation", 2018,"Microsoft", 256, 5, true ,"4GB", true, Almacenamiento.blueray, "Negro")
let plataformas:Platform[]=new Array(xbox, playstation, nintendo)
let random:Videogame = new Videogame("Random", 2020, desarrolladores, "Española", carlos, idiomas, plataformas, 50, 8 )
//Prueba del metodo esPara
console.log(random.esPara("stadia"))
console.log(random.esPara("xbox"))
//Prueba del metodo esDesarrollador
console.log(random.esDesarrollador("juan"))
console.log(random.esDesarrollador("miguel")) 
//Prueba del metodo esEnIdioma
/* console.log(random.esEnIdioma("Español"))
console.log(random.esEnIdioma("Ruso")) 
//Prueba del metodo datos
console.log(random.datos())
//Prueba del metodo
console.log(random.devolverValoresString()) */