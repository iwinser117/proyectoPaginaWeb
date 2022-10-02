const forma = document.getElementById(`forma`);
let operandoA = forma[`operandoA`];
let operandoB = forma[`operandoB`];




function sumar(){    
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if (isNaN(resultado))
        resultado = `la operacion le faltan numeros`;
    document.getElementById(`resultado`).innerHTML = `resultado de la suma es : ${resultado}`;
    console.log(`resultado de la suma es : ${resultado}`);
}



function restar(){
    let resultadoResta = parseInt(operandoA.value) - parseInt(operandoB.value);
    if (isNaN(resultadoResta))
        resultadoResta = `la operacion le faltan numeros`;
    document.getElementById(`resultadoResta`).innerHTML = `resultado de la resta es : ${resultadoResta}`;
    console.log(`resultado de la resta es : ${resultadoResta}`);
}
function multiplicar(){
    let resultadoMultiplicar = parseInt(operandoA.value) * parseInt(operandoB.value);
    if (isNaN(resultadoMultiplicar))
        resultadoMultiplicar = `la operacion le faltan numeros`;
    document.getElementById(`resultadoMultiplicar`).innerHTML = `resultado de la multiplicacion es : ${resultadoMultiplicar}`;
    console.log(`resultado de la multiplicacion es : ${resultadoMultiplicar}`);
}

function dividir(){
    let resultadoDivision= parseInt(operandoA.value) / parseInt(operandoB.value);
    if (isNaN(resultadoDivision))
        resultadoDivision = `la operacion le faltan numeros`;
    document.getElementById(`resultadoDivision`).innerHTML = `resultado de la division es : ${resultadoDivision}`;
    console.log(`resultado de la division es : ${resultadoDivision}`);
}

