const Checkout = () => {
  const juegosSeleccionados = JSON.parse(
    localStorage.getItem("juegosSeleccionados")
  );

  console.log("Juegos Seleccionados => ", juegosSeleccionados);
};

export default Checkout;
