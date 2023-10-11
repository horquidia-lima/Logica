/*
Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

"Paciente X possui o IMC de : Y"

Onde X e p nome do paciente e Y e o IMC desse paciente

Crie uma funcao para fazer o calculo IMC
*/

const patients = [
  {
    name: "Luiz",
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: "Paulo",
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: "Carlos",
    age: 27,
    weight: 70,
    height: 170,
  },
]

function printPatientIMC(patient){
  return `
    Paciente ${patient.name} possui o IMC de 
    ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}
  `
}

for(let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}