/* RETO FINAL 1
Dada la siguiente lista de libros:
-Readyplayerone
-El nombre del viento
-El temor de un hombre sabio
-Cien años de soledad
-Origen
Imprímelos por pantalla y entre corchetes el número de letras que contiene su nombre (ej.: Origen [6] ). 
Además, debes poner el que sea más largo en negrita. */
var libros=["Readyplayerone","El nombre del viento","El temor de un hombre sabio","Cien años de soledad","Origen"]
var largo=0;
for(i=0; i<libros.length; i++){// entro al indice
    if(libros[i].length>largo){
      largo=libros[i].length;
    }
}
for(i=0; i<libros.length; i++){
  if(libros[i].length===largo){
     document.write("<strong>"+libros[i]+" ["+libros[i].length+"]"+"</strong>"+"<br>");
  }else{
    document.write(libros[i]+" ["+libros[i].length+"]"+"<br>")
  }
}
