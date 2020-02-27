// Busca por tecnologia

// Baseado no desafio anterior, utilize a mesma lista de usuários construída.

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. 
// Essa função deve retornar um boolean true/false.

// Por exemplo:

// function checaSeUsuarioUsaCSS(usuario) {
//   // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
//   // SE encontrar, retorne true da função, caso contrário retorne false
// }

// Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, 
// imprima em tela as informações do usuário:

// for (let i = 0; i < usuarios.length; i++) {
//   const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i]);

//   if (usuarioTrabalhaComCSS) {
//     console.log(`O usuário ${usuario[i].nome} trabalha com CSS`);
//   }
// }

const usuarios = [
    {
        nome: "Natanael Saymon",
        tecnologias: ["HTML", "CSS"]
    },
    {
        nome: "Suellen Souza",
        tecnologias: ["Javascript", " Node.js", "CSS"]
    },
    {
        nome: "Cacau Souza",
        tecnologias: ["Bootstrap", "Materialize"]
    },
    {
        nome: "Mateus",
        tecnologias: ["Java", "Android"]
    },
    {
        nome: "Pedro",
        tecnologias: ["Python", "Vue.js"]
    },
    {
        nome: "João",
        tecnologias: ["Ruby", "CSS"]
    }
]

for(let usuario of usuarios){
    console.log(`O usuario ${usuario.nome}, trabalha com a(s) tecnologia(s): ${usuario.tecnologias.join(', ')}`)
}

// function para buscar tecnologia
function checaSeUsuarioUsaCSS(usuario){
    for(let tecnologia of usuario.tecnologias){
        if(tecnologia == 'CSS') return true
    }
    return false
}


for(let i = 0; i < usuarios.length; i++){
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

    if(usuarioTrabalhaComCSS){
        console.log(`O usuario ${usuarios[i].nome} trabalha com CSS`)
    }
}
