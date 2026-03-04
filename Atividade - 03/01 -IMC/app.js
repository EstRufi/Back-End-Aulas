/*
    Objetivo: Calcular IMC para empresa Cálculos SA
    Data: 25/02/26
    Autor:Estela
    Versão: 1.0.2.26
    
*/

// QUANDO TERMINAR TENTAR NÃO USAR O IF
// tenta tirar interação

const readline = require("readline")

const entradaDeDados = readline.createInterface({

        input: process.stdin,
        output: process.stdout
        
})

const cal = require("./modulo/calcular")
const valida = require("./modulo/validar")

entradaDeDados.question("Qual o seu nome?", function(nome){
    let nomeUsuario = nome

    entradaDeDados.question("Qual é seu peso?", function(peso1){
        let peso = peso1

        entradaDeDados.question("Qual a sua altura?", function(alturinha){
            let altura = alturinha
            let erro = valida.validacao(peso,altura,nomeUsuario)

            if(erro){
                let result = cal.calcular(peso,altura)
                if(result){
                    let status = cal.classificar(result)
                    if(status){
                        console.log(`O seu resultado é ${result}`)
                        console.log(status)
                    }
                }
                else{
                    console.log("ERRO: NÃO FOI POSSIVEL CALCULAR")
                    entradaDeDados.close()
                }
            }
            else{
                console.log("ERRO: NÃO FOI POSSIVEL VALIDAR")
                entradaDeDados.close()
            }
        })
    })
})