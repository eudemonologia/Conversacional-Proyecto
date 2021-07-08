function opciones(mensaje) {
  if (miComando == "HELP") {
    /* principales funciones */
    mensaje = help();
  } else if (miComando == "TONTO" && niveles == true) {
    mensaje = tonto();
  } else if (miComando == "MENU") {
    mensaje = menu();
  } else if (miComando == "ABOUT") {
    mensaje = about();
  } else if (miComando == "RESTART") {
    mensaje = restart();
  } else {
    mensaje = "<p>ERROR</p><p>Please, write HELP for more information.</p>";
  }
  return mensaje;
}
