

function calcularOperacoes(informar,nEntrada,n2Entrada){

    let operacao =informar
    let primeiraEntrada = Number(nEntrada)
    let segundaEntrada = Number(n2Entrada)
    let calculando 

    if(operacao == "Subtração" || operacao == "subtração" || operacao == "subtracao"){
        
        calculando = primeiraEntrada - segundaEntrada

    }
    else if (operacao == "Adição" || operacao == "adição" || operacao == "adicao"){

        calculando = primeiraEntrada + segundaEntrada

    }
    else if (operacao == "Multiplicação" || operacao == "multiplicação" || operacao == "multiplicacao"){

        calculando = primeiraEntrada * segundaEntrada

    }else if (operacao == "Divisão" || operacao == "divisão" || operacao == "divisao"){
        if(primeiraEntrada <= 0 || segundaEntrada <= 0){

            return false

        }else{

            calculando = primeiraEntrada / segundaEntrada

        }
        
    }
    else {
        return false
    }
    
    return Number(calculando.toFixed(2))
}

module.exports = {

    calcularOperacoes

}