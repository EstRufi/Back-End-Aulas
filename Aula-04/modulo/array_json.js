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
                let cliente = {"nome": "José", "telefone": "123456789", "Email": "jose@gmail"}
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

    // Permite adicionar novos elementos no array sempre no INICIO(começo)
    // Após adicionar o elemento, ele reorganiza todos os outros itens da tabela
    listaDeFornecedores.unshift("Luciano")

    // Permite adicionar um novo elemento em uma determinada posição do ARRAY
    //                  .splice(indice,quantidadeDeElementos a ser removido,"novo conteúdo")
    listaDeFornecedores.splice(7,0,"Jão")

    console.table(listaDeFornecedores)
    // A diferença entre o unshift e push é que push é colocado no final da tabela, já no unshift ele coloca em primeiro

    //Permite remover um determinado conteudo com base no indice do elemento
    //                  .splice(indice, quantidadeDeElementos a ser removido)
    listaDeFornecedores.splice(4,1)
    console.table(listaDeFornecedores)

    // Formas de remover elementos

    //permite remover o último elemento do ARRAY
    listaDeFornecedores.pop()
    console.table(listaDeFornecedores)

    //Permite remover o primeiro elemento do ARRAY
    //Após ele remover, Irá reorganizar todos os elementos
    listaDeFornecedores.shift()
    console.table(listaDeFornecedores)
}


// isso aqui é para poder apagar o nome de uma certa pessoa

const removerAluno = function(nome){

    // indexOF() -> Retorna o indice referente ao conteúdo que está sendo pesquisado
    let indice = listaDeAlunos.indexOf(nome)
    listaDeAlunos.splice(indice,1)

    // forma de preguiçoso é assim a baixo
//      listaDeAlunos.splice(listaDeAlunos.indexOF(nome), 1)

    console.log(listaDeAlunos)
/*
    let cont = 0
    let quantidade = listaDeAlunos.length

    while(cont < quantidade){
        if(nome == listaDeAlunos[cont]){
            listaDeAlunos.splice(cont,1)
        }
        cont++
    }
 */

/*    Outra forma 

    for (cont in listaDeAlunos){
        if(nome == listaDeAlunos[cont]){
            listaDeAlunos.splice(cont,1)
            console.log(listaDeAlunos)
        }
    }
 */
    
}

const verificarItem = function(nomeAluno){

    // o includes() Verifica se o conteúdo existe dentro do ARRAY e retorna (true/false)
    return listaDeAlunos.includes(nomeAluno)
}

const manipularDadosJson = function(){

    // Não é recomendado dar espaço, letras maiuscuas, acento e etc
    //Criando um Objeto JSON
        // A estrtura do JSON é Chave (atributo) : Valor (conteúdo)
    let aluno = {"id" : 1, "nome" : "José da Silva", "ra" : 123455, "email" : "José@gmail.com"}

    // Exibe o objeto JSON
    console.log(aluno)
    console.table(aluno)

    // Exibe o conteúdo de um atributo JSON
    console.log(aluno.email)

    //Adiciona um novo atributo no JSON já existente
    aluno.telfone = "011-987663421"
    aluno.data_nascimento = "12/11/1999"

    console.log(aluno)

    // remove um atributo do JSON
    delete aluno.email
    console.log(aluno)

    //Altera o valor esrito
    aluno.ra = 123456789
    console.log(aluno)

    // deixar um valor nulo
    aluno.nota = null
    console.log(aluno)

}

