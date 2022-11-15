let limite = 10;
let a = 0;
let i = 1;
/* for (let a = 0; a < limite; a ++) {
    document.write(`contador vale  ${a} <br/>`)
    i = a;
} */


let cActual = 0;
function sumar () {
    let o = 0
    let r = o + 1
    
    cActual += r
console.log(cActual)
h2.innerHTML=`contador vale actualmete  ${cActual}`;
    return cActual;
}


const h2 = document.querySelector('h2');


