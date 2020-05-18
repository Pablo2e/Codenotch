/* RETO FINAL 2
1.Crear una matriz (vector de vectores) de 10 x 10 es decir 10 elementos y cada uno de ellos es un vector de 10 números.
2.Cada uno de los elementos de la matriz deberá ser un numero aleatorio entre 0 y 50
3.Crear otra matriz con las mismas características que la anterior
4.Realizar la suma de las dos matrices (sumar elemento a elemento)
5.Multiplicar un numero aleatorio por la matriz. Es decir, todos los elementos de la matriz se multiplicarán por ese numero */
var vector1 = [];
for( var i=0; i<10; i++) {
	var array = [];
    for ( var j=0; j<10; j++) {
    	array.push(Math.floor(Math.random() * 50) + 0);
    }
	vector1.push(array);
}
console.table(vector1)

//3.Crear otra matriz con las mismas características que la anterior
var vector2 = [];
for( var i=0; i<10; i++) {
	var array2 = [];
    for ( var j=0; j<10; j++) {
    	array2.push(Math.floor(Math.random() * 50) + 0);
    }
	vector2.push(array2);
}
console.table(vector2)

//4.Realizar la suma de las dos matrices (sumar elemento a elemento)
vector4=[];
for (var i=0; i<vector1.length; i++) {
  vector3=[];
  for (var j=0; j<vector1.length; j++) {
    vector3.push(parseInt(vector1[i][j])+parseInt(vector2[i][j]))
  }
  vector4.push(vector3);
}  
console.table(vector4)

/*5.Multiplicar un numero aleatorio por la matriz. Es decir, todos los elementos de la matriz se multiplicarán por ese numero */
var nAleatorio = Math.floor((Math.random() * 5) + 1);
console.log(nAleatorio);
for (var i=0; i<vector4.length; i++) {
   for (var j=0; j<vector4.length; j++) {
    vector4[i][j] = (parseInt(vector4[i][j])*nAleatorio)
  }
}  
console.table(vector4)