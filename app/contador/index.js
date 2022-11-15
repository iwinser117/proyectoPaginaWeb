const h2 = document.querySelector("h2");
let cActual = 0;
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