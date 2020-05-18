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
if(grupo[0].colorPelo=="Castaño"){
  console.log(grupo[0].nombre+" tiene el pelo castaño.")
}if(grupo[1].colorPelo=="Castaño"){
  console.log(grupo[1].nombre+" tiene el pelo castaño.")
}else if(grupo[2].colorPelo=="Castaño"){
  console.log(grupo[2].nombre+" tiene el pelo castaño.")
}else if(grupo[3].colorPelo=="Castaño"){
  console.log(grupo[3].nombre+" tiene el pelo castaño.")
}