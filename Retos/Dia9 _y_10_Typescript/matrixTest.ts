/* RETO 11: PROBAR LA CLASE MATRIX
1. Guardar la clase Matrix en un fichero con extensión.ts(matrix.ts) 
2. Modificar ese fichero para exportar la clase 
3. Importar la clase en otro fichero denominado matrixTest.ts 
4. Crear un Objeto de la clase Matrix y probar todos sus atributos y métodos. */

//Importo la clase Matrix del archivo matrix
import {Matrix} from "./matrix"
//Creo 2 objetos de la clase Matrix
let m2:Matrix = new Matrix(4,3,9)
let m3:Matrix = new Matrix(4,3,9)
//Creo un tercer objeto de la clase Matrix que mostrará el resultado de las 
//operaciones entre las otras 2
let m4:Matrix 
//Pruebo los metodos y atributos
m2.print()
m3.print()
m4=m2.add(m3)
m4.print()
m4=m2.multNumber(3)
m4.print() 
m4=m2.multSpecial(2)
m4.print()