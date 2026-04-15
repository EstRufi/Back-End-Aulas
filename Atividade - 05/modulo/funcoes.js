const contato = require("./contatos.js")
const zapContato = contato.contatos["whats-users"]

// funciono não há filtro
// não precisa de validacao

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

    if(profileUsuarioArray == null || profileUsuarioArray == "" || !isNaN(profileUsuarioArray)){
        return false
    }
    else{
        return profileUsuarioArray
    }
    
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
        if(listaContatoUsuarioArray == null || listaContatoUsuarioArray == "" || !isNaN(listaContatoUsuarioArray)){
        return false
    }
    else{
        return listaContatoUsuarioArray
    }
    
}

// funcionando está filtrando pelo numero de usuario ex (11987876567)
const getListaMensagensUsuario = function (numeroUsuario){
    let listaMensagensUsuarioArray = []

    zapContato.forEach(function(itensMensagem){
        if(Number(numeroUsuario) === Number(itensMensagem.number)){
            itensMensagem.contacts.forEach(function(mensagemUsuario){
                conversasUsuario = {
                    nomeUsuario: itensMensagem.account,
                    numeroUsuario: itensMensagem.number,
                    nome: mensagemUsuario.name,
                    mensagem: mensagemUsuario.messages
                }
                listaMensagensUsuarioArray.push(conversasUsuario)
            })
            
        }
    })

    if(listaMensagensUsuarioArray == null || listaMensagensUsuarioArray == "" || !isNaN(listaMensagensUsuarioArray)){
        return false
    }
    else{
        return listaMensagensUsuarioArray
    }
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
    if(listaConversaUsuarioArray == null || listaConversaUsuarioArray == "" || !isNaN(listaConversaUsuarioArray)){
        return false
    }
    else{
        return listaConversaUsuarioArray
    }
    
}

// funcionando está filtrando pelo numero do usuário e a palavra da conversa
const getListaPalavrasChaves = function(numeroUsuario,palavraUsuario){
    let listaConversaArray = []
    let filtro = String(palavraUsuario).toUpperCase()
    
    zapContato.forEach(function(localizarItens){
        if(Number(numeroUsuario) === Number(localizarItens.number)){
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
        }
    })

    if(listaConversaArray == null || listaConversaArray == "" || !isNaN(listaConversaArray)){
        return false
    }
    else{
        return listaConversaArray
    }
    
}

module.exports = {
    getListaUsuario,
    getListaDadosUsuario,
    getlistaContatosUsuario,
    getListaMensagensUsuario,
    getListaConversaUsuario,
    getListaPalavrasChaves
}
