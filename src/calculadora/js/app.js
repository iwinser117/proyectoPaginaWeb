const forma = document.getElementById(`forma`);
let operandoA = forma[`operandoA`];
let operandoB = forma[`operandoB`];


function sumar() {
  let resultado = parseFloat(operandoA.value) + parseFloat(operandoB.value);
  if (isNaN(resultado)) {
    document.getElementById("resultado").innerHTML =
      "la operacion le faltan numeros";
  } else if (Number.isInteger(resultado)) {
    document.getElementById(
      `resultado`
    ).innerHTML = `La suma de ${operandoA.value} y ${operandoB.value} es = ${resultado}`;
  } else {
    document.getElementById(`resultado`).innerHTML = `La suma de ${
      operandoA.value
    } y ${operandoB.value} es = ${resultado.toFixed(1)}`;
  }
}

function restar() {
  let resultadoResta =
    parseFloat(operandoA.value) - parseFloat(operandoB.value);
  if (isNaN(resultadoResta)) {
    document.getElementById("resultado").innerHTML =
      "la operacion le faltan numeros";
  } else if (Number.isInteger(resultadoResta)) {
    document.getElementById(
      `resultado`
    ).innerHTML = `La resta de ${operandoA.value} y ${operandoB.value} es = ${resultadoResta}`;
  } else {
    document.getElementById(`resultado`).innerHTML = `La resta de ${
      operandoA.value
    } y ${operandoB.value} es = ${resultadoResta.toFixed(1)}`;
  }
}
function multiplicar() {
  let resultadoMultiplicar =
    parseFloat(operandoA.value) * parseFloat(operandoB.value);
  if (isNaN(resultadoMultiplicar)) {
    document.getElementById("resultado").innerHTML =
      "la operacion le faltan numeros";
  } else if (Number.isInteger(resultadoMultiplicar)) {
    document.getElementById(
      `resultado`
    ).innerHTML = `La multiplicacion de ${operandoA.value} por ${operandoB.value} es = ${resultadoMultiplicar}`;
  } else {
    document.getElementById(`resultado`).innerHTML = `La multiplicacion de ${
      operandoA.value
    } por ${operandoB.value} es = ${resultadoMultiplicar.toFixed(2)}`;
  }
}

function dividir() {
  let resultadoDivision =
    parseFloat(operandoA.value) / parseFloat(operandoB.value);
  if (isNaN(resultadoDivision)) {
    document.getElementById("resultado").innerHTML =
      "la operacion le faltan numeros";
  } else if (Number.isInteger(resultadoDivision)) {
    document.getElementById(
      `resultado`
    ).innerHTML = `La division de ${operandoA.value} entre ${operandoB.value} es = ${resultadoDivision}`;
  } else {
    document.getElementById(`resultado`).innerHTML = `La division de ${
      operandoA.value
    } entre ${operandoB.value} es = ${resultadoDivision.toFixed(2)}`;
  }
}

function resetForm() {
  operandoA.value = "";
  operandoB.value = "";
  document.getElementById("resultado").innerHTML = "";
}
