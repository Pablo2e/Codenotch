/* 7. Realizar un procedimiento que reciba un array de nombres y te devuelva verdadero si y solo si todos los nombres empiezan por M.    */ 

let esta = (nombre:string[]):boolean => {
    let emes:number=0
    let total=nombre.length
    for (let i=0;i<nombre.length; i++){
        if(nombre[i].indexOf("M")===0){
            emes++
        } 
    }
    if(emes===total){
        return(true)
    }
    return(false)
}
console.log(esta(["Maria","Marcos","Miguel"]))
console.log(esta(["Maria","Marcos","Carlos"]))