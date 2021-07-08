function funComando() {
  let miMensaje = document.createElement("article");
  let iniciando = `<p>Iniciando <b>${miComando}</b>() <span>.</span><span>.</span><span>.</span></p>`;
  let mensaje;
  let mostrarComando = document.createElement("p");

  mostrarComando.innerHTML = `COMANDO:   <i>${miComando}</i>`;
  miMensaje.appendChild(mostrarComando);
  miMensaje.insertAdjacentHTML("beforeend", iniciando);

  mensaje = opciones(mensaje);

  miPizarra.appendChild(miMensaje);

  setTimeout(() => {
    miMensaje.insertAdjacentHTML("beforeend", mensaje);
  }, 750);
}
