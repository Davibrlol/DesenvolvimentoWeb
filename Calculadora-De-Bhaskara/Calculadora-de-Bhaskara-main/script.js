function calcularDelta(a, b, c){
    return (b**2) - (4*(a*c))
}
function CalcularBhaskara(a, b ,c){
    const valorDelta = calcularDelta(a, b, c)
    if (valorDelta < 0)
        return ({ x1: "Inexistente" , x2: "Inexistente" })
    else {
        const valor_x1 = (-b + Math.sqrt(valorDelta)) / (2 * a)
        const valor_x2 = (-b - Math.sqrt(valorDelta)) / (2 * a)
        return ({x1: valor_x1, x2: valor_x2})
    } 
}

function handleBtnCalcular() {
    const vA = document.getElementById('ValorA').value
    const vB = document.getElementById('ValorB').value
    const vC = document.getElementById('ValorC').value
    const raizes = CalcularBhaskara(vA, vB, vC)
    document.getElementById('resultadox1').value = raizes.x1
    document.getElementById('resultadox2').value = raizes.x2
}
document.getElementById('btnCalcular').addEventListener("click", handleBtnCalcular)