/* RETO 3: CLASE CALENDAR
Crear un fichero denominado calendar.ts
Importar la clase Person
Crear la clase calendar con la siguiente estructura:
• Atributos Público:
o people: array de objetos de la clase Person.
• Constructor sin parámetros que inicialice el array people.
• Métodos Públicos:
o printCalendar()
Imprime por consola los datos de todas las personas de la
agenda.
Probar la clase calendar en un fichero denominado calendarTest.ts */

//importo la clase Person del archivo person
import {Person} from "./person" 
//exporto y creo la clase Calendar
export class Calendar{ 
  //declaro que el atributo people es publico y un array de objetos Person pero sin haberle dado un valor
  public people:Person[]; 
  //Declaro el metodo constructor sin parametros
  constructor(){
    // inicializo people como un objeto de la clase array
    this.people=new Array(); 
  }
  //Declaro los Metodos
  public printCalendar(){
    let allPeople="" //declaro la variable allPeole como un string vacio
    for (let i in this.people) { //recorro el atributo people
      // llamo al metodo mostrarDatos de la clase Person para que agregue al string vacio los datos
      allPeople += this.people[i].mostrarDatos(); 
    } // retorno el valor
      return(allPeople);
    }
  //Seters agregados para que funcione calendarTest
  public setPersona(persona: Person){//la salida del parametro es un objeto de la clase persona
    this.people.push(persona);//agrega un objeto persona al array de personas people
  }
  public setPersonas(personas: Person[]){//la salida del parametro es un array de objetos de la clasepersonas 
    for (let i in personas) { //recorre el array pasado por parametro
      this.people.push(personas[i]); //agrega un array de personas al array de personas people  
    }
  }
}

