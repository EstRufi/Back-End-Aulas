// validar a atividade, colocando o null por não ter

const estados = require("./estados_cidades")
const listaBrasil = estados.listaDeEstados.estados

const getListaDeEstados = function () {
    let uf = []
    let quantidade = listaBrasil.length

    listaBrasil.forEach(function (itemSigla) {

        uf.push(itemSigla.sigla)

    });
    listaEstados  = {
        uf:uf, 
        quantidade
    }

    return listaEstados

}

const getDadosEstado = function(informarSigla){

    listaBrasil.forEach(function(itemEstados){

        if(String(informarSigla).toUpperCase() == 
        String(itemEstados.sigla).toUpperCase()){
            listaInformacoes = {
                uf: itemEstados.sigla,
                descricao: itemEstados.nome,
                capital: itemEstados.capital,
                regiao: itemEstados.regiao
            }
        }

    })

    return listaInformacoes
}

const getCapitalEstado = function(informarUf){

    listaBrasil.forEach(function(itemCapital){

        if(String(informarUf).toUpperCase() == 
        String(itemCapital.sigla).toUpperCase()){
            listaUfCapital = {
                uf: itemCapital.sigla,
                descricao: itemCapital.nome,
                capital: itemCapital.capital
            }
        }

    })

    return listaUfCapital
}

const getEstadosRegiao = function(informarRegiaoEstado){
    let estado = []

    listaBrasil.forEach(function(informarRegiao){

        if( String(informarRegiaoEstado).toUpperCase() == String(informarRegiao.regiao).toUpperCase()){
            regiao = informarRegiao.regiao

            listaRegiao = {
                uf: informarRegiao.nome , descricao: informarRegiao.nome
            }
            
            estado.push(listaRegiao)
        }
        
    })

    estadoRegiao = {
        regiao,
        estado
    }

    return estadoRegiao
}

const getCapitalPais = function(){
    let capitalBrasil = {capitais : []}

    listaBrasil.forEach(function(estados){


        if(estados.capital_pais){
            
            capitalBrasil.capitais.push({
                capital_atual: estados.capital_pais.capital,
                uf: estados.sigla,
                descricao: estados.nome,
                regiao: estados.capital,
                regiao: estados.regiao,
                capital_pais_ano_inicio: estados.capital_pais.ano_inicio,
                capital_pais_ano_termino: estados.capital_pais.ano_fim
            })
        }
        

    })
    return capitalBrasil
}

//getListaDeEstados()
//console.log(getEstadosRegiao("Norte"))
console.log(getCapitalPais())