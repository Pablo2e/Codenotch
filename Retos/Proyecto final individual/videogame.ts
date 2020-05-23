import { Person } from "./person"
import { Platform} from "./platform"
import { Profession } from "./person"
import { Almacenamiento } from "./platform"


/* •	Crear una clase que se llame Videogame con los siguientes atributos privados
•	title
•	releaseYear
•	developers: array of Person
•	nacionality
•	director: Person
•	languages: array of string
•	plataforms: array of platform 
•	price
•	score: (0-10) */
export enum Score {cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez}

export class Videogame{
private title:string
private releaseYear:number
private developers:Person[] 
private nacionality:string
private director:Person
private languages:string[] 
private platforms:Platform[] 
private price:number
private score:number 
    constructor(title:string, releaseYear:number, developers:Person[], nacionality:string, director:Person, languages:string[], platforms:Platform[], price:number, score:number ){
        this.title=title
        this.releaseYear=releaseYear
        this.developers=developers
        this.nacionality=nacionality
        this.director=director
        this.languages=languages 
        this.platforms=platforms
        this.price=price
        this.score=score 
    }
    //Getters y setters
    public getTitle():string{
        return this.title
    }
    public getReleaseYear():number{
        return this.releaseYear
    }
    public getDevelopers():Person[]{
        return this.developers
    }
    public getNationality():string{
        return this.nacionality
    }
    public getDirector():Person{
        return this.director
    }
    public getLanguages():string[]{
        return this.languages
    }
    public getPlatforms():Platform[]{
        return this.platforms
    }
    public getPrice():number{
        return this.price
    }
    public getScore():number{
        return this.score
    }
    public setTitle(newTitle){
        this.title= newTitle;
    }
    public setReleaseYear(newReleaseYear){
        this.releaseYear= newReleaseYear;
    }
    public setDevelopers(newDevelopers){
        this.developers= newDevelopers;
    }
    public setNationality(newNationality){
        this.nacionality= newNationality;
    }
    public setDirector(newDirector){
        this.director= newDirector;
    }
    public setLanguages(newLanguages){
        this.languages= newLanguages;
    }
    public setPlatforms(newPlatforms){
        this.platforms= newPlatforms;
    }
    public setPrice(newPrice){
        this.price= newPrice;
    }
    public setScore(newScore){
        this.score= newScore;
    }
    //Crear un método que te devuelva si el videojuego ha salido para una platafoma determinada. 
    public esPara(plataforma:string){
        let salida:string=""
        for (let i in this.platforms){
            if (this.platforms[i].getName()==plataforma){
                salida= `Este juego se puede jugar en ${plataforma}`
            }else{
                salida= `Este juego no se puede jugar en ${plataforma}`
            }
        return salida
        }
    }
    //Crea un método que te devuelva si un desarrollador ha desarrollado el videojuego.
    public esDesarrollador(nombre:string){
        let salida:string=""
        for (let i in this.developers){
            if (this.developers[i].getName()==nombre){
                salida= `${nombre} ha desarrollado ${this.title}` 
            }else{
                salida= `${nombre} no ha participado en el desarrollo de ${this.title}`
            }
        return salida
        }
    }
    //Crear un método que te devuelva si el videojuego ha sido desarrollado en un idioma determinado.
    public esEnIdioma(idioma:string){
        let salida:string=""
        for (let i in this.languages){
            if (this.languages[i]==idioma){
                salida= `Este juego ha sido desarrollado en ${idioma}`
            }else{
                salida= `Este juego no ha sido desarrollado en ${idioma}`
            }
        return salida
        }
    }
    //Crear un método que muestre todos los datos de los videojuegos
    public datos(){
        let desarrolladores:string=""
        for (let i in this.developers){
            desarrolladores += this.developers[i].devolverValoresString()
        }
        let idiomas:string=""
        for (let i in this.languages){
            idiomas += this.languages[i]+", "
        }
        let plataformas:string=""
        for (let i in this.platforms){
            plataformas += this.platforms[i].mostrarValoresString()+", "
        }
        return `${this.title} \n${this.releaseYear} \n${desarrolladores} \n${this.nacionality} \n${this.director.devolverValoresString()} \n${idiomas} \n${plataformas} \n${this.price} \n${this.score} \n `
    }
    //Crear un método que devuelva en un string el valor de todos estos atributos.
    public devolverValoresString() {
        let desarrolladores:string=""
        for (let i in this.developers){
            desarrolladores += this.developers[i].devolverValoresString()+"\n"
        }
        let idiomas:string=""
        for (let i in this.languages){
            idiomas += this.languages[i]+", "
        }
        let plataformas:string=""
        for (let i in this.platforms){
            plataformas += this.platforms[i].mostrarValoresString()+", "
        }
        return `Nombre del juego: ${this.title}\nAño de lanzamiento: ${this.releaseYear}\nDesarrolladores: ${desarrolladores}\Nacionalidad: ${this.nacionality}\nDirector: ${this.director.devolverValoresString()}\nIdiomas: ${idiomas}\nPlataformas: ${plataformas}\nPrecio: ${this.price}\nPuntuación: ${this.score}`
    
    }
}

