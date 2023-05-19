import home from "./pages/home.html";
import checkout from "./pages/checkout.html";
import error from "./pages/error.html";
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
    template: error,
  },
};

export default rutas;
