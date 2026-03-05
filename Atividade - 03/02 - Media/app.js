/*
    Objetivo: Sistema de médias escolares de uma universidade
    Data: 05/03/26
    Autor:Estela
    Versão: 1.0.3.26

*/

const readline = require("readline")

const entradaDeDados = readline.createInterface({

        input: process.stdin,
        output: process.stdout
        
})

const cal = require("./modulo/calcular")
const valida = require("./modulo/validar")
const forms = require("./modulo/formulario")

entradaDeDados.question("Qual o nome do aluno(a)?", function(nomeAluno){
    entradaDeDados.question("Qual é o gênero do aluno?", function(alunoS){
        entradaDeDados.question("Qual o nome do professor?", function(nomeProf){
            entradaDeDados.question("Qual é o gênero do professor?", function(profS){
                entradaDeDados.question("Qual é o nome do curso?", function(curso){
                    entradaDeDados.question("Qual o nome da disciplina?", function(disciplina){
                        entradaDeDados.question(`Agora vamos lá, quanto ${nomeAluno} tirou na primeira prova?`,function(nota1){
                            entradaDeDados.question(`Quanto ${nomeAluno} tirou na segunda prova?`, function(nota2){
                                entradaDeDados.question(`Quanto ${nomeAluno} tirou na terceira prova?`, function(nota3){
                                    entradaDeDados.question(`Quanto ${nomeAluno} tirou na ultima prova?`, function(nota4){
                                        let erro = valida.validar(nomeAluno,nomeProf,profS,alunoS,curso,disciplina,nota1,nota2,nota3,nota4)
                                        //let calcula = cal.calcularMedia(nota1,nota2,nota3,nota4)

                                        if(erro == false){
                                            console.log(" vamo calcula")
                                        }
                                        else{
                                            console.log(erro)
                                            entradaDeDados.close()
                                        }

                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
