//RETO adicional que consiste en modificar el reto de ayer para hacerlo con bucles

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
"anyoNacimiento" : 2009,
"aficiones": ["Dibujar","Guitarra"],
"dni": { "anyoExpedicion" : 2009,
        "lugarNacimento": "Granada"},
"colorPelo" : "Castaño"}

var manuel ={"nombre" : "Manuel",
"apellido" : "Aguilar",
"anyoNacimiento" : 1948,
"aficiones": ["Petanca","Dormir"],
"dni": { "anyoExpedicion" : 1998,
        "lugarNacimento": "Madrid"},
"colorPelo" : "Negro"}

var grupo=[maria,marta,jose,manuel]
//Mostrar el nombre de todos aquellas personas del array que tengan el pelo castaño.
for (i=0 ;i<grupo.length; i++){
    if(grupo[i].colorPelo=="Castaño"){
        console.log(grupo[i].nombre+" tiene el pelo castaño.")
    }
}
//Mostrar la edad de todos los que sean mayores de 30.
for (i=0 ;i<grupo.length; i++){
    if(grupo[i].anyoNacimiento<1990){
        console.log(grupo[i].nombre+" es mayor de 30 años.")
    }
}
//Mostrar el lugar de nacimiento de todos los que tengan el pelo negro y el dnicaducado,o sean menores de edad y su afición sea comer o dormir
for (i=0 ;i<grupo.length; i++){
    if((grupo[i].colorPelo=="Negro" && grupo[i].dni.anyoExpedicion<2010) || (grupo[i].anyoNacimiento>2002 && (grupo[i].aficiones.includes("Dormir") || grupo[i].aficiones.includes("Comer")))){
        console.log(grupo[i].nombre+" ha nacido en "+grupo[i].dni.lugarNacimento);
    }
}

