/*
Crie um programa que pergunte ao usuário qual é o nome dele e, em seguida, mostre uma mensagem de boas-vindas personalizada.
*/

const prompt = require('prompt-sync')();

let nome = prompt("Digite o seu nome: ")

console.log(`Seja muito bem-vindo(a), ${nome}!`)