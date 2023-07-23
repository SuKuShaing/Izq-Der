//Se inician las variables
var nActivado = 0; //Esta almacenará el número del temporizador
let tiempo_intervalo = 2000;
let contador_izquierda = 0;
let contador_derecha = 0;

//Se inicializan los botones
btnIniciar.addEventListener('click', empezar);
btnDetener.addEventListener('click', detener);
btn_subir_tiempo.addEventListener('click', subir_tiempo);
btn_bajar_tiempo.addEventListener('click', bajar_tiempo);

//Se obtienen elementos
let izq = new Audio('./Izquierda-v2.mp3');
let der = new Audio('./Derecha-v2.mp3');
let tiempo_en_pantalla = document.getElementById("mostrar-tiempo");
let numIzq = document.getElementById("num_izq");
let numDer = document.getElementById("num_der");

// probar si el scope funciona y altera el intervalo mientras están en funcionamiento
// --> No se puede, se inicia con un delay y se queda con ese delay

//Aumentan y bajan el tiempo
function subir_tiempo() {
    tiempo_intervalo += 500;
    mostrarTiempo();
}
function bajar_tiempo() {
    tiempo_intervalo -= 500;
    mostrarTiempo();
}

//Muestra el tiempo en pantalla
function mostrarTiempo() {
    if (tiempo_intervalo <= 0) {
        tiempo_intervalo = 0;
        tiempo_en_pantalla.innerHTML = `${tiempo_intervalo}`;
        tiempo_intervalo = 500;
    } else {
        let showTime = tiempo_intervalo / 1000;
        tiempo_en_pantalla.innerHTML = ``;
        tiempo_en_pantalla.innerHTML = `${showTime.toFixed(1)}`;
    }
    detener();
}

//Inicia el intervalo de reproducción
function empezar() {
    // Esta función activa el inicio del intervalo
    nActivado = setInterval(reproducir, tiempo_intervalo);
    console.log("Activado el intervalo, n°: " + nActivado)
    cambiarColor();

    //Se habilitan y deshabilitan los botones para solo presionarlos una vez 
    document.getElementById("btnIniciar").disabled = true;
    document.getElementById("btnDetener").disabled = false;
    
    document.getElementById("btnIniciar").classList.add('inactive');
    document.getElementById("btnDetener").classList.remove('inactive');

}

//Finaliza el intervalo de reproducción de audio
function detener() {
    clearInterval(nActivado);
    console.log("Se detuvo el intervalo");
    
    //Se habilitan y deshabilitan los botones para solo presionarlos una vez
    document.getElementById("btnIniciar").disabled = false;
    document.getElementById("btnDetener").disabled = true;
    
    document.getElementById("btnIniciar").classList.remove('inactive');
    document.getElementById("btnDetener").classList.add('inactive');
}

//Selecciona aleatoriamente si reproducir el audio de derecha o de izquierda
function reproducir() {
    //determina la velocidad de reproducción
    if (tiempo_intervalo < 700) {
        izq.playbackRate = 3.5;
        der.playbackRate = 3.5;
    } else if (tiempo_intervalo < 1400) {
        izq.playbackRate = 2;
        der.playbackRate = 2;
    } else {
        izq.playbackRate = 1;
        der.playbackRate = 1;
    }

    //Entrega la aleatoriedad
    if (Math.trunc(Math.random()*10) >= 5) {
        cambiarColor();
        izq.play();
        aumentarIzq();
        console.log(`izq.playbackRate: ${izq.playbackRate}`)
    } else {
        cambiarColor();
        der.play();
        aumentarDer();
        console.log(`der.playbackRate: ${izq.playbackRate}`)
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

//Cuentan la cantidad de izq y der dichas
function aumentarIzq() {
    contador_izquierda ++;
    numIzq.innerHTML = ``;
    numIzq.innerHTML = `${contador_izquierda}`;
}
function aumentarDer() {
    contador_derecha ++;
    numDer.innerHTML = ``;
    numDer.innerHTML = `${contador_derecha}`;
}