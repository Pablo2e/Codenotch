/* RETO EXTRA:Tienes que hacer otra libreria llamada Vector
Con las siguientes operaciones: */
//Crear vector: Crea un vector de n numeros aleatorios que van desde 0 hasta m
function creaVector(m){
    var vector=[]
    for (let i = 0; i < m; i++) {
        valor= Math.floor(Math.random()*m, 0);
        vector.push(valor)
    }
    return(vector)
}
creaVector(5)
//Suma vector: Suma dos vectores si y solo si tienen el mismo numero de elementos
function sumaVectoresIguales(vector1, vector2){
    var vectorResultanteSuma=[];
  if(vector1.length===vector2.length){
        for (let i = 0; i < vector1.length; i++) {
            valor=vector1[i]+vector2[i];
            vectorResultanteSuma.push(valor);
        }
    }else{
        return("Los vectores no tienen el mismo numero de elementos")
    }
    return(vectorResultanteSuma)
}
sumaVectoresIguales([1,2,3], [1,2,3])
//sumaVectoresIguales([1,2,3,4,5], [1,2,3])
//Producto numero vector: Multiplica el vector por un numero n

function productoVector(vectorAMultilicar, n) {
    var vectorResultanteProducto=[];
    for (let i = 0; i < vectorAMultilicar.length; i++) { 
        valor=vectorAMultilicar[i]*n;
        vectorResultanteProducto.push(valor);
    }
    return(vectorResultanteProducto)
}
productoVector([1,2,3], 3)
//Resta vector: Resta dos vectores si y solo si tienen el mismo numero de elementos
function restaVectoresIguales(vector1, vector2){
    var vectorResultanteResta=[];
  if(vector1.length===vector2.length){
        for (let i = 0; i < vector1.length; i++) {
            valor=vector1[i]-vector2[i];
            vectorResultanteResta.push(valor);
        }
    }else{
        return("Los vectores no tienen el mismo numero de elementos")
    }
    return(vectorResultanteResta)
}
restaVectoresIguales([1,2,3], [1,2,3]);


//Producto vector: Multiplica dos vectores si y solo si tienen el mismo numero de elementos
function multVectoresIguales(vector1, vector2){
    var vectorResultanteMult=[];
  if(vector1.length===vector2.length){
        for (let i = 0; i < vector1.length; i++) {
            valor=vector1[i]*vector2[i];
            vectorResultanteMult.push(valor);
        }
    }else{
        return("Los vectores no tienen el mismo numero de elementos")
    }
    return(vectorResultanteMult)
}
multVectoresIguales([1,2,3], [1,2,3])


module.exports = {creaVector,sumaVectoresIguales, productoVector, restaVectoresIguales, multVectoresIguales}