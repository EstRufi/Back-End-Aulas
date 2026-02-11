/*
    * Objetivo: Criar uma aplicação que realiza calculos de Juros utilizando
            funções para modularizar o código
    * Autor: Estela
    * Data: 11/02/2026
    * Versão: 1.0.2.26
    
 */

    const readline = require("readline")

    const entradaDeDados = readline.createInterface({

        input: process.stdin,
        output: process.stdout
        
    })

    entradaDeDados.question("Digite o nome ddo Cliente:", function(nome){

        let nomeCliente = nome

        entradaDeDados.question("Digite o nome do produto:", function(produto){

            let nomeProduto = produto

            entradaDeDados.question("Digite o valor da compra:", function(valor){

                let valorCompra = valor

                entradaDeDados.question("Digite a taxa de juros:", function(taxa){

                    let taxaJuros = taxa

                    entradaDeDados.question("Digite a quantidade de parcelas:", function(parcelas){

                        let qtdParcelas = parcelas

                        let montante = calcularJurosCompostos(valorCompra,taxaJuros,qtdParcelas)

                        if(montante){

                            console.log(`O valor final é: ${montante}.`)
                            entradaDeDados.close()

                        }
                        else {

                            console.log("Amiguinho(a) você fez algo errado ai tenta novamente seu JUMENTO(A)")
                            entradaDeDados.close()

                        }
                        

                    })

                })

            }) 

        })

    })

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