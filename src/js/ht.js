
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
    document.getElementById('list').style.display = "block" ;
    document.getElementsByClassName('logoNav').style.display="flex";
    document.getElementsByClassName('logoNav').style.display = "none";

}
function ocultar() {
    document.getElementById('list').style.display = "none"
    document.getElementsByClassName('logoClosed').style.display = "none";
    document.getElementsByClassName('logoNav').style.display = "flex";
}




let mostrarTextBtn = document.getElementById('mostrarTextBtn');
let mostrarText = document.getElementById('mostrarText');

mostrarTextBtn.addEventListener('click', toogleMostrarText);

function toogleMostrarText(){
    mostrarText.classList.toggle('verList')
    if(mostrarText.classList.contains('verList')){
        mostrarTextBtn.innerHTML = 'Ver menos...'
    }else{
        mostrarTextBtn.innerHTML = '...Ver mas'
    }
}

function verDiv (){
    document.getElementById('divOculto').style.display = "block";
}
function ocultarDiv() {
    document.getElementById('divOculto').style.display = 'none';
}

function menuMostrar (){
    document.getElementById('list').style.display = 'flex';
    document.getElementById('btn-peque').style.display = 'none';
}
function menuOcultar (){
    document.getElementById('list').style.display = 'none';
    document.getElementById('btn-peque').style.display = 'flex';
}