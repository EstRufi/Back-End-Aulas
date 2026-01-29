//Comentário em Linha
/*
    Comentário 
        em 
    bloco
*/


// Permite exibir um conteúdo no terminal
console.log('Começando com o NODE');

// o console.log é como se fosse o printl do java
//dentro dele pode se usar tanto '' ou ""
// Classe no js é letra maiuscula


//cria uma variavel
var nome = "Estela"

console.log(nome)
//Concatenação de dados (texto e variavel)
console.log("O nome do usuário é: " + nome)

//outra forma de fazer
console.log(`O nome do usuário é: ${nome}`)

//Import da biblioteca do readline
//readline --> serve para permitir a entrada de dados via terminal
// é como se fosse o Scaner
var readline = require("readline")

//Cria um objeto especialista em entrada de dados pelo terminal
var entradaDeDados = readline.createInterface({

    //entrada
    input: process.stdin,
    //saida
    output: process.stdout

})

// calback é um metodo que chama a sua propria função em um determinado conteudo para depois enviar a resposta

// Permite a entrada de dados do nome do usuário

//question --> utiliza uma função de CALLBACK para devolver o valor digitado

//CALLBACK --> É uma função particular de um método, que é chamada para
//encaminhar um conteúdo para o desenvolvedor, esse conteúdo vem atravez
// da variável

//                                                      se tiver varios tem que colocar o nome da função
entradaDeDados.question("Digite para mim seu nome: ", function(nomeUsuario){

    // aqui é para ele retorna para mim no terminal
    console.log("O nome digitado foi: " + nomeUsuario)

    entradaDeDados.question("Digite seu email:", function(emaiUsuario){

        console.log(`O email do usuário ${nomeUsuario} é ${emaiUsuario}`)

    })

})

/*
                                                           ENTRADA  
entradaDeDados.question("Digite para mim seu nome: ", function(ARGUMENTO){

Para poder sair algo dentro da função usa:
return 
})
*/

//callBack é call enviar back receber
// para usar o callBack tenho que usar funtion (função)

//obs: {} é um bloco novo