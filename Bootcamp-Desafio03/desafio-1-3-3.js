// Soma de despesas e receitas

// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

// Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:

// Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles e use-a para calcular a soma de receitas e despesas dentro 
// da função calculaSaldo:

// A função calculaSaldo deve utilizar a função somaNumeros para calcular a soma de receitas e despesas e no fim retornar o saldo do usuário, ou 
// seja receitas - despesas.

// No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO:

const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
]

//function que calcula receita e despesas
function calculaSaldo(receitas, despesas){
    const somaReceita = calculaNumero(receitas)
    const somaDespesas = calculaNumero(despesas)

    return somaReceita - somaDespesas
}

function calculaNumero(numeros){
    let soma = 0
    for(let numero of numeros){
        soma = soma + numero
    }
    return soma
}

for(let usuario of usuarios){
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    if(saldo > 0){
        console.log(`Usuario ${usuario.nome}, Tem saldo POSITIVO de ${saldo.toFixed(2)}`) //toFixed(formata o numero em 2 casa decimais)
    }else{
        console.log(`Usuario ${usuario.nome}, Tem saldo NEGATIVO de ${saldo.toFixed(2)}`) //toFixed(formata o numero em 2 casa decimais)
    }
}



