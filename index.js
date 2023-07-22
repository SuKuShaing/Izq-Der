//Se inician las variables
let izq = new Audio('./Izquierda-v2.mp3');
let der = new Audio('./Derecha-v2.mp3');
var nActivado = 0; //Esta almacenará el número del temporizador
let tiempo_intervalo = 2000;

//Se inicializan los botones
btnIniciar.addEventListener('click', empezar);
btnDetener.addEventListener('click', detener);

//fc para aumentar y disminuir el intervalo de tiempo
// probar si el scope funciona y altera el intervalo mientras están en funcionamiento
// Estas fc tbm deben modificar le número que se muestra y corresponder con el tiempo

//Inicia el intervalo de reproducción
function empezar() {
    // Esta función activa el inicio del intervalo
    nActivado = setInterval(reproducir, tiempo_intervalo);
    console.log("Activado el intervalo, n°: " + nActivado)
    cambiarColor();
    //Se habilitan y deshabilitan los botones para solo presionarlos una vez 
    document.getElementById("btnIniciar").disabled = true;
    document.getElementById("btnDetener").disabled = false;
}

//Finaliza el intervalo de reproducción de audio
function detener() {
    clearInterval(nActivado);
    console.log("Se detuvo el intervalo");
    // document.getElementById("central").style.backgroundColor = "#DCDCDC";
    //Se habilitan y deshabilitan los botones para solo presionarlos una vez
    document.getElementById("btnIniciar").disabled = false;
    document.getElementById("btnDetener").disabled = true;
}

//Selecciona aleatoriamente si reproducir el audio de derecha o de izquierda
function reproducir() {
    if (Math.trunc(Math.random()*10) >= 5) {
        cambiarColor();
        izq.play();
    } else {
        cambiarColor();
        der.play();
    }
};

//Cambia el color del fondo
function cambiarColor() {
    let hex = ColorCode();
    document.getElementById("fondo").style.backgroundColor = `${hex}`;
    document.querySelector('meta[name="theme-color"]').setAttribute('content',  `${hex}`);
}

//genera el código de color aleatorio
function ColorCode() {
    var makingColorCode = '0123456789ABCDEF';
    var finalCode = '#';
    for (var counter = 0; counter < 6; counter++) {
       finalCode = finalCode + makingColorCode[Math.floor(Math.random() * 16)];
    };
    return finalCode;
}