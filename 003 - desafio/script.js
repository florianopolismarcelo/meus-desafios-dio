// Dados de entrada
const vitorias = 50;
const derrotas = 20;

// Função para calcular o nível com base nas vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
  const saldoRankeadas = vitorias - derrotas;

  let nivel;

  if (saldoRankeadas <= 10) {
    nivel = "Ferro";
  } else if (saldoRankeadas > 10 && saldoRankeadas <= 20) {
    nivel = "Bronze";
  } else if (saldoRankeadas >= 21 && saldoRankeadas <= 50) {
    nivel = "Prata";
  } else if (saldoRankeadas >= 51 && saldoRankeadas <= 80) {
    nivel = "Ouro";
  } else if (saldoRankeadas >= 81 && saldoRankeadas <= 90) {
    nivel = "Diamante";
  } else if (saldoRankeadas >= 91 && saldoRankeadas <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  // Retorna o resultado
  return `O Herói tem um saldo de ${saldoRankeadas} vitórias e está no nível de ${nivel}`;
}

const resultado = calcularNivel(vitorias, derrotas);

console.log(resultado);