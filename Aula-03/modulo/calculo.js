/*
    * Objetivo: Arquivo responsavel pela funções de calculos financeiros
    * Autor: Estela
    * Data: 11/02/2026
    * Versão: 1.0.2.26
    
*/


// Função para retorna o percentual de um número
function calcularPercentual (numero){

    //recebe o número encaminhado
    let numeroPercentual = Number(numero)

    // validação
    if(numero == "" || numero <= 0 || isNaN(numero)){
        
        return false

    }
    else{

         // Calcular o percentual do número
        let percentual = numeroPercentual / 100

        // Esse Number é para voltar um número
        return Number(percentual.toFixed(2))

    }

}

// Função para retornar o montante referente a juros composto
function calcularJurosCompostos(valor, taxa, parcelas){

    // Recebe os valores dos argumentos e converte em números
    let valorPrincipal = Number(valor)

    let taxaJuros = Number(taxa)

    let qtdParcelas = Number(parcelas)

    if (valor == "" || isNaN (valor) || valor <= 0 || parcelas == "" || isNaN(parcelas) || parcelas <= 0){

        return false

    }else{

        //Chama a função para retornar o percentual
        let percentual = calcularPercentual(taxaJuros)

        if(percentual){

            //calculo
            let montante = valorPrincipal * ((1 + percentual) ** qtdParcelas)

            return Number(montante.toFixed(2))
        }
        else{
            return false
        }

    }
}

// Tornando as funções publicas assim outros arquivos possam ver
// Podemos colocar aqui todos as funções que usamos e determinar quais são importantes puxa

module.exports = {

    calcularJurosCompostos,
    calcularPercentual

}