/* RETO DE FUNCIONES: Vamos a realizar un cifrador de texto, la idea es que desarrolléis 
una función que reciba un texto o una frase y cifre cada una de sus letras en su correspondiente 
valor del código ASCII, devolviendo un texto con todos estos valores de ASCII separados por 
espacios.Como ejemplo, si yo introduzco la frase “Codenotchand Javascriptare awesome!”, 
el resultado debería ser el siguiente:*/
function cifrador(texto){
    let resultado=""
    for (let i = 0; i < texto.length; i++){
      let valor=texto[i].charAt().charCodeAt();
      resultado += valor+" " ;
    }
    return resultado;
}
console.log(cifrador("Codenotchand Javascriptare awesome!"))
/*Extra: Utiliza lo aprendido de ECMASCRIPT para construir la función y todo lo que necesites de código 
(esta parte no es necesaria, sólo para aquellos que consigan acabar pronto, 
haciendo una segunda versión de su código). */
cifrador=(texto)=>{
    let resultado=""
    for (let i = 0; i < texto.length; i++){
      let valor=texto[i].charAt().charCodeAt();
      resultado += `${valor} ` ;
    }
    return resultado;
}
console.log(cifrador("Codenotchand Javascriptare awesome!"))