/* RETO 4:•Teniendo la siguiente estructura de objeto JSON
:persona ={"nombre" : string,
            "apellido" : string,
            "anyoNacimiento" : number,
            "aficiones": arrayof string,
            "dni": { "anyoExpedicion" : number,"lugarNacimento": string},
            "colorPelo" : string}
 */

var maria ={"nombre" : "Maria",
"apellido" : "Perez",
"anyoNacimiento" : 1942,
"aficiones": ["Tejer","Bordar"],
"dni": { "anyoExpedicion" : 2008,
"lugarNacimento": "Madrid"},
"colorPelo" : "Castaño"}

var marta ={"nombre" : "Marta",
"apellido" : "Rodriguez",
"anyoNacimiento" : 2005,
"aficiones": ["Comer","Nadar"],
"dni": { "anyoExpedicion" : 2000,
"lugarNacimento": "Zaragoza"},
"colorPelo" : "Rubio"}

var jose ={"nombre" : "José",
"apellido" : "Perez",
"anyoNacimiento" : 1999,
"aficiones": ["Dibujar","Guitarra"],
"dni": { "anyoExpedicion" : 2009,
        "lugarNacimento": "Granada"},
"colorPelo" : "Castaño"}

var manuel ={"nombre" : "Manuel",
"apellido" : "Aguilar",
"anyoNacimiento" : 2008,
"aficiones": ["Petanca","Dormir"],
"dni": { "anyoExpedicion" : 2008,
        "lugarNacimento": "Madrid"},
"colorPelo" : "Negro"}
//Crear un array denominado personas con 4 objetos de tipo persona.
var personas=[maria,marta,jose,manuel]
//•Mostrar todos los elementos del array personas en la consola de javascript con un bucle for y con un bucle while.
/* for (var i=0; i<personas.length; i++){
    console.log(personas[i])
} */
var i=0;
while(i<personas.length){
    console.log(personas[i])
    i++
}
//•Mostrar en la consola javascript los elementos del array persona que su año de nacimiento esté entre 1978 y 2000.
//Hacerlo con un bucle for y luego con un bucle while.
/* for (var i=0; i<personas.length; i++){
    if(personas[i].anyoNacimiento>1978 && personas[i].anyoNacimiento<2000){
        console.log(personas[i])
    }
} */
/* var i=1
while(i<personas.length){
    if(personas[i].anyoNacimiento>1978 && personas[i].anyoNacimiento<2000){
        console.log(personas[i])
        i++

    }
} */
//•Mostrar el siguiente mensaje:
//“Tu edad está entre 40 y 20 años” para todos los elementos del array que cumple la condición del apartado anterior.
//•“Tu edad es menor de 20” para el resto de los casos.
/* for (var i=0; i<personas.length; i++){
    if(personas[i].anyoNacimiento>1980 && personas[i].anyoNacimiento<2000){
        console.log(personas[i].nombre+" Tu edad está entre 40 y 20 años ");
    }else{
        console.log(personas[i].nombre+" Tu edad es menor de 20")
    }
} */

//•Agregar la afición “jugar a la play” a todos los elementos del array personas.
for (var i=0; i<personas.length; i++){
    personas[i].aficiones.push("jugar a la play");
}
console.log(personas);
