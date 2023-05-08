import listaJuegos from '../static/videojuegos.json';

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

document.getElementById('juegos').innerHTML = videojuegos.join('');
