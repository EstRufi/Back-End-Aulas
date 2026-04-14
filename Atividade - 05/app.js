const express = require("express")
const cors = require("cors")

// ter que fazer na sala

const app = express()
const corsOption = {
    origin: ["*"],
    methods: "GET",
    allowedHeaders: ["Content-type", "authorization"]
}

app.use(cors(corsOption))

const conversasZap = require("./modulo/funcoes.js")

app.get("/v1/whatsapp/usuarios", function(request,response){
    let dadosUsuario = conversasZap.getListaUsuario()
    response.status(200)
    response.json(dadosUsuario)
})

app.get("/v1/whatsapp/dados/usuario/:numero", function(request, response){
    let numero = request.params.numero
    let informacaoUsuario = conversasZap.getListaDadosUsuario(numero)

    if(informacaoUsuario){
        response.status(200)
        response.json(informacaoUsuario)}
    else{
        response.status(404)
        response.json({
            "Mensagem": "Erro colocou o numero desconhecido"
        })
    }
})

app.get("/v1/whatsapp/lista/contatos/:numero", function (request, response){
    let numero = request.params.numero
    let listaContatos = conversasZap.getlistaContatosUsuario(numero)

    if( listaContatos){
        response.status(200)
        response.json(listaContatos)
    }
    else{
        response.status(404)
        response.json({
            "Mensagem": "Erro colocou o numero desconhecido"
        })
    }
})

app.get("/v1/whatsapp/mensagens/usuario/:numero", function (request, response){
    let numero = request.params.numero
    let listaMensagens = conversasZap.getListaMensagensUsuario(numero)

    if(listaMensagens){
        response.status(200)
        response.json(listaMensagens)
    }
    else{
        response.status(404)
        response.json({
            "Mensagem": "Erro colocou o numero desconhecido"
        })
    }
})

app.get("/v1/whatsapp/conversa/mensagem/usuario/",function(request, response){
    let numero = request.query.numero
    let nomeContato = request.query.nomeContato
    let mensagensUsuario = conversasZap.getListaConversaUsuario(numero,nomeContato)

    if(mensagensUsuario){
        response.status(200)
        response.json(mensagensUsuario)
    }
    else{
        response.status(404)
        response.json({
            "Mensagem": "Erro colocou o numero desconhecido e nome desconhecido"
        })
    }
})

app.get("/v1/whatsapp/Conversas/palavras/chaves/:palavras",function(request, response){
    let palavrinhasChaves = request.params.palavras
    let palavrasChaves = conversasZap.getListaPalavrasChaves(palavrinhasChaves)

    if(palavrasChaves){
        response.status(200)
        response.json(palavrasChaves)
    }
    else{
        response.status(404)
        response.json({
            "Mensagem": "Erro colocou palavra que não existe na conversa"
        })
    }

})

app.get("/v1/whatsapp/help", function(request,response){
    let docAPI = {
        "api-descrpiption": "API para manipular dados de usuarios do whatsapp",
        "date" : "2026-04-13",
        "development": "Estela Rufino Brito",
        "version" : 1.0,
        "endpoints": [
            {
                "router1": "/v1/whatsapp/usuarios",
                "description": "Retorna a lista de todos os contatos e mensagens"
            },
            
            {
                "router2": "/v1/whatsapp/dados/usuario/11987876567",
                "description": "Retorna uma lista de informações do usuário que tem este número, filtrando pelo número dele"
            },
            
            {
                "router3": "/v1/whatsapp/lista/contatos/11987876567",
                "description": "Retorna uma lista dos contatos do usuário, filtrando pelo número dele"
            },
            
            {
                "router4": "/v1/whatsapp/mensagens/usuario/11987876567",
                "description": "Retorna todas as mensagens trocadas com os contato de usuário, filtrando pelo número dele"
            },

            {
                "router5": "/v1/whatsapp/conversa/mensagem/usuario/",
                "description": "Retorna a conversa do usuário com o contato , filtrando pelo número dele e o nome do contato "
            },

            {
                "router6": "/v1/whatsapp/Conversas/palavras/chaves/:palavras",
                "description": "Retorna a mensagem e a pessoa que mandou por meio de uma palavra chave, filtrando por alguma palavra"
            }
        ]
        
    }
    response.status(200)
    response.json(docAPI)
})

app.listen(8080, function(){
    console.log("API aguardando novas requisições . . . .")
})