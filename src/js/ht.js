function ver() {
  document.getElementById("list").style.display = "block";
  document.getElementsByClassName("logoNav").style.display = "flex";
  document.getElementsByClassName("logoNav").style.display = "none";
}
function enviar(e) {
  console.log(e);
  e.preventDefault();
  alert("Datos enviados");
  e.target.reset();
}
function ocultar() {
  document.getElementById("list").style.display = "none";
  document.getElementsByClassName("logoClosed").style.display = "none";
  document.getElementsByClassName("logoNav").style.display = "flex";
}
function ocultarformulario() {
  document.getElementById("cont-form").style.display = "none";
}
function mostrarFormulario() {
  document.getElementById("cont-form").style.display = "block";
}

let mostrarTextBtn = document.getElementById("mostrarTextBtn");
let mostrarText = document.getElementById("mostrarText");

mostrarTextBtn.addEventListener("click", toogleMostrarText);

function toogleMostrarText() {
  mostrarText.classList.toggle("verList");
  if (mostrarText.classList.contains("verList")) {
    mostrarTextBtn.innerHTML = "Ver menos...";
  } else {
    mostrarTextBtn.innerHTML = "...Ver mas";
  }
}

function verDiv() {
  document.getElementById("divOculto").style.display = "block";
}
function ocultarDiv() {
  document.getElementById("divOculto").style.display = "none";
}

function menuMostrar() {
  document.getElementById("list").style.display = "flex";
  document.getElementById("btn-peque").style.display = "none";
}
function menuOcultar() {
  document.getElementById("list").style.display = "none";
  document.getElementById("btn-peque").style.display = "flex";
}

function goToNewVersion() {
  window.location.href = "https://iwinsersanchez.netlify.app";
}

function stayHere() {
  const notification = document.getElementById("notification");
  notification.classList.remove("show");
  notification.classList.add("hidden");
}

setTimeout(() => {
  const notification = document.getElementById("notification");
  notification.classList.remove("hidden");
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
    notification.classList.add("hidden");
  }, 15000);
}, 2000);
