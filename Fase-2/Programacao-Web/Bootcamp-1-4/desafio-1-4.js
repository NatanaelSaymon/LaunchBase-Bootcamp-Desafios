const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

//Adicionando transações
function createTransaction(transaction){
    user.transactions.push(transaction) 
    //push() adiciona 1 ou mais elementos ao final de um array 
    //e retorna o novo comprimento desse array.

    if(transaction.type == 'credit'){
        user.balance = user.balance + transaction.value
    }else{
        user.balance = user.balance - transaction.value
    }
}

// Relatórios
// Crie uma função chamada getHigherTransactionByType que recebe como parâmetro o tipo de transação credit/debit, 
// percorre as transações do usuário e retorna o objeto da transação de maior valor com aquele tipo:
function getHigherTransactionByType(type){
    let higherTransaction
    let higherValue = 0

    for(let transaction of user.transactions){
        if(transaction.type == type && transaction.value > higherValue){
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

// Crie uma função chamada getAverageTransactionValue que retorna o valor médio das transações de um usuário 
// independente do seu tipo:

function getAverageTransactionValue(){
    let sum = 0

    for(let transaction of user.transactions){
        sum += transaction.value
    }

    return sum / user.transactions.length
}

// Crie uma função chamada getTransactionsCount que retorna o número de transações de cada tipo credit/debit, 
// o retorno da função deve ser um objeto e seguir exatamente como o modelo apresentado abaixo:

function getTransactionsCount(){
    let count = {
        credit: 0,
        debit: 0
    }

    for(let transaction of user.transactions){
        if(transaction.type === 'credit'){
            count.credit++
        }else{
            count.debit++
        }
    }

    return count
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }




