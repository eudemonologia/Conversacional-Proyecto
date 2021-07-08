class Pakiman {
  constructor(nombre, vida, ataque) {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.imagen = new Image();
    this.imagen.src = pakimanes[this.nombre];
  }
  hablar() {
    alert(this.nombre);
  }
  mostrar() {
    lista.appendChild(this.imagen);
  }
}

let lista = document.querySelector(".lista");
let pakimanes = [];
pakimanes["Cauchin"] = vaca.src;
pakimanes["Pokacho"] = pollo.src;
pakimanes["Tocinauro"] = cerdo.src;
let cauchin = new Pakiman("Cauchin", 100, 30);
let pokacho = new Pakiman("Pokacho", 80, 50);
let tocinauro = new Pakiman("Tocinauro", 120, 40);

cauchin.mostrar();
pokacho.mostrar();
tocinauro.mostrar();
