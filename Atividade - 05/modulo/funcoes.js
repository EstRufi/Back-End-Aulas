const contato = require("./contatos.js")
const zapContato = contato.contatos["whats-users"]

// funciono
const getListaUsuario = function(){

    let tudoContatoArray = [zapContato]

    return tudoContatoArray
}

// fazendo
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

console.log(getListaDadosUsuario(11987876567))