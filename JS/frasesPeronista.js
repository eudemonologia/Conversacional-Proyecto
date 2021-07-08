function frasesPeronistas() {
  let frases = [
    "¡Viva Perón!",
    "¡Justicialismo doctrinario!",
    "const Peron = ArgentinaPotencia()",
  ];
  let resultado;

  resultado = frases.sort(function () {
    return 0.5 - Math.random();
  });

  return resultado;
}
