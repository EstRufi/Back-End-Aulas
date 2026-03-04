const calcularMedia = function(valor1, valor2, valor3, valor4){

    let nota1 = Number(valor1).replaceAll("," , ".")
    let nota2 = Number(valor2).replaceAll("," , ".")
    let nota3 = Number(valor3).replaceAll("," , ".")
    let nota4 = Number(valor4).replaceAll("," , ".")
    
    let cal = (nota1 + nota2 + nota3 + nota4) / 4

    return Number(cal.toFixed(2))

}

const calcularExame = function(mediaAluno, exameTriste){
    let media = Number(mediaAluno)
    let exame = Number(exameTriste)

    let result = (exame + media) / 2

    return Number(result)

}

const clasificar = function (mediaAluno){
    let media = mediaAluno
    let status

    if(media >= 70)
        status = `aprovado `
    else if (media <= 49.9)
        status = "reprovado"
    else
        status = "Você irá precisar realizar uma prova"
    return status
}

const clasificarExame = function (exameTriste){
    let exame = Number(exameTriste)
    let status

    if(exame >= 60){
        status = "aprovado"
    }
    else{
        status = "reprovado"
    }
    return status
}
let m = 67
console.log(m, clasificarExame(m) )