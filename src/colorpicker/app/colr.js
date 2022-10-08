const color = document.querySelector("#color");
const seleccion = document.querySelector("#salida");
color.addEventListener("input" , () => {
    const seleccion = color.value;
    salida.innerHTML = seleccion;
    salida.style.background = seleccion;
    salida.style.color = "#fff";
    // console.log(seleccion);
})
