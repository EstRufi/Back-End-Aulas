function calcularMedia (valor1, valor2, valor3, valor4){

    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let nota3 = Number(valor3)
    let nota4 = Number(valor4)

    if(nota1 == "" || nota2 == "" || nota3 == "" || nota4 == ""
        || nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 
        || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100
        || isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)
    ){
        return false
    }
    else{

        let calMedia = (nota1 + nota2 + nota3 + nota4)/4

        return Number(calMedia.toFixed(2))
    }

}

module.exports = {
    calcularMedia
}