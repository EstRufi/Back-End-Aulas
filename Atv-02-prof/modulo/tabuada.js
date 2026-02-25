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

        //cont++
        // da para fazer assim também, essa é uma forma reduzida de cont = cont + 1
        cont +=1
    }

}

// Função para imprimir a tabuada com for
const gerarTabuadafor = function(tabuada){

    let tab = Number(tabuada)
    let resultado
    
    for(let cont = 0; cont <= 10; cont++) {
        // processando
        resultado = calculosMatematicos.multiplicar(tab, cont)
        console.log(`${tab} x ${cont} = ${resultado}\nFor\n`)
    }

}

gerarTabuadaWhile(993)
gerarTabuadafor(9453)