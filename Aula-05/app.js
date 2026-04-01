/**
 * Objetivo: Arquivo responsável pela criação da API do projeto de Estados e Cidades
 * Data: 01/04/2026
 * Autor: Estela
 * Versão:1.0
 */


/**
 * Para configurar a API:
 * 
 *      Dependeincia para configurar e utilizar o protocolo HTTP para criar a API
 *  Instalar o EXPRESS -> npm install express --save
 *      Por que colocamos --save é para ficar salvo sobre a instalação
 *      A instalação tem que ser feita no app e na rais
 *      "express": "^5.2.1" essa setinha para cima quer dizer que é superior, assim caso tenha atualização ele iria atualiza algo superior ao que vc já tem
 *  
 *      Dependencia para configurar as permições de acesso da API
 *  Instalar o CORS -> npm intall cors --save
 *      Ele é um conjunto de permições para que o front use nossa api
 *      
 *  Sempre que mechemos com a nossa API precisamos baixa os dois
 */

//Import das dependencias para criar a API

const express = require("express")
const cors = require("cors")

//Criando um objeto do express para criar a API
const app = express()

// Configurações do cors da API
const corsOption = {
    // Esse * quer dizer que todos podem acesar a API que ele tá publico
    origin: ["*"],  // Configuração de origem da requisição que no nosso caso pode se (IP ou o Dominio)
    methods: "GET",  // Configuração dos verbos que serão utiçizados na API
    allowedHeaders: ["Content-type", "authorization"], // Configurações de permições
                    //Tipo de dados     // Autorização de acesso
}

//Aplica as configurações do CORS no app (EXPRESS)
app.use(cors(corsOption))

//Import do arquivo de funções
const estadosCidades = require("./modulo/funcoes.js")

// Endpoint para listar is estados
app.get("/estados", function(request,response){
    let estados = estadosCidades.getListaDeEstados()
    response.json(estados)
    response.status(200) // é uma Requisição bem sucedida então deu certoooo
})


app.get("/cidades", function(request,response){
    response.json({"message": "Testando a API de cidades"})
    response.status(200)
})

//Fazer o Start na API (aguardando as requisições)
app.listen(8080, function(){
    console.log("API aguardando novas requisições . . . .")
})

