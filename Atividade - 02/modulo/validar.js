function validacao (nome,entrada,sEntrada,informar){

    let nomeUsuario = nome
    let primeiraEntrada = entrada
    let segundaEntrada = sEntrada
    let operacao = informar 

    if (nomeUsuario == "" || primeiraEntrada == "" || segundaEntrada == "" || operacao == ""){
        return false
    }
    else if (isNaN(primeiraEntrada) || isNaN(segundaEntrada)){
        return false
    }
    else {
        return true
    }
}


module.exports = {
    validacao
}