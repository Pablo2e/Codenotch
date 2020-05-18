/*RETO 3:Piensa un escenario en el que se quiere decidir un restaurante para una celebración. 
Los organizadores quieren que cumpla uno de los siguientes puntos:
-Que haya 3 platos en el menú, que incluya DJ y dos horas de barra libre.
-Que haya cóctel de bienvenida, menú con dos platos  y una hora de barra libre.*/
var menu3Platos=true;
var dj=true;
var barraLibre2hs=true
var coctel=false;
var menu2Platos=true;
var barraLibre1hs=true;

if(menu3Platos==true && dj==false && barraLibre2hs==true || coctel==false && menu2Platos==true && barraLibre1hs==true){
    console.log("Contratemos este restaurante")
}else{
    console.log("No cumple las condiciones")
}

var menu3Platos=true;
var dj=true;
var barraLibre2hs=true
var coctel=false;
var menu2Platos=true;
var barraLibre1hs=true;

if(menu3Platos==true && dj==false && barraLibre2hs==true || coctel==false && menu2Platos==false && barraLibre1hs==true){
    console.log("Contratemos este restaurante")
}else{
    console.log("No cumple las condiciones")
}