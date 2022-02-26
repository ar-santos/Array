const listaDeIdade = [14, 29, 50, 40];

function maiordeIdade(idade) {
  return idade >= 18;
}

const result = listaDeIdade.filter(maiordeIdade);

export default result