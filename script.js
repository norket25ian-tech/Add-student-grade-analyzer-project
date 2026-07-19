let alunos = []
let cadluno = document.getElementById('nome')
let cadnota = document.getElementById('nota')
let lista = document.getElementById('lista')
let resultado = document.getElementById('res')
function cadastrar(){
  let n = Number(cadnota.value)
  let a = cadluno.value
   if (isNaN(n) || a.trim() === ''){
    window.alert('DIGITE A NOTA E O NOME DO ALUNO')
    return
  }
  alunos.push({
    nome:a,
    nota:n
  })
  let item = document.createElement('option')
  item.text= `${a} - Nota: ${n}`
  lista.appendChild(item)
}
const finalizar = () =>{
 res.innerHTML =('')
 
 let aprovados = []
 let reprovados = [] 
 let notamaior = alunos[0].nota
 let notamenor = alunos[0].nota
 let soma = 0
 for(c = 0;c < alunos.length;c++){
    if(alunos[c].nota >= 7){
    aprovados.push(alunos[c].nome)
    }if (alunos[c].nota < 7){
       reprovados.push(alunos[c].nome)
      console.log(reprovados)
    }
    if(notamaior < alunos[c].nota){
      notamaior = alunos[c].nota
    }
    if(notamenor > alunos[c].nota){
      notamenor = alunos[c].nota
    }
    let quantidade = alunos.length
    soma += alunos[c].nota
    let media = soma/alunos.length
    console.log(media)
    resultado.innerHTML = `
    Essa foi a maior nota entre os alunos: ${notamaior}<br>
    Essa foi a menor nota entre os alunos: ${notamenor}<br>
    Esses foram os alunos aprovados: ${aprovados}<br>
    Esses foram os alunos reprovados: ${reprovados}<br>
    A quantidade de alunos é ${quantidade}<br>
    A média entre os alunos é ${media}`
 }
}
