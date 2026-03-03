const validacao = function(numero1, numero2, nomeUsuario){
    let peso = numero1
    let altura = String(numero2)
    let nome = nomeUsuario
    let erro
    let proibido = ["." , ","]

    if (peso == "" || altura == "" || nome == "")
        erro = "Erro: esqueceu depreencher algo"
    else if(isNaN(peso) || isNaN(altura))
        erro = "Erro: Coloque somente Números"
    else if (proibido.some(tiver => altura.includes(tiver))){
        erro = "Erro: Só aceito números, sem ponto e virgula "
    }
    else{
        erro = false
    }
    return erro 
}

module.exports = {
    validacao
}