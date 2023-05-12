import listaJuegos from "../static/videojuegos.json";

const Home = () => {
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
    const checkboxTotal = document.createElement("input");
    checkboxJuego.type = "checkbox";
    checkboxJuego.name = "juego-seleccionado";
    checkboxTotal.type = "checkbox";
    checkboxTotal.name = "total";

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

  let valorPresupuesto = 300;
  let valorJuegos = 0;
  let valorTotal = 0;

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

  const precioAcumulado = (event, precio) => {
    if (event.target.checked) {
      valorTotal += precio;
    } else {
      valorTotal -= precio;
    }
    total.innerText = "$" + valorTotal;
  };

  const restaPresupuesto = (event, precio) => {
    if (event.target.checked) {
      valorPresupuesto -= precio;
    } else {
      valorPresupuesto += precio;
    }

    if (valorPresupuesto < 0) {
      document.getElementById("botonCheckout").setAttribute("disabled", "");
    } else {
      document.getElementById("botonCheckout").removeAttribute("disabled");
    }

    presupuesto.innerText = "$" + valorPresupuesto;
  };

  const checkboxClick = (index) => {
    const precio = listaJuegos[index].precio;
    return (event) => {
      seleccionarJuego(event);
      precioAcumulado(event, precio);
      restaPresupuesto(event, precio);
    };
  };

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", checkboxClick(index));
  });
};

export default Home;
