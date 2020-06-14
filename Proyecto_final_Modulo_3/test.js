"use strict";
/* Ahora crea un fichero test que realice lo siguiente:
•	Crea un array de Electrodomesticos de 10 elementos.
•	Asigna a cada posición un objeto de las clases anteriores con los valores que desees.
•	Recorrer este array y ejecuta el método precioFinal().
Hacer •	Deberás mostrar el precio de cada clase, es decir, el precio de todas las televisiones por un lado,
    el de las lavadoras por otro y la suma de los Electrodomesticos (puedes crear objetos Electrodomestico,
    pero recuerda que Television y Lavadora también son electrodomésticos). Recuerda el uso operador instanceof.
    Por ejemplo, si tenemos un Electrodomestico con un precio final de 300, una lavadora de 200 y una televisión de 500,
    el resultado final sera de 1000 (300+200+500) para electrodomésticos, 200 para lavadora y 500 para televisión. */
exports.__esModule = true;
//import { Electrodomestico, colorElectro, consEnergetico } from "./electro"
var electro_1 = require("./electro");
var tv_1 = require("./tv");
var lavadora_1 = require("./lavadora");
//ELECTRODOMESTICOS
var ele1 = new electro_1.Electrodomestico();
ele1.setConsumo("F");
ele1.setColor("Amarillo");
ele1.setPrecioBase(20);
ele1.setPeso(1);
var ele2 = new electro_1.Electrodomestico();
ele2.setConsumo("F");
ele2.setColor("Azul");
ele2.setPrecioBase(18);
ele2.setPeso(1);
var ele3 = new electro_1.Electrodomestico();
ele3.setConsumo("B");
ele3.setColor("Blanco");
ele3.setPrecioBase(10);
ele3.setPeso(1);
var ele4 = new electro_1.Electrodomestico();
ele4.setConsumo("A");
ele4.setColor("Blanco");
ele4.setPrecioBase(200);
ele4.setPeso(50);
var ele5 = new electro_1.Electrodomestico();
ele5.setConsumo("F");
ele5.setColor("Blanco");
ele5.setPrecioBase(30);
ele5.setPeso(5);
//LAVADORAS
var lav1 = new lavadora_1.Lavadora();
lav1.setConsumo("A");
lav1.setColor("Negro");
lav1.setPrecioBase(220);
lav1.setPeso(50);
lav1.setCarga(20);
var lav2 = new lavadora_1.Lavadora();
lav2.setConsumo("A");
lav2.setColor("Blanco");
lav2.setPrecioBase(120);
lav2.setPeso(40);
lav2.setCarga(35);
var lav3 = new lavadora_1.Lavadora();
lav3.setConsumo("A");
lav3.setColor("Rojo");
lav3.setPrecioBase(400);
lav3.setPeso(80);
lav3.setCarga(50);
//TELEVISORES
var tv1 = new tv_1.Tv();
tv1.setConsumo("A");
tv1.setColor("Negro");
tv1.setPrecioBase(400);
tv1.setPeso(10);
tv1.setResolucion(55);
tv1.setTdt(true);
var tv2 = new tv_1.Tv();
tv2.setConsumo("F");
tv2.setColor("Gris");
tv2.setPrecioBase(50);
tv2.setPeso(30);
tv2.setResolucion(20);
tv2.setTdt(false);
var arrayElec = new Array(ele1, ele2, ele3, ele4, ele5, lav1, lav2, lav3, tv1, tv2);
function valorXclase(array) {
    var valEle = 0;
    var valLav = 0;
    var valTv = 0;
    for (var i in array) {
        if (array[i] instanceof electro_1.Electrodomestico) {
            valEle += array[i].precioFinal();
            //console.log ("elec", valEle)
        }
        if (array[i] instanceof lavadora_1.Lavadora) {
            valLav += array[i].precioFinalL();
            //console.log ("lav", valLav)
        }
        if (array[i] instanceof tv_1.Tv) {
            valTv += array[i].precioFinalT();
            //console.log ("tv", valTv)
        }
    }
    return ("El resultado final es de " + valEle + " para electrodom\u00E9sticos, " + valLav + " para lavadora y " + valTv + " para televisi\u00F3n");
}
console.log(valorXclase(arrayElec));
