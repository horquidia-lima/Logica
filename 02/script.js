/*
Capturar 2 numeros
e fazer as operacoes matematicas de 
soma, subtracao, mult, divi e resto da divisao

E para cada op, mostrar um alerta com o result
*/

let numberOne = prompt('Digite o primeiro numero: ')
let numberTwo = prompt('Digite o segundo numero: ')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const subtraction = numberOne - numberTwo
const multiplication = numberOne * numberTwo
const division = numberOne / numberTwo
const restOfDivision = numberOne % numberTwo

alert(`A soma dos numeros e: ${sum}`)
alert(`A subtracao dos numeros e: ${subtraction}`)
alert(`A multiplicacao dos numeros e: ${multiplication}`)
alert(`A divisao dos numeros e: ${division}`)
alert(`O resto da divisao dos numeros e: ${restOfDivision}`)

