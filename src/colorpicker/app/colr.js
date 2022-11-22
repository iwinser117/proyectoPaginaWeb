/* Selecting the input element with the id of color. */
const color = document.querySelector("#color");
/* Selecting the element with the id of salida. */
const seleccion = document.querySelector("#salida");

/* Listening for an input event and then changing the background color of the div to the color
selected. */
color.addEventListener("input" , () => {
    const seleccion = color.value;
    salida.innerHTML = seleccion;
    salida.style.background = seleccion;
    salida.style.color = "#fff";
    // console.log(seleccion);
})
