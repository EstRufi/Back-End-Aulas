const validar = function (nomeAluno, nomeProf,
    sProf, sAluno, nomeCurso,
    nomeDisciplina, n1, n2,
    n3, n4) {
    let aluno = String(nomeAluno)
    let prof = String(nomeProf)
    let profS = String(sProf)
    let alunoS = String(sAluno)
    let curso = String(nomeCurso)
    let disciplina = String(nomeDisciplina)
    let nota1 = Number(n1)
    let nota2 = Number(n2)
    let nota3 = Number(n3)
    let nota4 = Number(n4)
    let status

    if (aluno == "" || prof == "" ||
        profS == "" || alunoS == "" ||
        curso == "" || disciplina == "" ||
        nota1 == "" || nota2 == "" ||
        nota3 == "" || nota4 == "") {

        status = "Esqueceu de responder algo"
    }
    else if (isNaN(nota1), isNaN(nota2), isNaN(nota3), isNaN(nota4)) {
        status = "Eu só aceito números"
    }
    else if (nota1 <= -1 || nota1 > 100 ||
        nota2 <= -1 || nota2 > 100 ||
        nota3 <= -1 || nota3 > 100 ||
        nota4 <= -1 || nota4 > 100) {
        status = "Olha você deve colocar os valores entre 0 a 100"
    }

    return status
}

module.exports = {
    validar
}