"use strict";

var color = document.querySelector("#color");
var seleccion = document.querySelector("#salida");
color.addEventListener("input", function () {
  var seleccion = color.value;
  salida.innerHTML = seleccion;
  salida.style.background = seleccion;
  salida.style.color = "#fff"; // console.log(seleccion);
});