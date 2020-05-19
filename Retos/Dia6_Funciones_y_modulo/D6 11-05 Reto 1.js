/* RETO 1:Construye una función “calculadora()” que reciba como parámetros de entrada:
-Tipo de operación-Operadores (siempre 2 operadores para hacerlo más sencillo).
Las operaciones permitidas son: suma (“sum”), resta (“subs”), multiplicación (“mult”) y división (“div”). 
Dependiendo del identificador de la operación, y los parámetros de entrada, 
la función debe decidir qué operación realizar y devolvernos un resultado válido. */
var suma=0;
var resta=0;
var multiplicacion=0;
var division=0;
function calculadora(operacion,operador1,operador2) {
    if (operacion=="sum") {
        suma=operador1+operador2;
    }else if (operacion=="subs") {
        resta=operador1-operador2;
    }else if (operacion=="mult") {
        multiplicacion=operador1*operador2;
    }else if (operacion=="div") {
        division=operador1/operador2;
    }
}
calculadora("sum",16,8)
calculadora("subs",32,8)
calculadora("mult",3,8)
calculadora("div",192,8)
console.log(suma, resta, multiplicacion, division)
