//utilizando la libreria Vector crea una libreria Matriz con las siguientes operaciones:
//Crear matriz: Crea una matriz de nxm numeros aleatorios que van desde 0 hasta k
function creaVector(n,m,k){
    var vector=[]
    for (let i = 0; i < n; i++) {
        var vector2=[]
        for (let j = 0; j < m; j++) {
            valor= Math.floor(Math.random()*k+0);
            vector2.push(valor)
        }
        vector.push(vector2)
        //console.log(vector[i])
    }
    //console.log(vector)
    return(vector)
}
creaVector(5,2,9)

//Suma matrices: Suma dos matrices si y solo si tienen el mismo numero de elementos
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

//Producto numero matriz: Multiplica la matriz por un numero n
function productoVector(vectorAMultilicar, n) {
    var vectorResultanteProducto=[];
    for (let i = 0; i < vectorAMultilicar.length; i++) { 
        valor=vectorAMultilicar[i]*n;
        vectorResultanteProducto.push(valor);
    }
    return(vectorResultanteProducto)
}
productoVector([1,2,3], 3)

//Resta matriz: Resta dos matrices si y solo si tienen el mismo numero de elementos
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

//Producto matrices: Multiplica dos matrices si y solo si tienen el mismo numero de elementos
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