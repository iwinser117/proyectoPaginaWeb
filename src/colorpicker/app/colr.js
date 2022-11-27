const color = document.getElementById("color");
const bgPalet = document.getElementById("cont-palet");
const seleccion = document.getElementById("salida");

const almacenamiento = localStorage.getItem("valorColor") || "#ffffff";
color.value = almacenamiento;

const setColor = () => {
  const value = color.value;
  salida.innerHTML = value;
  bgPalet.style.background = value;
};
const saveColors = (value) => {
  localStorage.setItem("valorColor", value);
};

setColor();

color.addEventListener("input", setColor);
color.addEventListener("change", () => saveColors(color.value));
