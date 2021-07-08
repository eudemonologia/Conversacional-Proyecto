function conseguirComando(evento) {
  evento.preventDefault();

  miComando = document.querySelector("#consola").value;
  miComando = miComando.toUpperCase();

  document.querySelector("#consola").value = "";
}
