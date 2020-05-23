"use strict";
exports.__esModule = true;
var platform_1 = require("./platform");
var platform_2 = require("./platform");
//test metodo mismaPlataforma
var xbox = new platform_1.Platform("xbox", 2018, "Microsoft", 256, 5, true, 4, true, platform_2.Almacenamiento.bluray, "Negro");
var nintendo = new platform_1.Platform("Nintendo", 2018, "Nintendo", 256, 1, true, 4, true, platform_2.Almacenamiento.cd, "Negro");
var playstation = new platform_1.Platform("xbox", 2018, "Microsoft", 256, 5, true, 4, true, platform_2.Almacenamiento.bluray, "Negro");
console.log(xbox.mismaPlataforma(playstation));
console.log(nintendo.mismaPlataforma(xbox));
//test metodo mostrarValores
xbox.mostrarValores();
//test metodo mostrarValoresString
playstation.mostrarValoresString();
