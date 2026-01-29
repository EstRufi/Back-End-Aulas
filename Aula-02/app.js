/*
    * Objetivo: Projeto para realizar o calculo de médias escolares
    * Autor: Estela
    * Data: 29/01/2026
    * Versão: 1.0.1.26
 */

/*

    Tipo de criação de variáveis

    var -> permite criar um espaço em mem[oria do tipo variável.
            Essa forma de criação hoje é consderada mais antiga,
            é provavel que seja encontrada apenas em projetos
            mais antigos
        DICA: Caso você precise utilizar o var, recomenda-se
            que seja uilizada em escopo global.
            (significa no inicio de tudo disponivel para todos "public")
            (escopo local seria dentro de um bloco "privete")

    let -> Permite criar um espaço na memória do computador do tipo variável.
            Essa forma de criação é realizada somente no escopo local,
            ou seja dentro de um bloco de programação { aqui que irá colocar}.
            Esse tipo de variável deixa de existir ao término do bloco.

    cont -> Permite criar um espaço em memória do tipo constante,
            ou seja, esse conteúdo não poderá sofrer mudanças durante
            o projeto. 
            !não deve muda a cont então não mude!
                Observação: a const pode ser criada sem nenhum
            problema no escopo global ou local, só veja se vale a pena.
                Dica: Sempre que puder você pode criar essa const
            escrita em MAIUSCULO para facilitar a sua utilização.

*/

/*

    OPERADORES DE COMPARAÇÃO

    == -> Permite a comparação de dois conteúdos

    != -> Permite comparar a diferença de dois conteúdos

    < -> Permite validar o valor menor

    > -> Permite validar o valor maior

    <= -> Permite validar se o valor é menor ou igual

    >= -> Permite validar se o valor é maior ou igual

    === -> Permite comparar a igualdade dos conteudos e a 
        igualdade da tipagem dos dados

    !== -> Permite comparar a diferença de conteúdos e a 
        igualdade de tipagem

    ==! -> Permite comparar a igualdade de conteúdos e a
        diferença de tipagem de dados
*/

/*
    Tipos de operadores lógicos

        E -> AND -> &&
        OU -> OR -> ||
        NÃO -> NOT -> !

*/

// inport da entrada de dados
const readline = require("readline")

//criação do objeto que recebe os dados ou saidas
const entradaDeDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

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
                    if(nomeAluno == "" || nota1 == "" || nota2 == "" || nota3 == "" || nota4 == ""){

                        console.log("Acho que esqueceu de responder algo, faça novamente !!!")
                    
                    // validação de entrada de numeros apenas entre 0 até 100
                    }else if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100) {

                        console.log("As notas que devem ser colocadas de 0 até 100, veja novamente")

                    //Validação de entrada somente de números
                    // isNaN() -> permite a validação de números ou letras
                    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){

                        console.log("Olha eu só irei aceitar números, não irei aceitar letras. Faça novamente")

                    }else{
                        console.log("Espera que já irei calcular")
                        
                    }

                })// fecha nota4

            })// fecha nota3

        }) // fecha nota2

    })  // fecha nota 1

}) // fecha nome do aluno
