/*
    * Objetivo: Desafio 1 - Calculo de juros composto para a empresa Viva Moda
    * Autor: Estela
    * Data: 04/02/2026
    * Versão: 1.0.1.26
    
 */

const readline = require("readline")

const entradaDeDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})
console.log("**********************************")
console.log("Bem vindo(a) a Viva Moda")
console.log("**********************************")
entradaDeDados.question("Por favor digite o nome do comprador:", function(nome){

    let nomeCliente = nome

    entradaDeDados.question(`Obrigado(a) ${nomeCliente}, agora me diga qual o nome do produto:`, function(nomeProduto){

        let produto = nomeProduto

        entradaDeDados.question(`${nomeCliente}, quanto pagou pelo(a) ${produto}:`, function(precoProduto){

            let valor = precoProduto
    
            entradaDeDados.question(`Senhor(a) ${nomeCliente}, me fale quanto foi a taxa de juros cobrado pelo produto ${produto}:`, function(taxaPorcentagem){

                let taxinha = taxaPorcentagem
                let taxa = taxinha/100
        
                entradaDeDados.question(`Para finalizarmos o calculo, senhor(a) ${nomeCliente}, você irá parcelar em quantas vezes?:`, function(Parcela){
    
                    let tempo = Parcela
                    let verificando

                    // validação
                    if (nomeCliente == "" || produto == "" || valor == "" || taxa == "" || tempo == ""){

                        verificando = "Você esqueceu de responder algo, olhe novamente"
                        console.log(verificando)
                    }
                    else if(isNaN(valor) || isNaN(taxa) || isNaN(tempo)){
                        
                        verificando = "Eu só consigo ler números, não coloque uma letra. Faça novamente!!"
                        console.log(verificando)
                    }
                    else {

                        let calculoTaxa = ((1+ Number(taxa)) ** Number(tempo))
                        let montante = (Number(valor) * Number(calculoTaxa))
                        let valorTaxa = Number(montante) - Number(valor)
                        
                        console.log(verificando)
                        console.log(`
                            ******************* Viva Moda *******************\n
                            Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.
                            A compra do produto ${produto}, tem um valor de: ${valor}.
                            A sua compra será parcelada em ${tempo} vezes e o Sr(a) pagará: ${montante.toFixed(2)}.
                            O acréscimo realizado ao valor de: ${valor} será de ${valorTaxa.toFixed(2)}.\n
                            ******************* Viva Moda *******************`)
        
                    }

                   

                })

            })

        })
       
    })
    
})
