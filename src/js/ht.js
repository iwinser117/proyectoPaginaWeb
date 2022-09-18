
// const divimg = document.getElementById('img-res');
// const imgRes = document.createElement('img');
// imgRes.setAttribute('src', '../images/perfil.jpg')
// divimg.append(img);


//ya crea la imagen a conformidad.
/* const c = document.getElementById('crear');

const j = document.createElement('img');
j.setAttribute('src', '/proyectoPaginaWeb/src/images/perfil.jpg')
c.append(j); */

//creando la interaccion del nav

function ver() {
    document.getElementById('list').style.display = "block"
    document.getElementById('logoyes').style.display="flex";
    document.getElementById('logo-nav').style.display = "none";

}
function ocultar() {
    document.getElementById('list').style.display = "none"
    document.getElementById('logoyes').style.display = "none";
    document.getElementById('logo-nav').style.display = "flex";
}