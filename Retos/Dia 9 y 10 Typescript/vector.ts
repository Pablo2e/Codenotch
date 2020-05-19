/* RETO 8: CLASE VECTOR
Crear la Clase Vector con la siguiente estructura:
• Atributos Privados:
o elements: array of numbers
• Constructor
o Parámetro:
o n:number. Longitud del vector
o k:number. Maximo valor de los elementos del vector
o Este constructor tiene que crear el atributo elements formado
por n números aleatorios entre 0 y k.
• Metodos Públicos:
o print()
Imprime por consola el vector
o add(v1:Vector):Vector
Realiza la suma de elements con v1
o subs(v1:Vector):Vector
Realiza la resta de elements con v1
o mult(v1:Vector):Vector
Realiza el producto de elements y v1
o multNumber(n:number):Vector
Realiza el producto entre elements y el número n */

//creo y exporto la clase Vector
export class Vector{
    //Declaro el atributo privado elements como un array de numeros
    private elements: number[];
    //Creo el constructor con 2 parametros, los cuales me crearan el valor del atributo elements con numeros aleatorios entre 0 y k     
    constructor(n:number, k:number){
        this.elements=new Array;
        for (let i = 0; i < n; i++) {
            let valor= Math.floor(Math.random()*k);
            this.elements.push(valor)
        }
    }
    //Declaro los metodos
    public print() {
        console.table(this.elements)
    }
    public add(vector2:Vector):Vector {//Devuelve un objeto de la clase Vector
        //creo un objeto de la clase Vector con sus parametros en 0 porque está vacio
        let resultadoSuma:Vector= new Vector(0,0) 
        for (let i in this.elements) { //Recorro mi array elements
            let valor=this.elements[i]+vector2.elements[i];//sumo [i] de mi elements con [i] del parametro
            resultadoSuma.elements.push(valor);//agrego el valor a [i] del nuevo Vector a mostrar
        }
        return(resultadoSuma);
    }
    public subs(vector2:Vector):Vector  {
        let resultadoSubs:Vector= new Vector(0,0)
        for (let i in this.elements)  {
            let valor=this.elements[i]-vector2.elements[i];
            resultadoSubs.elements.push(valor);
        }
        return(resultadoSubs);
    }
    public mult(vector2:Vector):Vector  {
        let resultadoMult:Vector= new Vector(0,0)
        for (let i in this.elements) { 
            let valor=this.elements[i]*vector2.elements[i];
            resultadoMult.elements.push(valor);
        }
        return(resultadoMult);
    }
    public multNumberM(n:number):Vector  {
        let resultadoMultM:Vector= new Vector(0,0)
        for (let i in this.elements) { 
            let valor=this.elements[i]*n;
            resultadoMultM.elements.push(valor);
        }
        return(resultadoMultM);
    } 
    //Creo el metodo MultSpecial para ser usado luego desde la clase Matrix
    public multSpecial(n:number):Vector  {
        let resultadoMultM:Vector= new Vector(0,0)
        for (let i in this.elements) { 
            if(this.elements[i]%2===0){//comparo si [i] es par usando modulo
                let valor=this.elements[i]*n;
                resultadoMultM.elements.push(valor);
            }else{
                let valor=this.elements[i]*(n-1);
                resultadoMultM.elements.push(valor); 
            }
        }
        return(resultadoMultM);
    }  
}


