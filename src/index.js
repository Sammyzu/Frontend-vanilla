import listaJuegos from "../static/videojuegos.json";

// Crear la lista de videojuegos en el DOM (div class="juego")

const videojuegos = [];

for (let i = 0; i < listaJuegos.length; i++) {
  const contenedorJuegos = document.createElement("div");
  contenedorJuegos.className = "juego";
  const tituloJuego = document.createElement("span");
  const consolaJuego = document.createElement("span");
  const imagenJuego = document.createElement("img");
  const descripcionJuego = document.createElement("p");
  const precioJuego = document.createElement("em");
  const checkboxJuego = document.createElement("input");
  checkboxJuego.type = "checkbox";
  checkboxJuego.name = "juego-seleccionado";

  tituloJuego.className = "titulo";
  consolaJuego.className = "consola";
  tituloJuego.innerText = listaJuegos[i].titulo;
  consolaJuego.innerText = listaJuegos[i].consola;
  imagenJuego.src = listaJuegos[i].imagen;
  descripcionJuego.innerText = listaJuegos[i].descripcion;
  precioJuego.innerText = "$" + listaJuegos[i].precio;

  contenedorJuegos.appendChild(tituloJuego);
  contenedorJuegos.appendChild(consolaJuego);
  contenedorJuegos.appendChild(imagenJuego);
  contenedorJuegos.appendChild(descripcionJuego);
  contenedorJuegos.appendChild(precioJuego);
  contenedorJuegos.appendChild(checkboxJuego);
  videojuegos.push(contenedorJuegos);
}

const valorPresupuesto = 300;
let valorJuegos = 0;
let valorTotal = 60;

const presupuesto = document.getElementById("presupuesto");
const cantidadJuegos = document.getElementById("juegos-seleccionados");
const total = document.getElementById("total");
presupuesto.innerText = "$" + valorPresupuesto;
cantidadJuegos.innerText = valorJuegos;
total.innerText = "$" + valorTotal;

function hacerCheckout() {}

const juegos = document.getElementById("juegos");
videojuegos.forEach((juego) => {
  juegos.appendChild(juego);
});

// Listeners (Escuchadores?)

const botonCheckout = document.querySelector(".checkout-btn");
botonCheckout.addEventListener("click", hacerCheckout);

const checkboxes = document.querySelectorAll(
  "input[type=checkbox][name=juego-seleccionado]"
);

const seleccionarJuego = (event) => {
  if (event.target.checked) {
    valorJuegos += 1;
  } else {
    valorJuegos -= 1;
  }
  cantidadJuegos.innerText = valorJuegos;
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", seleccionarJuego);
});
