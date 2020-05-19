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
//Mostrar el lugar de nacimiento de todos los que tengan el pelo negro y el dni caducado,o sean menores de edad y su afición sea comer o dormir
if((grupo[0].colorPelo=="Negro" && grupo[0].dni.anyoExpedicion<2010) || (grupo[0].anyoNacimiento>2002 && (grupo[0].aficiones.includes("Dormir") || grupo[0].aficiones.includes("Comer")))){
  console.log(grupo[0].nombre+" ha nacido en "+grupo[0].dni.lugarNacimento);
}if((grupo[1].colorPelo=="Negro" && grupo[1].dni.anyoExpedicion<2010) || (grupo[1].anyoNacimiento>2002 && (grupo[1].aficiones.includes("Dormir") || grupo[1].aficiones.includes("Comer")))){
  console.log(grupo[1].nombre+" ha nacido en "+grupo[1].dni.lugarNacimento);
}if((grupo[2].colorPelo=="Negro" && grupo[2].dni.anyoExpedicion<2010) || (grupo[2].anyoNacimiento>2002 && (grupo[2].aficiones.includes("Dormir") || grupo[2].aficiones.includes("Comer")))){
  console.log(grupo[2].nombre+" ha nacido en "+grupo[2].dni.lugarNacimento);
}if((grupo[3].colorPelo=="Negro" && grupo[3].dni.anyoExpedicion<2010) || (grupo[3].anyoNacimiento>2002 && (grupo[3].aficiones.includes("Dormir") || grupo[3].aficiones.includes("Comer")))){
  console.log(grupo[3].nombre+" ha nacido en "+grupo[3].dni.lugarNacimento);
}