import { Espectador } from "./e";
import { Pelicula } from "./p";

class Cine {
    private pelicula: Pelicula
    private precio: number
    
    constructor(pelicula: Pelicula, precio: number){
        this.pelicula=pelicula;
        this.precio=precio;
        
    }
    public entrarCine(esp){
        var ocupados = new Array(
            'A1','A2','A3','A4','A5','A6','A7','A8',
            'B1','B2','B3','B4','B5','B6','B7','B8',
            'C1',/* 'C2','C3','C4','C5','C6','C7','C8',
            'D1','D2','D3','D4','D5','D6','D7','D8',
            'E1','E2','E3','E4','E5','E6','E7','E8',
            'F1','F2','F3','F4','F5','F6','F7' ,*/'F8',
            'G1','G2','G3','G4','G5','G6','G7','G8',
            'H1','H2','H3','H4','H5','H6','H7','H8',
            'I1','I2','I3','I4','I5','I6','I7','I8'
        )
        let numero = Math.floor(Math.random()*8 + 1);
        let letras = 'ABCDEFGHI';
        let letra = letras.charAt(Math.floor(Math.random() *8 + 1));
        let asiento = letra+numero.toString()
        
        let espCompleto =new Espectador(esp.nombre)
        espCompleto.setEdad(Math.floor(Math.random()*110))
        espCompleto.setDinero(Math.floor(Math.random()*30))
        
        console.log("Asiento otorgado: " +asiento)
        console.log(espCompleto)
        console.log("Edad minima para poder ver la pelicula: "+this.pelicula.edadMinima)
        console.log("Precio de la entrada: "+ this.precio)
        
        if(this.precio>=espCompleto.getDinero() || this.pelicula.edadMinima>espCompleto.getEdad()){
            console.log( "No puedes ver la pelicula")
        }else{
            console.log( "Puedes ver la pelicula")
        } 
        
        if(ocupados.includes(asiento)!=true){
            console.log(`Asiento disponible`)
        }else{
            console.log('asiento ocupado')
        }
    }
}

    
let pel1 = new Pelicula('Seven', 120, 18, 'John Doe')
let pel2 = new Pelicula('La Sirenita', 120, 0, 'Disney')
let pel3 = new Pelicula('Aventuras', 120, 13, 'Carlos Lopez')
let esp1 = new Espectador('Juan Perez')
let esp2 = new Espectador('Carlos Perez')
let esp3 = new Espectador('Pedro Perez')
let esp4 = new Espectador('Maria Perez')
let esp5 = new Espectador('Juan Perez')
let esp6 = new Espectador('Carlos Perez')
let esp7 = new Espectador('Pedro Perez')
let esp8 = new Espectador('Maria Perez')
let esp9 = new Espectador('Juan Perez')
let esp10 = new Espectador('Carlos Perez')
let esp11 = new Espectador('Pedro Perez')
let esp12 = new Espectador('Maria Perez')
let sala1 = new Cine (pel1, 15)


sala1.entrarCine(esp1)
