fondo.addEventListener("load", dibujarFondo);
fondo.addEventListener("load", dibujarObjetos);
fondo.addEventListener("load", dibujarLobo);

for (let n = 1; 101 > n; n++) {
  if (!(n % 3)) {
    console.log("fizz");
  }
  if (!(n % 5)) {
    console.log("buzz");
  }
  if (n % 3 && n % 5) {
    console.log(n);
  }
}
