/*
    * Objetivo: Desenvolver uma aplicação para a empresa Cálculos SA
    * Autor: Estela
    * Data: 13/02/2026
    * Versão: 1.0.2.26
 */

const readline = require("readline")

const entradaDeDados = readline.createInterface({

        input: process.stdin,
        output: process.stdout
        
})

let calcular = require("./modulo/calcular")
let validar = require("./modulo/validar")


console.log("****************BEM VINDA(O)****************")
entradaDeDados.question("Digite seu nome:", function(nome){

    let usuario = nome

    entradaDeDados.question(`${usuario}(a) me informe o primeiro número de calculo:`, function(entrada){

        let nEntrada = entrada.replaceAll(",", ".")

        entradaDeDados.question(`${usuario}(a) qual é agora o segundo numero da operação:`, function(segundaEntrada){
            let n2Entrada = segundaEntrada.replaceAll(",", ".")

            entradaDeDados.question("Agora me informe qual das seguintes operações você vai querer calcular:\n Subtração, Adição, Multiplicação e Divisão: \n", function(informar){
                let operacao = informar

                let Erro = validar.validacao(usuario,nEntrada,n2Entrada,operacao)
                if (Erro){
                    
                    let resultado = calcular.calcularOperacoes(operacao,nEntrada,n2Entrada)
                    if(resultado){
                        console.log(`O resultado será ${resultado}`)
                    }
                    else{

                        console.log ("Você escreveu errado o nome da operação que você precisa ou talvez tenha colocado 0 na divisão então refaça")
                        entradaDeDados.close()

                    }
                    
                }
                else{

                    console.log( "Alguem esqueceu de preencher algo ou tentou colocar letra onde não devia. Refaça")
                    entradaDeDados.close()
                    
                }
                
            })
        })

    })
})