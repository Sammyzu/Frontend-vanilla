import home from "./pages/home.html";
import checkout from "./pages/checkout.html";
import Home from "./home";

const rutas = {
  home: {
    path: "/",
    template: home,
    script: Home,
  },
  checkout: {
    path: "/checkout",
    template: checkout,
  },
  error: {
    template: "<h2> No encontrado </h2>",
  },
};

export default rutas;
