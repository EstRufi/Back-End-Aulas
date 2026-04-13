const contato = require("./contatos.js")
const zapContato = contato.contatos["whats-users"]

// funciono não há filtro
const getListaUsuario = function(){

    let tudoContatoArray = [zapContato]

    return tudoContatoArray
}

// funcionando está filtrando pelo numero de usuario ex (11987876567)
const getListaDadosUsuario = function(numeroUsuario){
    let profileUsuarioArray = []

    zapContato.forEach(function(itemsProfile){
        if(Number(numeroUsuario) === Number(itemsProfile.number)){
            profile = {
                nome: itemsProfile.account,
                nickUsuario: itemsProfile.nickname,
                foto: itemsProfile["profile-image"],
                numero: itemsProfile.number,
                corDeFundo: itemsProfile.background,
                dataCriacaoConta: itemsProfile["created-since"].start,
                dataEncerrandoConta: itemsProfile["created-since"].end
            }
           profileUsuarioArray.push(profile)
        }
        
    })
    return profileUsuarioArray
}

// funcionando está filtrando pelo numero de usuario ex (11987876567)
const getlistaContatosUsuario = function(numeroUsuario){
    let listaContatoUsuarioArray = []

    zapContato.forEach(function(itensContato){

        if(Number(numeroUsuario) === Number(itensContato.number)){
            itensContato.contacts.forEach(function(informacaoContato){
                
                descricaoContato = {
                    nome: informacaoContato.name,
                    foto: informacaoContato.image,
                    descricao: informacaoContato.description
                }
                listaContatoUsuarioArray.push(descricaoContato)
            })
            
        }
        
    })
    return listaContatoUsuarioArray
}

// funcionando está filtrando pelo numero de usuario ex (11987876567)
const getListaMensagensUsuario = function (numeroUsuario){
    let listaMensagensUsuarioArray = []

    zapContato.forEach(function(itensMensagem){
        if(Number(numeroUsuario) === Number(itensMensagem.number)){
            itensMensagem.contacts.forEach(function(mensagemUsuario){
                conversasUsuario = {
                    mensagem: mensagemUsuario.messages
                }
            })
            listaMensagensUsuarioArray.push(conversasUsuario)
        }
    })
    return listaMensagensUsuarioArray
}

// funcionando está filtrando pelo numero de usuario e nome do contato ex (11987876567) e "Ana Maria"
const getListaConversaUsuario = function(numeroUsuario,nomeContato){
    let listaConversaUsuarioArray = []

    zapContato.forEach(function(itensMensagem){
        if(Number(numeroUsuario) === Number(itensMensagem.number)){
            itensMensagem.contacts.forEach(function(mensagemComUsuario){
                if(String(nomeContato) === String(mensagemComUsuario.name)){
                    conversasContato = {
                        nomeUsuario: itensMensagem.account,
                        numeroUsuario: itensMensagem.number,
                        contato: mensagemComUsuario.name,
                        mensagem: mensagemComUsuario.messages
                    }
                    listaConversaUsuarioArray.push(conversasContato)
                }
            })
            
        }
    })
    return listaConversaUsuarioArray
}

// funcionando está filtrando por uma palavra da conversa
const getListaPalavrasChaves = function(palavraUsuario){
    let listaConversaArray = []
    let filtro = String(palavraUsuario).toUpperCase()
    

    zapContato.forEach(function(localizarItens){
        localizarItens.contacts.forEach(function(localizador){
            localizador.messages.forEach(function(itemMensagem){
                let mensagensMaiusculo = itemMensagem.content.toUpperCase()

                if(mensagensMaiusculo.includes(filtro)){
                    filtroConversas = {
                        nomeUsuario: localizarItens.account,
                        numeroUsuario: localizarItens.number,
                        contato: localizador.name,
                        mensagem: localizador.messages
                    }
                    listaConversaArray.push(filtroConversas)
                }
            })
        })
        
    })
    return listaConversaArray
}
