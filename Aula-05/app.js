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
 *  Instalar o CORS -> npm install cors --save
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

//Retorna uma lista de estados
app.get("/v1/senai/estados", function(request,response){
    let estados = estadosCidades.getListaDeEstados()
    response.status(200) // é uma Requisição bem sucedida então deu certoooo
    response.json(estados)
})


    //       para criar uma variavel use /:

// Retorna dados do estado
// dessa forma é variável via params(parametro)

// posso  enviar da segunte forma /v1/senai/dados/estado/?uf=sp seria uma variável via query Params
// a diferença e que o query pode colocar mais variaveis
//app.get("/v1/senai/dados/estado/:uf", function(request,response){
    app.get("/v1/senai/dados/estado/", function(request,response){
        // recebe uma variavel via Params
    // let sigla = request.params.uf

    let sigla = request.query.uf
    let estado = estadosCidades.getDadosEstado(sigla)
    if(estado){
        response.status(200)
        response.json(estado)
    }
    else{
        response.status(404)
        response.json({"mensage": "Ops não tem esse estado ai não"})
    }
})

//Retorna dados da capital filtrando pela sigla do estado
app.get("/v1/senai/capital/estado/", function(request,response){
    //let sigla = request.params.uf
    let sigla = request.query.uf
    let capital = estadosCidades.getCapitalEstado(sigla)

    if(capital){
        response.status(200)
        response.json(capital)
    }
    else{
        response.status(404)
        response.json({"mensage": "Ops você enviou um estado desconhecido"})
        
    }
})

//Retorna os estados filtrando pela região
app.get("/v1/senai/estados/regiao/:regiao",function(request,response){
    let regiao = request.params.regiao
    let estadosRegiao = estadosCidades.getEstadosRegiao(regiao)

    if(estadosRegiao){
        response.status(200)
        response.json(estadosRegiao)

    }
    else{
        response.status(404)
        response.json({"mensage": "Ops Voê enviou uma região desconhecida" })
    }
})

//Retorna os  estados que foram capital do brasil
app.get("/v1/senai/estados/capital/brasil", function(request, response){
    let capitalPais = estadosCidades.getCapitalPais()
    response.status(200)
    response.json(capitalPais)
    
})

//Retorna as cidades filtrando pela sigla do estado
app.get("/v1/senai/cidades/estados/:uf", function(request,response){
    let sigla =  request.params.uf
    let cidadesEstados = estadosCidades.getCidades(sigla)

    if(cidadesEstados){
        response.status(200)
        response.json(cidadesEstados)
    }
    else{
        response.status(404)
        response.json({"mensage": "Ops você enviou uma sigla desconhecida"})
    }
})

app.get("/v1/senai/help", function(request,response){
    let docAPI = {
        "api-descrpiption": "API para manipular dados de Estados e Cidades",
        "date" : "2026-04-02",
        "development": "Estela Rufino Brito",
        "version" : 1.0,
        "endpoints": [
            {
                "router1": "/v1/senai/estados",
                "description": "Retorna a lista de todos os estados"
            },
            
            {
                "router2": "/v1/senai/dados/estado/",
                "description": "Retorna dados de um estado filtrando pela sigla, que você escrever"
            },
            
            {
                "router3": "/v1/senai/capital/estado/",
                "description": "Retorna dados da capital de um estado, filtrando pela sigla, que você escrever"
            },
            
            {
                "router4": "/v1/senai/estados/regial/sul",
                "description": "Retorna os estados filtrando pela região"
            },

            {
                "router5": "/v1/senai/estados/capital/brasil",
                "description": "Retorna os estados que ja foram capitais do brasil"
            },

            {
                "router6": "/v1/senai/cidades/estados/sp",
                "description": "Retorna as cidades de cada estado, filtrando pela sigla"
            }
        ]
        
    }
    response.status(200)
    response.json(docAPI)
})

//Fazer o Start na API (aguardando as requisições)
app.listen(8080, function(){
    console.log("API aguardando novas requisições . . . .")
})

