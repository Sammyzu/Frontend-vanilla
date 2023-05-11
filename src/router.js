class Router {
  constructor(rutas) {
    this.rutas = rutas;
    this.iniciarRouter();
  }

  // Permite inicializar un router
  iniciarRouter() {
    const ruta = window.location.pathname || "/";
    const URI = ruta === "/" ? "home" : ruta.replace("/", "");
    this.cargarPagina(URI);
  }

  cargarPagina(page = "home") {
    const pagina = this.rutas[page] || this.rutas.error;
    const contenedor = document.getElementById("app");
    contenedor.innerHTML = pagina.template;
    if (pagina.script) {
      pagina.script();
    }
  }
}

export default Router;
