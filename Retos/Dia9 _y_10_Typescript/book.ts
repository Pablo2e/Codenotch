/* RETO 4: CLASE BOOK
Crear la Clase Book con la siguiente estructura:
• Atributos Privados:
o title: string
o nPages: number
o issn: string
o author: string
o editorial: string
• Constructor para todos los atributos.
• Metodos Públicos:
o getters y setters para todos los atributos
o toString ():string
Devuelve un string con TODA la información del libro con la
siguiente estructura:
“Title – Intriducción a Javascript
Numer of Pages- 233
ISSN – 2344433-BC23333
Author – Joseph Smith
Editorial – Now Editions" */

//creo y exporto la clase Book
export class Book{
    //Declaro los atributos como privados
    private title: string
    private nPages: number
    private issn: string
    private author: string
    private editorial: string
    //Creo el constructor y le asigno a los atributos los valores pasados por parametro
    constructor(title:string, nPages: number,issn: string, author: string, editorial: string){
        this.title= title
        this.nPages= nPages
        this.issn= issn
        this.author= author
        this.editorial= editorial
    }
    //Creo el metodo toString() que devuelve un string
    public toString():string{
        return("Title - "+this.title+ "\n" +
        "Number of pages - "+this.nPages+ "\n" +
        "ISSN - "+this.issn+ "\n" +
        "Author - "+this.author+ "\n" +
        "Editorial - "+this.editorial)
    }
    //Creo los getter y setters
    public getTitle(): string {//de vuelve un string con el valor preguntado de esta clase
        return this.title
    }
    public getNpages(): number {
        return this.nPages
    }
    public getIssn(): string {
        return this.issn
    }
    public getAuthor(): string {
        return this.author
    }
    public getEditorial(): string {
        return this.editorial
    }
    public setTitle(title: string) {
    this.title = title ;
    }
    public setNpages(nPages: number) {//asigna el numero del parametro indicado al atributo indicado
        this.nPages = nPages ;
    }
    public setIssn(issn: string) {
        this.issn = issn ;
    }
    public setAuthor(author: string) {
        this.author = author ;
    }
    public setEditorial(editorial: string) {
        this.editorial = editorial ;
    }
} 
