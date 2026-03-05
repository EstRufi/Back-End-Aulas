/*
    Objetivo: Manipular dados em ARRAY e JSON
    Data: 05/03/26
    Autor:Estela
    Versão: 1.0.3.26

*/

/*

    [] -> Representa um objeto do tipo Array
    {} -> Representa um objeto do tipo JSON

    Array -> É um espaço na memória para armazenar dados
        sem a necessidade de criar outros objetos
    EX:
        SEM ARRAY
            let nome = "ana"
            let nome2 = "joana"
            let nome3 = "fred"

        COM ARRAY
            Array trabalha com indices(posições)
                         0       1        2
            let nomes ["ana", "joana", "fred"]

    Json -> É um espaço na memória para armazenar dados com 
        CHAVE e VALOR.
    EX:
        SEM JSON
            let nome = "jose"
            let telefone = "123456789"
            let email = "jose@gmail"
        
            COM JSON
            OBS: SEMPRE É BOM USALO COM " ASPAS DUPLAS"
            O Json ele costuma trabalhar com ATRIBUTO
                que seria chave e valor (atributo 1 e 2)
            
                                chave   valor    chave       valor       chave      valor
                let cliente = {"nome:" "José", "telefone:" "123456789", "Email:" "jose@gmail"}
 */

// primeira forma de criar ARRAY
// já colocando conteúdo
                    
const listaDeAlunos = ["José", "Maria", "Luiz", "Antônio", "Carlos"]

//Segunda forma
//colocar conteúdo depois

const listaDeClientes = []
const listaDeFornecedores = []

const exibirDados = function(){
    //EXIBE o objeto ARRAY com o seu conteúdo
    // ele mostra se é array ou json mostrando o simbulo
    console.log(listaDeAlunos)

    // se usarmos typeof vemos o tipo dele, porem se usarmos typeof(listaDeAlunos[3]) assim ele ve qual é o tipo que está na possição 3 na tabela
    //EXIBE o tipo de dados de um indice
    console.log(typeof(listaDeAlunos[3]))

    // Exibe o objeto ARREY em formato de tabela (lembra o grid)
    console.table(listaDeAlunos)

    //Se eu quiser só printar uma só informação use
    console.log(listaDeAlunos[2])

    // forma mais difícil 
    console.log(`O nome do aluno é: ${listaDeAlunos[0]}`)
    console.log(`O nome do aluno é: ${listaDeAlunos[1]}`)
    console.log(`O nome do aluno é: ${listaDeAlunos[2]}`)
    console.log(`O nome do aluno é: ${listaDeAlunos[3]}`)
    console.log(`O nome do aluno é: ${listaDeAlunos[4]}`)

    // Usando o while mais facil
    console.log("\n exemblo com while \n")
    let cont = 0
    while (cont < listaDeAlunos.length) {
        console.log(` O nome do aluno é: ${listaDeAlunos[cont]}`)
        cont++
    }

    //  OS FOR ABAIXO SÓ FUNCIONA COM ARRAY

    // Usando o for
    console.log(`\n*********Exemblo com FOR************\n`)
    for (let contador = 0; contador < listaDeAlunos.length; contador++)
        console.log(` O nome do aluno é: ${listaDeAlunos[contador]}`)


    // Usando a forma do mercado (USANDO ARRAY)
    /*Usando FOR EACH 
      ele olha o que tem no ARREY e depois te entrega oq pediu. o forEach faz isso ate não achar mais conteudo
    */
    console.log(`\n*********Exemblo com FOR EACH************\n`)
   listaDeAlunos.forEach(function(aluno){
    console.log(` O nome do aluno é: ${aluno}`)
   })

   /*
        Usando FOR OF

        o of quer dizer DE 
   */
    console.log(`\n*********Exemblo com FOR OF************\n`)
    for (aluno of listaDeAlunos){
        console.log(`O nome do aluno é: ${aluno}`)
    }
    
    // Usando FOR IN
    // com ele vc usa para saber a posição da tabela :D
    console.log(`\n*********Exemblo com FOR IN************\n`)
    for (aluno in listaDeAlunos){
        console.log(`O nome do aluno é: ${aluno}`)
    }

    // Retorna a quantidade de itens em um array
    console.log(listaDeAlunos.length)
}

const manipularDados = function(){
    // Adicionando elementos de forma manual pelo indice
    listaDeClientes[0] = "Jose da Silva"
    listaDeClientes[1] = "Maria da Silva"
    listaDeClientes[2] = "Luiz da Silva"
    listaDeClientes[3] = "Ana da Silva"
    listaDeClientes[5] = "Matheus Lucas"

    console.table(listaDeClientes)

    listaDeFornecedores.push("Luck", "Opera", "Perninha", "Ale", "Gaucho","lice", "Cagão")
    listaDeFornecedores.push("Caio")
    listaDeFornecedores.push("Luiz")

    console.table(listaDeFornecedores)
}

//exibirDados()
manipularDados()