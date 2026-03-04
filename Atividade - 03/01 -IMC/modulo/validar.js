const validacao = function(numero1, numero2, nomeUsuario){
    let peso = numero1
    let altura = numero2
    let nome = nomeUsuario
    let proibido = ["." , ","]

    if (peso == "" || altura == "" || nome == "")
        return false
    else if(isNaN(peso) || isNaN(altura))
        return false
    else if (proibido.some(tiver => altura.includes(tiver))){
        return false
    }
    else{
        return true
    }
    
}

module.exports = {
    validacao
}