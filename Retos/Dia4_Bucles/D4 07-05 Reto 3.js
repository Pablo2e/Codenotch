/* RETO 3:Construye un sistema que nos muestra por pantalla todos los números del 1 al 10. 
Constrúyelo de las 3 maneras vista en el día y que nos muestre solamente los números impares y que sean divisibles por 3. */
for (i=1 ;i<=10;i++){
    if(i%3==0){
        console.log(i)
        i++
    }
}

var i=0
while(i<=10){
    i++;
    if(i%3==0){
        console.log(i);
        i++;
    }
}

var i=0
do{
    i++
    if(i%3==0){
        console.log(i);
    }
}while(i<=10);