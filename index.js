function suma(x, y) {
    let resultado = x + y
    return resultado;
}
function resta(x, y) {
    let resultado = x - y;
    return resultado
}
function producto(x, y) {
    let resultado = x * y;
    return resultado
}
function division(x, y) {
    let resultado = x / y;
    return resultado
}

function cuadrado(x) {
    return x ** 2
}

module.exports = { suma, resta, producto, division, cuadrado }

