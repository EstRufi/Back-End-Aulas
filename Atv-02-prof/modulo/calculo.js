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
    
    let resultado

    if(operadorMatematico == "SOMAR"){
        resultado = valor1 + valor2
    }
    else if (operadorMatematico == "SUBTRAIR"){
        resultado = valor1 - valor2
    }
    else if (operadorMatematico == "MULTIPLICAR"){
        resultado = valor1 * valor2
    }
    else if (operadorMatematico == "DIVIDIR"){
        resultado = valor1 / valor2
    }
    else {
        return false
    }

    return resultado

}

//chamando a função para poder tester
let x = calcular(20,10,"somar")
console.log (x)
