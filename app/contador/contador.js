const dateActual = document.getElementById('verContador');
const resetContador = document.querySelector("reset");

let cActual = 0;

function resetear () {
  cActual = 0;
  return dateActual.innerHTML = 0;
}

function sumarUnoContador() {
  let o = 0;
  let r = o + 1;
  cActual += r;
  dateActual.innerHTML = `${cActual}`;
  return cActual;
}
function restarUnoContador (){
    let o = 0;
  let r = o - 1;
  cActual += r;
  dateActual.innerHTML = `${cActual}`;
  return cActual;
}