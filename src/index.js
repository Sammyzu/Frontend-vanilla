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

const presupuesto = 300;

let juegosSeleccionados = 1;

let total = 60;

document.getElementById("presupuesto").innerText = "$" + presupuesto;

document.getElementById("juegos-seleccionados").innerText = juegosSeleccionados;

document.getElementById("total").innerText = "$" + total;

function hacerCheckout() {
  alert(
    "presupuesto:" +
      " " +
      presupuesto +
      "\n" +
      "Cantidad de juegos:" +
      " " +
      juegosSeleccionados +
      "\n" +
      "total:" +
      " " +
      total
  );
}

document.getElementById("juegos").innerHTML = videojuegos.join("");

const botonCheckout = document.querySelector(".checkout-btn");

botonCheckout.addEventListener("click", hacerCheckout);
