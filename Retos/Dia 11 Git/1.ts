/*1. Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal */
//Creo la función y le paso los parametros

let tuSigno = (dia: number, mesI: string, anyo: number) => {
    let mes = mesI.toLowerCase();
    if (mes === "diciembre" && dia >= 22 || mes === "enero" && dia <= 20) {
        return ("Eres Capricornio");
    } else if (mes === "enero" && dia >= 21 || mes === "febrero" && dia <= 19) {
        return ("Eres Acuario");
    } else if (mes === "febrero" && dia >= 20 || mes === "marzo" && dia <= 20) {
        return ("Eres Piscis");
    } else if (mes === "marzo" && dia >= 21 || mes === "abril" && dia <= 20) {
        return ("Eres Aries");
    } else if (mes === "abril" && dia >= 21 || mes === "mayo" && dia <= 21) {
        return ("Eres Tauro");
    } else if (mes === "mayo" && dia >= 22 || mes === "junio" && dia <= 21) {
        return ("Eres Geminis");
    } else if (mes === "junio" && dia >= 22 || mes === "julio" && dia <= 23) {
        return ("Eres Cancer");
    } else if (mes === "julio" && dia >= 24 || mes === "agosto" && dia <= 23) {
        return ("Eres Leo");
    } else if (mes === "agosto" && dia >= 24 || mes === "septiembre" && dia <= 23) {
        return ("Eres Virgo");
    } else if (mes === "septiembre" && dia >= 24 || mes === "octubre" && dia <= 23) {
        return ("Eres Libra");
    } else if (mes === "octubre" && dia >= 24 || mes === "noviembre" && dia <= 22) {
        return ("Eres Escorpio");
    } else if (mes === "noviembre" && dia >= 23 || mes === "diciembre" && dia <= 21) {
        return ("Eres Sagitario");
    }
}
tuSigno(28, "Junio", 1969)