const calcular = function(kg, metros){
    let peso = Number(kg)
    let altura = Number(metros)
    let nAltura = altura / 100.0
    let resultado
    
    resultado = peso / (nAltura * nAltura)
    
    return resultado.toFixed(2)
}


const classificar = function status(calculo){
    let categoria = calculo
    let status

    if (categoria <= 18.5)
        status = "Você está abaixo do peso"
    else if (categoria >= 18.6 || categoria <= 24.9)
        status = "Parabeis você está no peso ideal"
    else if (categoria >= 25 || categoria <= 29.9 )
        status = "Você está acima do peso"
    else if (categoria >= 30 || categoria <= 34.9)
        status = "Você está com Obsidade I"
    else if (categoria >= 35 || categoria <= 39.9)
        status = "Você está com Obsidade II"
    else {
        status = "Você está com Obsidade III"
    }
    return status
}

//let imc = 24.97
//console.log(`seu img é ${imc} ${classificar(imc)}`)

module.exports = {
    calcular,
    classificar
}