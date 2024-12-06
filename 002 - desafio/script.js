/*
Desafio Classificador de nível de Herói

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/
const nome = "daviReiDeIsrael";
let experienciaXP = 99999;
let nivelHeroi = "";

if (experienciaXP >= 0 && experienciaXP <= 1000) {
  nivelHeroi = "Ferro";
} else if (experienciaXP >= 1001 && experienciaXP <= 2000) {
  nivelHeroi = "Bronze";
} else if (experienciaXP >= 2001 && experienciaXP <= 5000) {
  nivelHeroi = "Prata";
} else if (experienciaXP >= 5001 && experienciaXP <= 7000) {
  nivelHeroi = "Ouro";
} else if (experienciaXP >= 7001 && experienciaXP <= 8000) {
  nivelHeroi = "Platina";
} else if (experienciaXP >= 8001 && experienciaXP <= 9000) {
  nivelHeroi = "Ascendente";
} else if (experienciaXP >= 9001 && experienciaXP <= 10000) {
  nivelHeroi = "Imortal";
} else {
  nivelHeroi = "Radiante";
}

console.log('Herói: ' +nome+ '\nExperiência: ' +experienciaXP+ '\nNível: ' +nivelHeroi)
