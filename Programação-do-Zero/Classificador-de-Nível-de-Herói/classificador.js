let nome = "Link", exp = 0, nivel = "Ferro";

function checarNivel(exp) {
  if (exp < 1001) {
    nivel = "Ferro"
  } else if (exp < 2001) {
    nivel = "Bronze"
  } else if (exp < 6001) {
    nivel = "Prata"
  } else if (exp < 7001) {
    nivel = "Ouro"
  } else if (exp < 8001) {
    nivel = "Platina"
  } else if (exp < 9001) {
    nivel = "Ascendente"
  } else if (exp < 100001) {
    nivel = "Imortal"
  } else {
    nivel = "Radiante"
  }
console.log("Nivel:" + nivel + " exp:" + exp)
  return nivel
}

function teste(nivel) {
  while(exp < 11000) {
    exp += 1000
    checarNivel(exp)
  }
  return nivel
}

teste(nivel);

console.log("O Herói de nome " + nome + "está no nível de " + nivel)