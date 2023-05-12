import home from "./pages/home.html";
import checkout from "./pages/checkout.html";
import Home from "./home";
import Checkout from "./checkout";

const rutas = {
  home: {
    path: "/",
    template: home,
    script: Home,
  },
  checkout: {
    path: "/checkout",
    template: checkout,
    script: Checkout,
  },
  error: {
    template: "<h2> No encontrado </h2>",
  },
};

export default rutas;
