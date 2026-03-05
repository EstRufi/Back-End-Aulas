const formular = function (nomeAluno, nomeProf,
    sProf, sAluno,
    nomeCurso, nomeDisciplina,
    clasificarMedia,resultadoMedia, n1, n2,
    n3, n4) {
    let aluno = String(nomeAluno).toUpperCase()
    let prof = String(nomeProf).toUpperCase()
    let profS = String(sProf).toLowerCase()
    let alunoS = String(sAluno).toLowerCase()
    let curso = String(nomeCurso).toLowerCase()
    let disciplina = String(nomeDisciplina)
    let clasificaMedia = String(clasificarMedia)
    let resultMedia = Number(resultadoMedia)
    let nota1 = Number(n1)
    let nota2 = Number(n2)
    let nota3 = Number(n3)
    let nota4 = Number(n4)
    let status

    if (alunoS == `feminino` && profS == `feminino`) {
        status = `A aluna ${aluno} foi ${clasificaMedia} na disciplina ${disciplina}
        Curso: ${curso}
        Professora: ${prof}
        Notas da aluna: 1º foi ${nota1}, 2º foi ${nota2}, 3º foi ${nota3} e 4º foi ${nota4}
        Média final: ${resultMedia}`
    }
    else if (alunoS == `feminino` && profS == `masculino`) {
        status = `A aluna ${aluno} foi ${clasificaMedia} na disciplina ${disciplina}
        Curso: ${curso}
        Professor: ${prof}
        Notas da aluna: 1º foi ${nota1}, 2º foi ${nota2}, 3º foi ${nota3} e 4º foi ${nota4}
        Média final: ${resultMedia}`
    }
    else if (alunoS == `masculino` && profS == `feminino`) {
        status = `O aluno ${aluno} foi ${clasificaMedia} na disciplina ${disciplina}
        Curso: ${curso}
        Professora: ${prof}
        Notas do aluno: 1º foi ${nota1}, 2º foi ${nota2}, 3º foi ${nota3} e 4º foi ${nota4}
        Média final: ${resultMedia}`
    }
    else if (alunoS == `masculino` && profS == `masculino`){
        status = `O ${aluno} foi ${clasificaMedia} na disciplina ${disciplina}
        Curso: ${curso}
        Professor: ${prof}
        Notas do aluno: 1º foi ${nota1}, 2º foi ${nota2}, 3º foi ${nota3} e 4º foi ${nota4}
        Média final: ${resultMedia}`
    }

    return status
}

const formularExame = function (nomeAluno, nomeProf,
    sProf, sAluno,
    nomeCurso, nomeDisciplina,resultadoMedia,
    clasificarExame,resultadoExame, n1, n2,
    n3, n4) {
    let aluno = String(nomeAluno)
    let prof = String(nomeProf)
    let profS = String(sProf)
    let alunoS = String(sAluno)
    let curso = String(nomeCurso)
    let disciplina = String(nomeDisciplina)
    let resultMedia = Number(resultadoMedia)
    let clasificaExame = String(clasificarExame)
    let resultExame = Number(resultadoExame)
    let nota1 = Number(n1)
    let nota2 = Number(n2)
    let nota3 = Number(n3)
    let nota4 = Number(n4)
    let status
    
    if (alunoS == `feminino` && profS == `feminino`) {
        status = `A aluna ${aluno} foi ${clasificaExame} na disciplina ${disciplina}
        Curso: ${curso}
        Professora: ${prof}
        Notas da aluna: 1º foi ${nota1}, 2º foi ${nota2}, 3º foi ${nota3}, 4º foi ${nota4} e nota do exame foi ${resultExame}
        Média final: ${resultMedia}
        Média final do Exame: ${resultExame}`
    }
    else if (alunoS == `feminino` && profS == `masculino`) {
        status = `A aluna ${aluno} foi ${clasificaExame} na disciplina ${disciplina}
        Curso: ${curso}
        Professor: ${prof}
        Notas da aluna: 1º foi ${nota1}, 2º foi ${nota2}, 3º foi ${nota3}, 4º foi ${nota4} e nota do exame foi ${resultExame}
        Média final: ${resultMedia}
        Média final do Exame: ${resultExame}`
    }
    else if (alunoS == `masculino` && profS == `feminino`) {
        status = `O aluno ${aluno} foi ${clasificaExame} na disciplina ${disciplina}
        Curso: ${curso}
        Professora: ${prof}
        Notas do aluno: 1º foi ${nota1}, 2º foi ${nota2}, 3º foi ${nota3}, 4º foi${nota4} e nota do exame foi ${resultExame}
        Média final: ${resultMedia}
        Média final do Exame: ${resultExame}`
    }
    else {
        status = `O aluno ${aluno} foi ${clasificaExame} na disciplina ${disciplina}
        Curso: ${curso}
        Professor: ${prof}
        Notas do aluno: 1º foi ${nota1}, 2º foi ${nota2}, 3º foi ${nota3}, 4º foi ${nota4} e nota do exame foi ${resultExame}
        Média final: ${resultMedia}
        Média final do Exame: ${resultExame}`
    }

    return status
}
/*
const sa = "feminino"
const sp = "feminino"
const na = "Ana"
const np = "fe"
const d = "matematica"
const c = "ds"
const rm = 90
const cl = "aprovado"
const r = 100
const n1 = 100
const n2 = 100
const n3 = 100
const n4 = 100

console.log(formularExame(na,np,sp,sa,c,d,rm,cl,r,n1,n2,n3,n4))
*/

module.exports = {
    formular,
    formularExame
}