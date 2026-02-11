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

                        // Importando a biblioteca de calculos financeiros
                        let calculos = require("./modulo/calculo")

                        //chama a função para calcular o valor do montante
                        let montante = calculos.calcularJurosCompostos(valorCompra,taxaJuros,qtdParcelas)

                        //Validação para verificar se o calculo foi realizado
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