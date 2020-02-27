// Usuários e tecnologias
// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

// const usuarios = [
//   { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
//   { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
//   { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
// ];
// Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

// Carlos trabalha com HTML, CSS
// Jarmine trabalha com JavaScript, CSS
// Tuane trabalha com HTML, Node.js

const usuarios = [
    {
        nome: "Natanael Saymon",
        tecnologia: ["HTML", " CSS!"]
    },
    {
        nome: "Suellen Souza",
        tecnologia: ["Javascript", " Node.js!"]
    },
    {
        nome: "Cacau Souza",
        tecnologia: ["Bootstrap", " Materialize!"]
    }
]

for(let c in usuarios){
    console.log(`${usuarios[c].nome} trabalha com ${usuarios[c].tecnologia}`)
}



