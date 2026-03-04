const formular = function (nomeAluno, nomeProf,
    sProf, sAluno,
    nomeCurso, nomeDisciplina,
    clasificarMedia,resultadoMedia, n1, n2,
    n3, n4) {
    let aluno = String(nomeAluno)
    let prof = String(nomeProf)
    let profS = String(sProf)
    let alunoS = String(sAluno)
    let curso = String(nomeCurso)
    let disciplina = String(nomeDisciplina)
    let clasificaMedia = String(clasificarMedia)
    let resultMedia = Number(resultadoMedia)
    let nota1 = Number(n1)
    let nota2 = Number(n2)
    let nota3 = Number(n3)
    let nota4 = Number(n4)
    let status

    if (alunoS == `Feminino`.toLowerCase && profS == `Feminino`.toLowerCase) {
        status = `A aluna ${aluno} foi ${clasificaMedia} na disciplina ${disciplina}\n
        Curso: ${curso}\n
        Professora: ${prof}\n
        Notas da aluna: 1º foi ${nota1}, 2º foi ${nota2}, 3º foi ${nota3} e 4º foi ${nota4}\n
        Média final: ${resultMedia}`
    }
    else if (alunoS == `Feminino`.toUpperCase && profS == `Masculino`.toLoCase) {
        status = `A aluna ${aluno} foi ${clasificaMedia} na disciplina ${disciplina}
        Curso: ${curso}
        Professor: ${prof}
        Notas da aluna: 1º foi ${nota1}, 2º foi ${nota2}, 3º foi ${nota3} e 4º foi ${nota4}
        Média final: ${resultMedia}`
    }
    else if (alunoS == `Masculino`.toLowerCase && profS == `Feminino`.toLowerCase) {
        status = `O aluno ${aluno} foi ${clasificaMedia} na disciplina ${disciplina}\n
        Curso: ${curso}\n
        Professora: ${prof}\n
        Notas do aluno: 1º foi ${nota1}, 2º foi ${nota2}, 3º foi ${nota3} e 4º foi ${nota4}\n
        Média final: ${resultMedia}`
    }
    else {
        status = `O ${aluno} foi ${clasificaMedia} na disciplina ${disciplina}\n
        Curso: ${curso}\n
        Professor: ${prof}\n
        Notas do aluno: 1º foi ${nota1}, 2º foi ${nota2}, 3º foi ${nota3} e 4º foi ${nota4}\n
        Média final: ${resultMedia}`
    }

    return status
}

const formularExame = function (nomeAluno, nomeProf,
    sProf, sAluno,
    nomeCurso, nomeDisciplina,
    clasificarExame,resultadoExame, n1, n2,
    n3, n4) {
    let aluno = String(nomeAluno)
    let prof = String(nomeProf)
    let profS = String(sProf)
    let alunoS = String(sAluno)
    let curso = String(nomeCurso)
    let disciplina = String(nomeDisciplina)
    let clasificaExame = String(clasificarExame)
    let resultExame = Number(resultadoExame)
    let nota1 = Number(n1)
    let nota2 = Number(n2)
    let nota3 = Number(n3)
    let nota4 = Number(n4)
    let status
    
    if (alunoS == `Feminino`.toLowerCase && profS == `Feminino`.toLowerCase) {
        status = `A aluna ${aluno} foi ${clasificaExame} na disciplina ${disciplina}\n
        Curso: ${curso}\n
        Professora: ${prof}\n
        Notas da aluna: 1º foi ${nota1}, 2º foi ${nota2}, 3º foi ${nota3}, 4º foi ${nota4} e nota do exame foi ${resultExame}\n
        Média final: ${resultMedia}
        Média final do Exame: ${resultExame}`
    }
    else if (alunoS == `Feminino`.toLowerCase && profS == `Masculino`.toLowerCase) {
        status = `A aluna ${aluno} foi ${clasificaExame} na disciplina ${disciplina}\n
        Curso: ${curso}\n
        Professor: ${prof}\n
        Notas da aluna: 1º foi ${nota1}, 2º foi ${nota2}, 3º foi ${nota3}, 4º foi ${nota4} e nota do exame foi ${resultExame}\n
        Média final: ${resultMedia}
        Média final do Exame: ${resultExame}`
    }
    else if (alunoS == `Masculino`.toLowerCase && profS == `Feminino`.toLowerCase) {
        status = `O aluno ${aluno} foi ${clasificaExame} na disciplina ${disciplina}\n
        Curso: ${curso}\n
        Professora: ${prof}\n
        Notas do aluno: 1º foi ${nota1}, 2º foi ${nota2}, 3º foi ${nota3}, 4º foi${nota4} e nota do exame foi ${resultExame}\n
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

const sa = "feminino"
const sp = "masculino"
const na = "Ana"
const np = "fe"
const d = "matematica"
const c = "ds"
const cl = "aprovado"
const r = 100
const n1 = 100
const n2 = 100
const n3 = 100
const n4 = 100

console.log(formular(na,np,sp,sa,c,d,cl,r,n1,n2,n3,n4))