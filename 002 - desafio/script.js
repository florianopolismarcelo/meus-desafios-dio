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
