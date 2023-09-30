let vitorias = 0, derrotas = 0, nivel = "Ferro";
saldoVitorias = vitorias -  derrotas;

function checarNivel(vitorias, derrotas) {
  saldoVitorias = vitorias - derrotas;
  if (saldoVitorias < 11) {
    nivel = "Ferro"
  } else if (saldoVitorias < 21) {
    nivel = "Bronze"
  } else if (saldoVitorias < 51) {
    nivel = "Prata"
  } else if (saldoVitorias < 81) {
    nivel = "Ouro"
  } else if (saldoVitorias < 90) {
    nivel = "Platina"
  } else if (saldoVitorias < 101) {
    nivel = "Ascendente"
  } else {
    nivel = "Imortal"
  }
console.log("Nivel: " + nivel + ", saldo: " + saldoVitorias);
  return nivel
}

function teste(vitorias, derrotas) {
  while(saldoVitorias < 110) {
    vitorias += 10;
    checarNivel(vitorias, derrotas);
  }
  return nivel
}

teste(vitorias, derrotas);

console.log("O Herói tem de saldo de " + saldoVitorias + " vitórias e está no nível de " + nivel + ".")
