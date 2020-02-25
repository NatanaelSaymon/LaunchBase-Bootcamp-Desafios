/*

    CALCULO DE APOSENTADORIA
    
    Crie um programa para calcular a aposentadoria de uma pessoa.

*/

const nome = 'Suellen'
const sexo = 'F'
const idade = 30
const tempocontribuicao = 50
const aps = (idade + tempocontribuicao)


if(sexo == 'M'){
    if(aps >= 95){
        console.log(`${nome}, Seu tempo de contribuiçao é ${aps} Você pode se aposentar!`)
    }else{
        console.log(`${nome}, Seu tempo de contribuiçao é ${aps} Você não pode se aposentar!`)
    }
}else{
    if(aps >= 85){
        console.log(`${nome}, Seu tempo de contribuiçao é ${aps} Você pode se aposentar!`)
    }else{
        console.log(`${nome}, Seu tempo de contribuiçao é ${aps} Você não pode se aposentar!`)
    }
}