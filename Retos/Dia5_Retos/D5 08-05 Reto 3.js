/* RETO DE BUCLES
3:Utilizando la estructura iterativa (tipo de bucle) que consideréis mejor, 
calculad la suma de los cuadrados de los 100 primeros números. */
//While
var vuelta=1;
var resultado=0;
while(vuelta<=100){
    resultado += vuelta*vuelta;
    vuelta++;
}
console.log(resultado)
//For y prefiero este.
var resultado = 0;
for (var i=1; i<=100; i++) {
    resultado += i*i;
}  
console.log(resultado)