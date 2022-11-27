const forma = document.getElementById(`forma`);
let operandoA = forma[`operandoA`];
let operandoB = forma[`operandoB`];

function sumar() {
  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
  if (isNaN(resultado)) {
    document.getElementById("resultado").innerHTML =
      "la operacion le faltan numeros";
  } else {
    document.getElementById(
      `resultado`
    ).innerHTML = `La suma de ${operandoA.value} y ${operandoB.value} es = ${resultado}`;
  }
}

function restar() {
  let resultadoResta = parseInt(operandoA.value) - parseInt(operandoB.value);
  if (isNaN(resultadoResta)) {
    document.getElementById("resultado").innerHTML =
      "la operacion le faltan numeros";
  } else {
    document.getElementById(
      `resultado`
    ).innerHTML = `La resta de ${operandoA.value} y ${operandoB.value} es = ${resultadoResta}`;
  }
}
function multiplicar() {
  let resultadoMultiplicar =
    parseInt(operandoA.value) * parseInt(operandoB.value);
  if (isNaN(resultadoMultiplicar)) {
    document.getElementById("resultado").innerHTML =
      "la operacion le faltan numeros";
  } else {
    document.getElementById(
      `resultado`
    ).innerHTML = `La multiplicacion de ${operandoA.value} por ${operandoB.value} es = ${resultadoMultiplicar}`;
  }
}

function dividir() {
  let resultadoDivision = parseInt(operandoA.value) / parseInt(operandoB.value);
  if (isNaN(resultadoDivision)) {
    document.getElementById("resultado").innerHTML =
      "la operacion le faltan numeros";
  } else {
    document.getElementById(
      `resultado`
    ).innerHTML = `La division de ${operandoA.value} entre ${operandoB.value} es = ${resultadoDivision}`;
  }
}

function resetForm() {
  operandoA.value = "";
  operandoB.value = "";
  document.getElementById("resultado").innerHTML = "";
  
}
