function suma (operador1, operador2) {
    return (operador1 + operador2);
}
function subs(operador1,operador2) {
    return(operador1-operador2);
}
function mult(operador1,operador2) {
    return(operador1*operador2);
}
function div(operador1,operador2) {
    return(operador1/operador2);
}

module.exports = {suma, subs, mult, div}

/* resolución mia pero la otra es la mejor
module.exports = {
    suma: suma,
    subs: subs,
    mult: mult,
    div: div,
} */