class Tarea {
  constructor(nombre, descripcion) {
    this._nombre = nombre;
    this._descripcion = descripcion;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }

  get descripcion() {
    return this._descripcion;
  }
  set descripcion(descripcion) {
    this._descripcion = descripcion;
  }
}

/* const tareas = [
  new Tarea("correr", "el dia de hoy"),
  new Tarea(
    "ajustar esta tareas",
    "por el momento no es responsive"
  ),
]; */
const tareas = [];

let icon = document.createElement('div');


function mostrarTareas() {
  let datos = "";
  for (let tar of tareas) {
    console.log(tar);
    datos += `
      <li>
      <div class="nombre">
      ${tar.nombre} 
      </div>
      
      <div class="descrptn">
        Descripcion: <br> 
        ${tar.descripcion}
        </div>
        <div class="icon">
          <i class="fa-solid fa-check"></i>
        </div>
      </li>
      
      `;
  }
  document.getElementById("tareas").innerHTML = datos;
}

function agregarTarea() {
  const formulario = document.forms["formulario"];
  const nombre = formulario["nombre"];
  const descripcion = formulario["descripcion"];
  if (nombre.value != "" && descripcion.value != "") {
    const tarea = new Tarea(nombre.value, descripcion.value);
    tareas.push(tarea);
    mostrarTareas();
    nombre.value = '';
    descripcion.value=''
  }
  else {
    alert("no hay nada que agregar")
  }
}
