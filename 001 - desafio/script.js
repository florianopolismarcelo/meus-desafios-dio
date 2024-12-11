const nome = "daviReiDeIsrael"
let experienciaXP = 9999;
let nivelHeroi = "";

switch (true) {
  case experienciaXP >= 0 && experienciaXP <= 1000:
    nivelHeroi = "Ferro";
    break;
  case experienciaXP >= 1001 && experienciaXP <= 2000:
    nivelHeroi = "Bronze";
    break;
  case experienciaXP >= 2001 && experienciaXP <= 5000:
    nivelHeroi = "Prata";
    break;
  case experienciaXP >= 5001 && experienciaXP <= 7000:
    nivelHeroi = "Ouro";
    break;
  case experienciaXP >= 7001 && experienciaXP <= 8000:
    nivelHeroi = "Platina";
    break;
  case experienciaXP >= 8001 && experienciaXP <= 9000:
    nivelHeroi = "Ascendente";
    break;
  case experienciaXP >= 9001 && experienciaXP <= 10000:
    nivelHeroi = "Imortal";
    break;
    case experienciaXP >= 10001:
      nivelHeroi = "Radiante";
      break;
}
console.log(
  `Herói: ${nome} \nExperiência: ${experienciaXP} \nNível: ${nivelHeroi}`
);

