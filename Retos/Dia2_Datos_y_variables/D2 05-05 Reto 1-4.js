/* RETOS
RETO 1: Crea una variable denominada cadena que almacene una cadena de texto.
Crea otra variable denominada numero que almacene un numero.
Finalmente crea una variable booleana que almacene un valor verdadero o falso.
Mostrar por consola los valores de las tres variables, */
const cadena = 'cadena de texto';
const numero = 0;
const booleana = true;
var array = [cadena,numero,booleana]
console.log(array)

/* RETO 2: Ve a la transparencia que define lo que es una variable.
Almacena cada uno de los párrafos en una variable diferentes y, después, imprímelas todas juntas (en una sola ejecución de Javascript)
en el navegador respetando los saltos de línea. */
const parrafo1 = `Lo hemos estado viendo constantemente en los ejemplos de cada uno de
los tipos hasta ahora, pero para dar más claridad a la sintaxis y al uso, una
variable es un contenedor que almacena un valor.`
const parrafo2 = `Es una manera de poner nombre o codificar datos y/o valores que nos son
útiles, interesantes o necesarios para lo que estamos haciendo.`
console.log( parrafo1 + '\n ' +parrafo2)

/* RETO 3: Realizar las siguientes tareas:
1. Hacer tres arrays de 5 elementos de tipo String
2. Hacer un array de los tres arrays y llamarle matriz
3. En el document mostrar matriz[2]
4. En el document mostrar matriz[2,4]
5. En el document mostrar segundo carácter del elemento matriz[2,4]
6. Sustituir el elemento matriz[2] por otro array de números
7. Mostrar ese elemento
8. Modificar el elemento matriz[1,3] por un booleano
9. Mostrar ese elemento
10. Insertar al final del primer array un nuevo string
11. Eliminar el primer elemento del primer array
12. Ordenar alfabeticamente el array 2 */
const array1 = ['1','2','3','4','5']
const array2 = ['1','2','3','4','5']
const array3 = ['1','2','3','4','5']
const matriz = [array1,array2,array3]
console.log (matriz[2][4])
const array4 = ['casa','perro','coche','zoo','51']
matriz.pop()
console.log (matriz)
matriz.push(array4)
console.log (matriz)
matriz[0][3] = true
console.log (matriz)
matriz[0].push('array4')
console.log (matriz)
matriz[0].shift()
console.log (matriz)
matriz[2].sort()
console.log (matriz)

/* RETO 4: Realizar las siguientes tareas:
1. Crear un JSON como en el ejemplo 3
2. Mostrar su nombre
3. Mostrar todas sus aficiones
4. Mostrar solo su segunda afición
5. Mostrar todos los datos de su dni
6. Mostrar solo la fecha de expedición de su dni. */
const persona = {
    'nombre':'Pepe',
    'edad':35,
    'esVaron': true,
    'aficiones':['nadar','patinar','leer'],
    'dni':{
        'numero': 123123123,
        'fechaExpedicion': '20 de marzo de 2010'
    }
}
console.log (persona.nombre)
console.log (persona.aficiones)
console.log (persona.aficiones[1])
console.log (persona.dni)
console.log (persona.dni.fechaExpedicion)