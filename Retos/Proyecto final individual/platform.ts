/* •	Crear una clase denominada Platform con los siguientes atributos privados:
•	name
•	releaseYear
•	company. 
•	nBits.
•	generation.
•	hasHD
•	hdSize
•	hasInternetConnetion
•	storageDevice. Puede ser (cartucho, tarjeta, cd, dvd o bluray) 
•	color. */
export enum Almacenamiento {cartucho = "Cartucho", tarjeta = "Tarjeta", cd = "CD", dvd = "DVD", blueray = "Blueray"}


export class Platform{
private name:string
private releaseYear:number
private company:string 
private nBits:number
private generation:number
private hasHD:boolean
private hdSize:string
private hasInternetConnetion:boolean
private storageDevice:Almacenamiento 
private color:string
//creo el constructor
    constructor(name:string, releaseYear:number,company:string, nBits:number, generation:number, hasHD:boolean ,hdSize:string, hasInternetConnetion:boolean, storageDevice:Almacenamiento, color:string){
        this.name=name
        this.releaseYear=releaseYear
        this.company=company
        this.nBits=nBits
        this.generation=generation
        this.hasHD=hasHD
        this.hdSize=hdSize
        this.hasInternetConnetion=hasInternetConnetion
        this.storageDevice=storageDevice
        this.color=color
    }
    //getters y setters
    public setName(newName){
        this.name= newName;
    } 
    public setReleaseYear(newReleaseYear){
        this.releaseYear= newReleaseYear;
    }
    public setCompany(newCompany){
        this.company= newCompany;
    }
    public setNBits(newNBits){
        this.nBits= newNBits;
    }
    public setGeneration(newGeneration){
        this.generation= newGeneration;
    }
    public setHasHD(newHasHD){
        this.hasHD= newHasHD;
    }
    public setHdsize(newHdsize){
        this.hdSize= newHdsize;
    }
    public setHasInternetConnetion(newHasInternetConnetion){
        this.hasInternetConnetion= newHasInternetConnetion;
    }
    public setStorageDevice(newStorageDevice){
        this.storageDevice= newStorageDevice;
    }
    public setColor(newColor){
        this.color= newColor;
    }
    public getName():string{
        return this.name
    }
    public getReleaseYear():number{
        return this.releaseYear
    }
    public getCompany():string{
        return this.company
    }
    public getNBits():number{
        return this.nBits
    }
    public getGeneration():number{
        return this.generation
    }
    public getHasHD():boolean{
        return this.hasHD
    }
    public getHdsize():string{
        return this.hdSize
    }
    public getHasInternetConnetion():boolean{
        return this.hasInternetConnetion
    }
    public getStorageDevice():Almacenamiento{
        return this.storageDevice
    }
    public getColor():string{
        return this.color
    }
    //•	Crear un método que te devuelva verdadero si la persona pasada como parámetro es igual a la persona.
    public mismaPlataforma(persona){
        if(persona.name===this.name && persona.releaseYear===this.releaseYear && persona.company===this.company && persona.nBits===this.nBits && persona.generation===this.generation && 
           persona.hasHD===this.hasHD && persona.hdSize===this.hdSize && persona.hasInternetConnetion===this.hasInternetConnetion && persona.storageDevice===this.storageDevice && persona.color===this.color){
        return true
        }else{
            return false
        }
    }
    //crear un método que devuelva el valor de todos estos atributos.
    public mostrarValores(){
        console.log(this.name+"\n"+this.releaseYear+"\n"+this.company+"\n"+this.nBits+"\n"+this.generation+"\n"+this.hasHD+"\n"+this.hdSize+"\n"+this.hasInternetConnetion+"\n"+this.storageDevice+"\n"+this.color)
    }
    //crear un método que devuelva en un string el valor de todos estos atributos.
    public mostrarValoresString(){
        return `Nombre: ${this.name} \nAño de lanzamiento: ${this.releaseYear} \nCompañia: ${this.company} \nNbits: ${this.nBits} \nGeneración: ${this.generation} \n¿Tiene Alta definición?: ${this.hasHD} \nTamaño HD: ${this.hdSize} \n¿Tiene conexión a internet?: ${this.hasInternetConnetion} \nTipo de almacenamiento: ${this.storageDevice} \nColor: ${this.color}`
    }
}
