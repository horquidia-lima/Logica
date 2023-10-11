/*
Crie uma lista de pacientes

Cada paciente devera conter:
nome, idade, peso e altura
Escreva uma lista contendo o nome dos pacientes
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

let patientNames = []
/*for(let index = 0; index < patients.length; index++){
  patientNames[index] = patients[index].name
}*/

for(let patient of patients) {
  patientNames.push(patient.name)
}