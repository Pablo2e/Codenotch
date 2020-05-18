/* RETO 9: PROBAR LA CLASE VECTOR
1. Guardar la clase Vector en un fichero con extensión .ts (vector.ts)
2. Modificar ese fichero para exportar la clase
3. Importar la clase en otro fichero denominado vectorTest.ts
4. Crear un Objeto de la clase Vector y probar todos sus atributos y
métodos. */

//importo la clase Vector del archivo vector
import {Vector} from "./vector"
//creo 2 objetos de la clase Vector
let vector:Vector = new Vector(4,3)
let vector2:Vector = new Vector(4,3)
//Pruebo los atributos y metodos
vector.print()
vector2.print()
console.table(vector.add(vector2))
console.table(vector.subs(vector2))
console.table(vector.mult(vector2))
console.table(vector.multNumberM(5))

