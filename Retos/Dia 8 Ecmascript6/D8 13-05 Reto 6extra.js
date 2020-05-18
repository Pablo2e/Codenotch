/* RETO Extra convierte la libreria vector en una clase vector */
class Vector {
    constructor(vector){
        this.vector=vector;
      }
    creaVector(m){
      let vector=[]
      for (let i = 0; i < m; i++) {
        let valor= Math.floor(Math.random()*m, 0);
        vector.push(valor)
      }
      return(vector)
      }
    //Suma vector: Suma dos vectores si y solo si tienen el mismo numero de elementos
    sumaVectoresIguales(vector1, vector2){
      let vectorResultanteSuma=[];
      if(vector1.length===vector2.length){
        for (let i = 0; i < vector1.length; i++) {
          let valor=vector1[i]+vector2[i];
          vectorResultanteSuma.push(valor);
          }
      }else{
          return("Los vectores no tienen el mismo numero de elementos")
      }
      return(vectorResultanteSuma)
  }
   //Producto numero vector: Multiplica el vector por un numero n
    productoVector(vectorAMultilicar, n) {
      let vectorResultanteProducto=[];
      for (let i = 0; i < vectorAMultilicar.length; i++) { 
        let  valor=vectorAMultilicar[i]*n;
        vectorResultanteProducto.push(valor);
      }
      return(vectorResultanteProducto)
  }
  
  //Resta vector: Resta dos vectores si y solo si tienen el mismo numero de elementos
    restaVectoresIguales(vector1, vector2){
      let vectorResultanteResta=[];
      if(vector1.length===vector2.length){
        for (let i = 0; i < vector1.length; i++) {
          let valor=vector1[i]-vector2[i];
          vectorResultanteResta.push(valor);
          }
      }else{
          return("Los vectores no tienen el mismo numero de elementos")
      }
      return(vectorResultanteResta)
  }
 //Producto vector: Multiplica dos vectores si y solo si tienen el mismo numero de elementos
    multVectoresIguales(vector1, vector2){
      let vectorResultanteMult=[];
      if(vector1.length===vector2.length){
        for (let i = 0; i < vector1.length; i++) {
          let valor=vector1[i]*vector2[i];
          vectorResultanteMult.push(valor);
          }
      }else{
          return("Los vectores no tienen el mismo numero de elementos")
      }
      return(vectorResultanteMult)
  }
} 
  var vec= new Vector
  console.log(vec.creaVector(5));
  console.log(vec.sumaVectoresIguales([1,2,3], [1,2,3]));
  console.log(vec.productoVector([1,2,3], 3));
  console.log(vec.restaVectoresIguales([1,2,3], [1,2,3]));
  console.log(vec.multVectoresIguales([1,2,3], [1,2,3]));
