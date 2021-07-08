function dibujarFondo() {
  dibujo.drawImage(fondo, 0, 0);
}

function aleatorio() {
  x = Math.random() * (500 - 100) + 1;
  y = Math.random() * (500 - 100) + 1;
}

function dibujarObjetos() {
  for (let i = 0; i < 10; i++) {
    aleatorio();
    dibujo.drawImage(vaca, x, y);
    aleatorio();
    dibujo.drawImage(cerdo, x, y);
    aleatorio();
    dibujo.drawImage(pollo, x, y);
  }
}

function dibujarLobo() {
  dibujo.drawImage(lobo, xLobo, yLobo);
  document.addEventListener("keydown", moverLobo);
}

function moverLobo(key) {
  let movimiento = 10;
  let teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  };

  dibujo.clearRect(xLobo, yLobo, lobo.width, lobo.height);
  dibujo.drawImage(
    fondo,
    xLobo,
    yLobo,
    lobo.width,
    lobo.height,
    xLobo,
    yLobo,
    lobo.width,
    lobo.height
  );

  switch (key.keyCode) {
    case teclas.LEFT:
      xLobo = xLobo - movimiento;
      dibujarLobo();
      break;
    case teclas.UP:
      yLobo = yLobo - movimiento;
      dibujarLobo();
      break;
    case teclas.RIGHT:
      xLobo = xLobo + movimiento;
      dibujarLobo();
      break;
    case teclas.DOWN:
      yLobo = yLobo + movimiento;
      dibujarLobo();
      break;
  }
}
