let listaNumerosSorteados = [];
let numeroMaximo = 11;
let numeroSecreto = generarNumeroSecreto();
let intentos = 0;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let unNumeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(unNumeroGenerado);
    console.log(listaNumerosSorteados);
    //Salir de la recursividad
    if(listaNumerosSorteados.length == numeroMaximo){
        //Hace la labor de validor y opción de escape  
        asignarTextoElemento("p", "ya se sotearon todos los numero posibles")
        return -1; 
    }else{
    //Si es numero generado  esta en la lista
        if(listaNumerosSorteados.includes(unNumeroGenerado)){ 
            //includes es un metodo que recorre la lista y busca al elemento
            return generarNumeroSecreto(); //ejemplo de recursividad 
        }else{
            listaNumerosSorteados.push(unNumeroGenerado);
            return unNumeroGenerado; 
        }                           
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

