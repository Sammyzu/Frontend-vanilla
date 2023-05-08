import listaJuegos from "../static/videojuegos.json";

const videojuegos = listaJuegos.map((juego) => {
  return `<div class="juego">
                <span class="titulo">
                    ${juego.titulo}
                </span>
                <span class="consola">
                    ${juego.consola}
                </span>
                <img src="${juego.imagen}" />
                <p>${juego.descripcion}</p>
                <em>$${juego.precio}</em>
            </div>
    `;
});

function hacerCheckout() {
  alert("Boton clickeado!");
}

const presupuesto = 300;

let juegosSeleccionados = 0;

let total = 0;

document.getElementById("presupuesto").innerText = "$" + presupuesto;

document.getElementById("juegos-seleccionados").innerText = juegosSeleccionados;

document.getElementById("total").innerText = "$" + total;

document.getElementById("juegos").innerHTML = videojuegos.join("");

const botonCheckout = document.querySelector(".checkout-btn");

botonCheckout.addEventListener("click", hacerCheckout);
