const h2 = document.querySelector("h2");
const resetContador = document.querySelector("reset");

let cActual = 0;

function resetear () {
  cActual = 0;
  return h2.innerHTML = 0;
}

function sumar() {
  let o = 0;
  let r = o + 1;
  cActual += r;
  h2.innerHTML = `${cActual}`;
  return cActual;
}
function restar (){
    let o = 0;
  let r = o - 1;
  cActual += r;
  h2.innerHTML = `${cActual}`;
  return cActual;
}