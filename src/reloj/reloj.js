const background = document.getElementById("contenedor");

const getRandomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
}

const getRandomColor = () => {
    let h = getRandomNumber(360); //hue
    let s = getRandomNumber(100); //saturacion
    let l = getRandomNumber(100); //lightness

    const color_b = document.getElementById("contenedor").style.color;

    return [h,s,l];
    
}

const setBackgroundColor = () => {
    const randomColor = getRandomColor();
    background.style.transition = 'all 1s'
    background.style.backgroundColor = `hsl(${randomColor[0]}deg, ${randomColor[1]}%, ${randomColor[2]}%)`;
    if(randomColor[2]<15){
        document.getElementById("hora").style.color = "white";
        document.getElementById("fecha").style.color = "white";
    }else{
        document.getElementById("hora").style.color = "black";
        document.getElementById("fecha").style.color = "black";
    }
}

setBackgroundColor();

setInterval(() => {
    setBackgroundColor();
}, 2000);

const mostrarReloj= () => {
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = formatohora(fecha.getSeconds()); 
    document.getElementById("hora").innerHTML = `${hora}:${minutos}:${segundos}`;
    
    const meses =["ene", "feb", "mar", "abr", "may", "jun" , "jul", "ago", "sep", "oct", "nov", "dic"];
    const dias = ["dom", "lun", "mar", "mie" , "jue", "vie", "sab"];

    let diasSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diasSemana}, ${dia} ${mes}.`;
    document.getElementById(`fecha`).innerHTML = fechaTexto;

}
const formatohora = (horas) => {
    if (horas < 10 )
        horas = "0"+ horas;
        return horas;
}
setInterval(mostrarReloj, 1000);
