/* RETO 1:Crea una función que imprima siempre lo que se le pasa por parámetro, 
y si no se le pasa ningún parámetro, informe de esta situación (utiliza ECMASCRIPT). */
pasar = (valor) => {
    if(valor===undefined){
       valor="No has pasado ningun parametro";
    }
    return valor
}

let frase="Hola"
console.log(pasar([1,2]))
console.log(pasar(frase))
console.log(pasar(5))
console.log(pasar())

/* RETO 2:Reescribe la siguiente función basándote en ECMASCRIPT
function multiply(x,y)
    {return x*y
} */

multiply = (x,y) => {return x*y}
console.log(multiply(3,4));