const cadastroDeProdutos = function(){
    // Criando um objeto de cor para o cadastro
    let cores = [
        // Aqui usamos o ARRAY para podermos manipular o JSON
        { 'id': 1, 'cor': 'Branco', 'hexa': '#ffffff' },
        // Aqui é o JSON amarzenando os dados
        { 'id': 2, 'cor': 'Preto', 'hexa': "#000000" },
        { 'id': 3, 'cor': 'Azul', 'hexa': '#0000ff' },
        { 'id': 4, 'cor': 'Amarelo', 'hexa': '#ffff00' },
        { 'id': 5, 'cor': 'Rosa', 'hexa': '#ffb5c0' }

    ] // fecha cor

    let marcas = [
        {'id' : 1, 'marca': 'Logitech',     'telefone' : '011-98761234', 'email' : 'logitech@gmail.com'},
        {'id' : 2, 'marca': 'Redragon',     'telefone' : '067-12398745', 'email' : 'redragon@gmail.com'},
        {'id' : 3, 'marca': 'Dell',         'telefone' : '033-43526798', 'email' : 'dell@gmail.com'},
        {'id' : 4, 'marca': 'AllienWare',   'telefone' : '011-09087421', 'email' : 'allienware@gmail.com'},
        {'id' : 5, 'marca': 'KBN',          'telefone' : '011-98761234', 'email' : 'kabum@gmail.com'},
        {'id' : 6, 'marca': 'Rayzer',     'telefone' : '011-98761234', 'email' : 'rayzer@gmail.com'}
    ] // fecha marca

    let produtos = [
        {   'id' : 1,
            'nome' : 'Monitor',
            'descricao' : 'Monitor de 27 Polegadas',
            'valor' : 1500,
            'quantidade' : 20,
            // A parte de cima foi feita manualmente para guardar o produto
            'cor' : [
                //Esse monitor tem 2 cores (branco e preto) que estão
                    //amarzenadas no aray
                // Se eu não colocasse o indise iria todo o nosso aray 
                cores[0],
                cores[1]
                
            ], // fecha cor
            'marca' : [
                marcas[1].marca
            ] // fecha marca
            
        }, // fecha id 1

        {   'id' : 2,
            'nome' : 'Teclado',
            'descricao' : 'Teclado mêcanico 60% ARBG',
            'valor' : 500,
            'quantidade' : 41,
            'cor' : cores,
            'marca' : [
                marcas[3].marca,
                marcas[5].marca,
                marcas[1].marca
            ] // fecha marca
            
        }, // fecha id 2

        {   'id' : 3,
            'nome' : 'Mouse',
            'descricao' : 'Mouse 12000dpi RGB',
            'valor' : 350,
            'quantidade' : 587,
            'cor' : [
                cores[0],
                cores[1],
                cores[3]
            ], // fecha cor
            'marca' : [
                marcas[5].marca,
                marcas[4].marca,
                marcas[1].marca,
                marcas[2].marca
            ] // fecha marca
            
        }, // fecha id 3


    ] //fecha produto

    
    console.log(produtos)
    console.table(produtos)
    

    // Exibindo as cores de dentro do produto 'MONITOR//INDICE[0]'
    produtos[0].cor.forEach(function(itemCor){
        console.log(itemCor.cor)
    })
    

    // Caso você queira buscar um item em especifico que esta dentro do ARRAY[indice].nomeAtributo 
    //console.log(cores[2].cor)

    // Colocando somente as cores no terminal
    //cores.forEach(function(itemCor) {
    //    console.log(itemCor.cor)
    //})

    console.log(produtos)

    //Permite extrair os produtos
                            // o produto terá acesso á tudo, porem podemos escolher oq ele deve mostra
    produtos.forEach(function(itemProduto){
        console.log(`\nProduto: ${itemProduto.nome}`)

        // Permite extrair as mascas dentro de cada produto
        itemProduto.marca.forEach(function(itemMarca){
            console.log(`   Marca: ${itemMarca}`)
        })

        // Permite extrair as cores dentro de cada produto
        itemProduto.cor.forEach(function(itemCor){
            console.log(`       Cor: ${itemCor.cor}`)
        })
        
    })

    // Filtrando produtos pelo nome
    console.log(`\n Exemplo de como pesquisar um produto pelo nome\n`)

    // let nomeProduto = "Teclado"
    // produtos.forEach(function(itemProduto){

    //     if(String(nomeProduto).toUpperCase() == String(itemProduto.nome).toUpperCase()){
    //         console.log(itemProduto)
    //     }

    // })

    // estela fez
    // let corAchar = "Preto"
    // produtos.forEach(function(itemProduto){
    //     console.log(itemProduto.cor)
    //     if(itemProduto.cor == corAchar){

    //     }
    // })

    // Filtrando o produto pela cor
    console.log(`\n Exemplo de como pesquisar pela cor do produto\n`)

    let nomeCor = "Preto"
    produtos.forEach(function(itemProduto){
        itemProduto.cor.forEach(function(itemCor){
            if(String(nomeCor).toUpperCase() == String(itemCor.cor).toUpperCase()){
                console.log(itemProduto)
            }
        })
    })


}

//exibirDados()
//manipularDados()
//removerAluno("Maria")
//console.log(verificarItem("Maria"))
//manipularDadosJson()

cadastroDeProdutos()