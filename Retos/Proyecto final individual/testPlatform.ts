import { Platform } from "./platform";
import { Almacenamiento } from "./platform";

//test metodo mismaPlataforma
let xbox:Platform = new Platform("xbox", 2018,"Microsoft", 256, 5, true ,"4GB", true, Almacenamiento.blueray, "Negro")
let nintendo:Platform = new Platform("Nintendo", 2018,"Nintendo", 256, 1, true ,"4GB", true, Almacenamiento.cd, "Negro")
let playstation:Platform = new Platform("xbox", 2018,"Microsoft", 256, 5, true ,"4GB", true, Almacenamiento.blueray, "Negro")
console.log(xbox.mismaPlataforma(playstation))
console.log(nintendo.mismaPlataforma(xbox))
//test metodo mostrarValores
xbox.mostrarValores()
//test metodo mostrarValoresString
console.log(playstation.mostrarValoresString())