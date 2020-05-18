//RETO 5:•Calcular el factorial de un numero dado,primero utilizando la sentencia for y luego con while.
/* var numero = 8;
var resultado = 1;
for (var i=1; i<=numero; i++) {
    resultado = resultado * i; 
}  
console.log(resultado) 

var numero = 5;
var i=1;
var resultado = 1;
while(i<=numero){
    resultado = resultado * i;
    i++
} 
console.log(resultado) */ 
    
//Dado un array de números, buscar si existe algún numero de ese array que sea múltiplo de 2 utilizando la sentencia while.
/* array=[5,8,53,10,45];
var i=0;
while(i<array.length){
    i++;
    if(array[i]%2==0){
        console.log(array[i]);
        i++;
    }
} */

//Realizar la suma de los 100 primeros números. Utilizar el bucle que mejor se adapte al problema.
/* var resultado = 1;
for (var i=1; i<100; i++) {
    resultado += i+1;
}  
console.log(resultado) */
//Dado un array de nombres mostrar el índice de la primera ocurrencia del nombre “Pepe”. Utilizar el bucle que mejor se adapte al problema.
/* var personas=["Maria","Pepe","Jose","Manuel","Pepe","Miguel"]
var uno=true; 
var indice=0;
for (var i=0; i<personas.length; i++) {
    if(personas[i]==="Pepe" && uno===true){
        indice++
        console.log(indice)
        uno=false;
    }
}

var i=0;
var indice=0;
while(i<personas.length && personas[i]!="Pepe"){
    i++;
    console.log(i);
} */
//Generar dos vectores de 100 números aleatorios entre 0 y 20.
array1=[];
array2=[];
for (var i=1; i<=100; i++) {
    array1.push(Math.floor((Math.random() * 20) + 1));
    array2.push(Math.floor((Math.random() * 20) + 1));
} 
console.log(array1);
console.log(array2)
//Realizar la suma de los dos vectores anteriores. Devolver un array con la suma de los indices
array3=[];
for (var i=0; i<array1.length; i++) {
    array3.push(array1[i]+array2[i]);
}  
console.log(array3)