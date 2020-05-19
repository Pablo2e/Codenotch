/* RETO DE CONDICIONALES  
2:Realizar un sistema condicional que dado un importe neto de un producto calcule su importe bruto. 
Para ello hay que tener en cuenta lo siguiente:
-Si el producto ha sido comprado en España:
-Si el precio es mayor o igual a 2000 € se le aplica un 16%.
-Si el precio es menor se le aplica el 10%.
-Si el producto se ha traído de fuera:
-A los impuestos arriba descritos hay que añadirle un 10% de aduanas. */
var importe=1000;
var origen="España"
if(origen==="España"){
  if(importe>=2000){
    importe+=((16*importe)/100);
    console.log(importe);
  }else{
    importe+=((10*importe)/100);
    console.log(importe);
  }
}else{
  if(importe>=2000){
    importe+=((16*importe)/100);
    importe+=((10*importe)/100);
    console.log(importe);
  }else{
    importe+=((10*importe)/100);
    importe+=((10*importe)/100);
    console.log(importe);
  }
}

