function status (media, nome){
    let statusAluno = ""

    if(media >= "70") {
        statusAluno = `Parabéns ${nome} você foi APROVADO`
    }

    else if(media >= "50.0" || media >= "69.99"){
        statusAluno = `Bom ${nome} você vai ficar de recuperação`
    }
    
    else{
        statusAluno = `Parabéns ${nome} você foi REPROVADO SE LASCOU`
    }

    return statusAluno
}

module.exports = {
    
    status

}