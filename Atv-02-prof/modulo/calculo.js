/*
    Objetivo: Arquivo responsável pelo processamento de calculos matemáticos 
        (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
    Data: 20/02/26
    Autor:Marcel
    Versão: 1.0.2.26
    
*/

/*
    comandos novos

        toLowerCase() -> Retorna uma String em minusculo
        toUpperCase() -> Retorna uma String em maiusculo 

*/
// FUNÇÃO ANONIMA  
// É quando a função não tem nome, pq o nome está na const que é calcular

// Função para calcular as 4 operações matemáticas
const calcular = function(numero1,numero2, operador){

    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operadorMatematico = String(operador).toUpperCase()
    
    let resultado = false

    switch (operadorMatematico) {
        case "SOMAR":
            resultado = somar(valor1,valor2)
            break;
    
        case "SUBTRAIR":
            resultado = subtrair(valor1,valor2)
            break;
        
        case "MULTIPLICAR":
            resultado = multiplicar(valor1,valor2)
            break;

        case "DIVIDIR":
            resultado = dividir(valor1,valor2)
            break;
    }
    return resultado

}

// Função baseada em formato de seta (ARROW FUNCTION)
const somar = (numero1, numero2) =>{
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)

    let resultado = valor1 + valor2

    return resultado
}

// uma forma melhor é fazendo assim
// só funciona se a função seja simples

const subtrair = (numero1, numero2) => Number(numero1) - Number(numero2)
const multiplicar = (numero1, numero2) => Number(numero1) * Number(numero2)
const dividir = (numero1, numero2) => Number(numero1) / Number(numero2)

module.exports = {
    calcular,
    multiplicar
}