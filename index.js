//Se inician las variables
let izq = new Audio('./Izquierda-v2.mp3');
let der = new Audio('./Derecha-v2.mp3');
var nActivado = 0; //Esta almacenará el número del temporizador

//Se inicializan los botones
btnIniciar.addEventListener('click', empezar);
btnDetener.addEventListener('click', detener);

//Las fcs
function empezar() {
    // Esta función activa el inicio del intervalo
    nActivado = setInterval(reproducir, 2000);
    console.log("Activado el intervalo, n°: " + nActivado)
    cambiarColor();
    //Se habilitan y deshabilitan los botones para solo presionarlos una vez 
    document.getElementById("btnIniciar").disabled = true;
    document.getElementById("btnDetener").disabled = false;
}

function reproducir() {
    //Selecciona aleatoriamente si reproducir el audio de derecha o de izquierda
    if (Math.trunc(Math.random()*10) >= 5) {
        cambiarColor();
        izq.play();
    } else {
        cambiarColor();
        der.play();
    }
};

function detener() {
    //Finaliza el intervalo de reproducción de audio
    clearInterval(nActivado);
    console.log("Se detuvo el intervalo");
    document.getElementById("central").style.backgroundColor = "#DCDCDC";
    document.getElementById("btnIniciar").disabled = false;
    document.getElementById("btnDetener").disabled = true;
}

function cambiarColor() {
    //Cambia el color del fondo
    let hex = ColorCode();
    document.getElementById("central").style.backgroundColor = `${hex}`;
}

function ColorCode() {
    //genera el codigo de color aleatorio
    var makingColorCode = '0123456789ABCDEF';
    var finalCode = '#';
    for (var counter = 0; counter < 6; counter++) {
       finalCode = finalCode + makingColorCode[Math.floor(Math.random() * 16)];
    };
    return finalCode;
}