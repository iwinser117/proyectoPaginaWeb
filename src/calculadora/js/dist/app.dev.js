"use strict";

console.log("hola");

function sumar() {
  var forma = document.getElementById("forma");
  var operandoA = forma["operandoA"];
  var operandoB = forma["operandoB"];
  var resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
  if (isNaN(resultado)) resultado = "la operacion le faltan numeros";
  document.getElementById("resultado").innerHTML = "resultado : ".concat(resultado);
  console.log("resultado : ".concat(resultado));
}