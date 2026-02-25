/*
    Objetivo: Arquivo responsavel por gerar uma tabuada utilizando while e o for
    Data: 20/02/26
    Autor:Estela
    Versão: 1.0.2.26
    
*/

// import da biblioteca de operações matemáticas
const calculosMatematicos = require("./calculo")

// Função para imprimir a tabuada
const gerarTabuadaWhile = function(tabuada){

    let tab = Number(tabuada)
    let cont = 0
    let resultado
    
    while (cont <= 10) {

    // processando
        resultado = calculosMatematicos.multiplicar(tab, cont)
        console.log(`${tab} x ${cont} = ${resultado}`)

        cont++
    }

}

gerarTabuadaWhile(993)