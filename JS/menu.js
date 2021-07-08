function help() {
  let elMensaje = document.querySelector("#help").innerHTML;
  niveles = true;
  return elMensaje;
}

function menu() {
  let elMensaje = document.querySelector("#menu").innerHTML;
  return elMensaje;
}

function tonto() {
  console.log("eres un tonto");
  let elMensaje = `<p>Iniciando <span>.</span><span>.</span><span>.</span></p>`;
  niveles = false;
  return elMensaje;
}

function about() {
  let elMensaje = document.querySelector("#about").innerHTML;
  return elMensaje;
}

function restart() {
  let elMensaje = ``;
  setTimeout(function () {
    location.reload();
  }, 1500);
  return elMensaje;
}
