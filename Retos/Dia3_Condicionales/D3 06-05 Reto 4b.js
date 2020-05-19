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

//Mostrar la edad de todos los que sean mayores de 30.
if(grupo[0].anyoNacimiento<1990){
  console.log(grupo[0].nombre+" es mayor de 30 años.")
}if(grupo[1].anyoNacimiento<1990){
  console.log(grupo[1].nombre+" es mayor de 30 años.")
}if(grupo[2].anyoNacimiento<1990){
  console.log(grupo[2].nombre+" es mayor de 30 años.")
}if(grupo[3].anyoNacimiento<1990){
  console.log(grupo[3].nombre+" es mayor de 30 años.")
}