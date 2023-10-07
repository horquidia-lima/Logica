/*
---Jogo da advinhacao---
Apresente a mensagem ao usuario:
"Advinhe p numero que estou pensando? Esta entre 0 e 10"
Crie uma logica para gerar um numero aleatorio e verifique
se o numero digitado e o mesmo que o aleatorio gerado pelo sistema.
Enquanto o usuario nao advinhar o nmero, mostrar a mensagem:
"Erro, tente novamente"
Caso o usuario acerte o numero, apresentar a mensagem:
"Parabens! Voce advinhou o numero em x tentativas"
Substitua o "x" da mensagem, pelo numero de tentativas
*/

let result = prompt("Adivinhe o numero que eu estou pensando? Esta entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while(Number(result) != randomNumber) {
  result = prompt('Erro, tente novamente!')
  xAttempts++
}

alert(`Parabens! Voce advinhou o numero em ${xAttempts} tentativas`)



