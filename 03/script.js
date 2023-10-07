/*
Solicitar o nome do aluno e as 3 notas
A media positiva devera ser maior que 6
Se o aluno passou no bimestre, dar os parabens
Se o aluno nao passou no bimestre,
motivar o aluno a dar seu melhor na prova
de recuperacao
Em ambos os casos, mostre uma mensagem co o nome do aluno e a nota
*/ 

let name = prompt('Digite seu nome: ')
let noteOne = prompt('Digite sua primeira nota: ')
let noteTwo = prompt('Digite sua segunda nota: ')
let noteThree = prompt('Digite sua terceira nota: ')

noteOne = Number(noteOne)
noteTwo = Number(noteThree)
noteThree = Number(noteThree)

let average = ((noteOne + noteTwo + noteThree) / 3).toFixed(2)

if(average >= 6) {
  alert(`Parabens ${name}, sua media foi ${average}`)
}else {
  alert(`Voce esta de recuperacao, sua media foi ${average} , mas nao fique triste, vamos estudar!`)
}