/*

    CALCULO DE IMC

    Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

    
*/

const nome = 'Natan'
const peso = 100
const altura = 1.75
const imc = peso / (altura * altura)

if(imc >= 30){
    console.log(`Seu IMC: ${imc}. Você está acima do peso.`)
}else{
    console.log(`Seu IMC: ${imc}. Você não está acima do peso.`)
}


