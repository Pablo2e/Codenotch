/* RETO 3:Crea una función que tenga de parámetro de entrada un array y devuelva la suma 
de los elementos del array en una variable suma. La declaración de las variables debe 
hacerse usando solo EMASCRIPT, así como la creación de la función. Además, la función
debe devolver “No has introducido un array como parámetro de entrada”, si elparámetro 
de entrada no es un array.Finalmente si la función no tiene parámetros de entrada debe 
devolver 0 como resultado. */
sumaArray = (array) =>{
    let suma = 0;
    if(array===undefined){
        suma = 0;
    }
    let x = Array.isArray(array)
    if(x===true){
        for (let i = 0; i < array.length; i++) {
            suma += array[i];
          }
        }else{
            suma="No has introducido un array como parámetro de entrada";
        }
    return suma;
}
console.log(sumaArray([1,2,3]));
console.log(sumaArray("Hola"));
console.log(sumaArray(5));
console.log(sumaArray());