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

                                        if(erro == ""){
                                            let media = cal.calcularMedia(nota1,nota2,nota3,nota4)
                                            
                                            
                                            if (media >=70){
                                                let aprova = "aprovado"
                                                let formulario = forms.formular(nomeAluno,nomeProf,profS,alunoS,curso,disciplina,aprova,media,nota1,nota2,nota3,nota4)
                                                console.log(formulario)
                                                entradaDeDados.close()
                                            }
                                            else if (media >= 50){
                                                console.log(`\n tera que me informar a nota do exame ok?\n`)
                                                entradaDeDados.question("quanto você tirou no exame?",function(exame){
                                                    let aprovaExame = "aprovado"
                                                    let mediaTotal = cal.calcularExame(media,exame)
                                                    let formularioExame = forms.formularExame(nomeAluno,nomeProf,profS,alunoS,curso,disciplina,media,aprovaExame,exame,nota1,nota2,nota3,nota4)

                                                    if(mediaTotal >= 60){
                                                        console.log(formularioExame)
                                                        entradaDeDados.close()
                                                    }
                                                    else{
                                                        console.log("pode realizar novamente o semestre :D")
                                                        entradaDeDados.close()
                                                    }
                                                })
                                            }
                                            else{
                                                console.log("pode realizar novamente o semestre :D")
                                                    entradaDeDados.close()
                                            }
                                        }
                                        else{
                                            // funciona
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
