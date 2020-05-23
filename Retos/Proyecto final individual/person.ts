/* •	Crear una clase denominada Person con los siguientes atributos privados:
•	name
•	nationality
•	profession. Puede ser developer, tester, manager o director
•	experienceYears. Años de experiencia  */

export enum Profession {developer = "Developer", tester= "Tester", manager= "Manager", director= "Director"}

export class Person{
    private name:string
    private nationality:string
    private profession:Profession
    private experienceYears:number
    //	Esta clase debe tener un constructor que incluirá en sus parámetros todos estos atributos.
    constructor(name:string, nationality:string, profession:Profession, experienceYears:number ){
        this.name=name
        this.nationality=nationality
        this.profession=profession
        this.experienceYears=experienceYears
    }
    // Metodos setters y getters de los atributos privados.
    public setName(newName){
        this.name= newName;
    } 
    public setNationality(newNationality){
        this.nationality= newNationality;
    }
    public setProfesion(newProfesion){
        this.profession= newProfesion;
    }
    public setExperienceYears(newExperienceYears){
        this.experienceYears= newExperienceYears;
    }
    public getName():string{
        return this.name
    }
    public getNationality():string{
        return this.nationality
    }
    public getProfession():Profession{
        return this.profession
    }
    public getExperienceYears():number{
        return this.experienceYears
    }
    //•	Crear un método que te devuelva verdadero si la persona pasada como parámetro es igual a la persona.
    public mismaPersona(persona){
        if(persona.name===this.name && persona.nationality===this.nationality && persona.profession===this.profession 
            && persona.experienceYears===this.experienceYears){
        return true
        }else{
            return false
        }
    }
    //crear un método que devuelva el valor de todos estos atributos.
    public mostrarValores(){
        console.log(this.name+"\n"+this.nationality+"\n"+this.profession+"\n"+this.experienceYears)
    }
    //crear un método que devuelva en un string el valor de todos estos atributos.
    public devolverValoresString(){
        return`Nombre: ${this.name} \nNacionalidad: ${this.nationality} \nProfesión: ${this.profession} \nAños de experiencia: ${this.experienceYears}`
    }
}

   

