/*
    * Objetivo: Tentar usa função
    * Autor: Estela
    * Data: 11/02/2026
    * Versão: 1.0.2.26
 */

// inport da entrada de dados
const readline = require("readline")

//criação do objeto que recebe os dados ou saidas
const entradaDeDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

const calculo = require("./modulo/cal")
const aluninho = require("./modulo/status")
const ERRO = "Acho que seus dados estão errados, faça novamente !!!"

// Entrada de dados do nome do aluno
entradaDeDados.question("Digite o nome do aluno:", function(nome){

    //recebe o nome do aluno
    let nomeAluno = nome;

    entradaDeDados.question("Digite a nota 1:", function(valor1){

        let nota1 = valor1

        entradaDeDados.question("Digite a nota 2:", function(valor2){
            
            let nota2 = valor2

            entradaDeDados.question("Digite a nota 3:", function(valor3){

                let nota3 = valor3
                
                entradaDeDados.question("Digite a nota 4:", function(valor4){

                    let nota4 = valor4
                    
                    // vendo se a validação é vazia
                    if(nomeAluno == ""){

                        console.log(ERRO)
    
                    }else{
                        
                        let media = calculo.calcularMedia(nota1, nota2, nota3, nota4)
                        let statusAluno = aluninho.status(media,nomeAluno)

                        if(media){
                            console.log(`O nosso querido(a) ${nome} teve uma média final de ${media.toFixed(2)} 😊, ${statusAluno}`)
                        entradaDeDados.close()
                        }
                        else{
                            console.log(ERRO)
                            entradaDeDados.close()
                        }

                    }

                })// fecha nota4

            })// fecha nota3

        }) // fecha nota2

    })  // fecha nota 1

}) // fecha nome do aluno
