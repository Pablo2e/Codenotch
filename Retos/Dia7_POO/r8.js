class Agenda{
    constructor(personas){
        this.personas=personas;
    }  
    printPersonas(){
        for (let i = 0; i < this.personas.length; i++) {
            this.personas[i].mostrarTodos();
        }      
    }
}
//module.exports = {suma, subs, mult, div}

class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
 
    display() {
        console.log(this.firstName + " " + this.lastName);
    }
 }
 module.exports= Agenda;