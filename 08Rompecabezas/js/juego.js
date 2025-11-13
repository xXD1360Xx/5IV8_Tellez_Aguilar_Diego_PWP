//Nueva función y requerimiento funcional Contador de movimientos (RF2 ID del Excel y Jira)
var ultimaDireccion = null;
var dificultad = 5;
var mezclaInicialHecha = false;

function actualizarDificultad(valor) {
  dificultad = parseInt(valor);
  document.getElementById("valorDificultad").textContent = valor;
}

function calcularMovimientosPorDificultad() {
  if (dificultad === 0) return 6;
  if (dificultad === 1) return 8;
  return dificultad * 5;
}



//Nueva función Contador de movimientos (NuF1)
var contadorMovimientos = 0;
var juegoIniciado = false;
var mezclando = false;
var tiempo = 0;
var intervaloTiempo = null;
var pausado = false;

function iniciarCronometro() {
  detenerCronometro(); // por si hay uno activo
  tiempo = 0;
  actualizarTiempoDOM();
  pausado = false;
  intervaloTiempo = setInterval(function() {
    tiempo++;
    actualizarTiempoDOM();
  }, 1000);
}

function pausarCronometro() {
  const boton = document.getElementById("botonPausa");
  // permitir reanudar incluso si intervaloTiempo es null (estado pausado)
  if (!intervaloTiempo && !pausado) return;

  if (pausado) {
    // reanudar
    intervaloTiempo = setInterval(function() {
      tiempo++;
      actualizarTiempoDOM();
    }, 1000);
    if (boton) boton.textContent = "Pausar";
    pausado = false;
  } else {
    // pausar
    clearInterval(intervaloTiempo);
    intervaloTiempo = null;
    if (boton) boton.textContent = "Reanudar";
    pausado = true;
  }
}

function detenerCronometro() {
  if (intervaloTiempo) {
    clearInterval(intervaloTiempo);
  }
  intervaloTiempo = null;
  pausado = false;
}

function actualizarTiempoDOM() {
  const elemento = document.getElementById("valor-tiempo");
  if (!elemento) return;
  const minutos = Math.floor(tiempo / 60);
  const segundos = tiempo % 60;
  elemento.textContent = `${minutos}:${segundos < 10 ? "0" + segundos : segundos}`;
}


//NuFueva función Botón de regresar a menú (NuF2)
function irAlMenu() {
  window.location.href = "../../08Rompecabezas/index.html";
}

function irAlMenuPersonajes() {
  window.location.href = "../../12Examen/api.html";
}







//vamos a guardar dentro de una variable los movimientos del rompecabezas
var movimientos = [];

//vamos a crear una matriz para saber las posiciones del rompecabezas
var rompe = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//vamos a tener que crear una matriz donde tengamos las posiciones correctas

var rompeCorrecta = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

var piezas = [];

//necesito saber las coordenadas de la pieza vacia, la que se va a mover
var filaVacia = 2;
var columnaVacia = 2;

//necesitamos ahora si una funcion que se encargue de mostrar las intrucciones

var instrucciones = [
    "Utiliza las flechas de navegación para mover las piezas, ",
    "Para ordenar las piezas guiate<br>por la imagen objetivo. "
];


function mostrarInstrucciones(instrucciones){
    for(var i = 0; i < instrucciones.length; i++){
        mostrarInstruccionesLista(instrucciones[i], "lista-instrucciones");
    }
} 

//esta funcion se encarga de crear el componente li y agregar la lista de dichas instrucciones

function mostrarInstruccionesLista(instruccion, idLista){
    var ul = document.getElementById(idLista);
    var li = document.createElement("li");
    li.innerHTML = instruccion;
    ul.appendChild(li);
}

//vamos a crear una funcion para saber que gano
function checarSiGano(){
    for(var i = 0; i < rompe.length; i++){  
        for(var j = 0; j < rompe[i].length; j++){
            var rompeActual = rompe[i][j];
            if(rompeActual !== rompeCorrecta[i][j]){
                return false;
            }
        }
    }
    return true;
}

//mostrar en html si se gano
function mostrarCartelGanador() {
  if (checarSiGano()) {
    detenerCronometro(); 
    const mensaje = document.getElementById("mensajeMezclando");
    const ultimoMov = document.getElementById("ultimo-mov");

    if (ultimoMov) ultimoMov.style.display = "none";

    if (mensaje) {
      mensaje.style.display = "flex";
      mensaje.innerHTML = "<b>🎉 ¡Felicidades, ganaste el juego! 🎉</b>";
      mensaje.style.color = "#e63946"; // rojo del título
      mensaje.style.fontSize = "20px";
    }

    return true;
  }
  return false;
}


/*
    necesitamos una funcion que se encargue de poder intercambiar las posiciones de la pieza vacia vs cualquiera, para esto tenemos que hacer el uso de :
    arreglo[][] = posicion[][]
    //intercambiar
    poscion[][] = arreglo[][]
*/

function intercambiarPosicionesRompe(filaPos1, columnaPos1, filaPos2, columnaPos2){
    var pos1 = rompe[filaPos1][columnaPos1];
    var pos2 = rompe[filaPos2][columnaPos2];

    //intercambio
    rompe[filaPos1][columnaPos1] = pos2;
    rompe[filaPos2][columnaPos2] = pos1;
}

//que se encargue de saber donde esta la pieza vacia
function actualizarPosicionVacia(nuevaFila, nuevaColumna){
    filaVacia = nuevaFila;
    columnaVacia = nuevaColumna;
}

//necesitamos tambien limitar las posiciones del rompecabezas
function posicionValida(fila, columna){
    return (fila >= 0 && fila <= 2 && columna >= 0 && columna <= 2);
}

//debemos crear una funcion que se encargue del movimiento detectando el evento de las flechas de navegacion. 
//debemos crear una matriz de idenficacion de mov, 
//arriba 38, abajo 40, izquierda 37, derecha 39

var codigosDireccion = {
    IZQUIERDA : 37,
    ARRIBA : 38,
    DERECHA : 39,
    ABAJO : 40
};  //ES FORMATO JSON

function moverEnDireccion(direccion){
    var nuevaFilaPiezaVacia;
    var nuevaColumnaPiezaVacia;

    //si se mueve
    if(direccion === codigosDireccion.ABAJO){
        nuevaFilaPiezaVacia = filaVacia + 1;
        nuevaColumnaPiezaVacia = columnaVacia;
    } else if(direccion === codigosDireccion.ARRIBA){
        nuevaFilaPiezaVacia = filaVacia - 1;
        nuevaColumnaPiezaVacia = columnaVacia;
    } else if(direccion === codigosDireccion.DERECHA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia + 1;
    } else if(direccion === codigosDireccion.IZQUIERDA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia - 1;
    }   

    //solo mando a llamar a que la posicion sea valida
    if(posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)){
        //tengo que hacer una funcion que se encargue de intercambiar las posiciones
        intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        //tengo que guardar el ultimo movimiento

        ultimaDireccion = direccion;
        if (!mezclando) {
            actualizarUltimoMovimiento(direccion);
            actualizarContador();
        }
    }

}

function intercambiarPosiciones(fila1, columna1, fila2, columna2){
    var pieza1 = rompe[fila1][columna1];
    var pieza2 = rompe[fila2][columna2];

    //intercambio ya debe de ser por parte de los frames y el html
    intercambiarPosicionesRompe(fila1, columna1, fila2, columna2);
    //para el html
    intercambiarPosicionesDOM('pieza'+pieza1, 'pieza'+pieza2);
    
}

function intercambiarPosicionesDOM(idPieza1, idPieza2){
    var elementoPieza1 = document.getElementById(idPieza1);
    var elementoPieza2 = document.getElementById(idPieza2);

    //vamos a clonarlas
    var padre = elementoPieza1.parentNode;

    //lo clono
    var clonElemento1 = elementoPieza1.cloneNode(true);
    var clonElemento2 = elementoPieza2.cloneNode(true);

    //reemplazar a los padre con sus clones
    padre.replaceChild(clonElemento1, elementoPieza2);
    padre.replaceChild(clonElemento2, elementoPieza1);
}

//debo de actualizar los movimientos en el DOM
function actualizarUltimoMovimiento(direccion){
  const titulo = document.getElementById("tituloUltimoMov");
  const ultimoMovimiento = document.getElementById("flecha");
  if (!juegoIniciado || mezclando) return;
  if (!juegoIniciado) return; 

  titulo.style.display = "block";
  ultimoMovimiento.style.opacity = "1";

    switch(direccion){
        case codigosDireccion.ARRIBA:
            titulo.style.display = "block";
            ultimoMovimiento.textContent = "↑";
            break;
        case codigosDireccion.ABAJO:
            titulo.style.display = "block";
            ultimoMovimiento.textContent = "↓";
            break;
        case codigosDireccion.DERECHA:
            titulo.style.display = "block";
            ultimoMovimiento.textContent = "→";
            break;
        case codigosDireccion.IZQUIERDA:
            titulo.style.display = "block";
            ultimoMovimiento.textContent = "←";
            break;
    }
}

function actualizarContador() {
    if (!juegoIniciado) return; 

    if (contadorMovimientos === 0) {
      const mensaje = document.getElementById("mensajeMezclando");
      mensaje.style.display = "none";
    }

    contadorMovimientos++;
    document.getElementById("contador").textContent = contadorMovimientos;
    var contadorElemento = document.getElementById("contador");
    contadorElemento.textContent = contadorMovimientos;
}


function prepararYMezclar() {
  reiniciarRompecabezas();
  const mezclas = calcularMovimientosPorDificultad();
  const switchExperto = document.getElementById("modoExperto");
  const esPrincipiante = switchExperto.checked;

  if (esPrincipiante) {
    mezclarPiezas(mezclas);
  } else {
    mezclarInstantaneo();
  }
}


//poder mezclar todas las piezas

// devuelve true si dirA es opuesta a dirB
function esDireccionOpuesta(dirA, dirB) {
  return (dirA === codigosDireccion.ARRIBA && dirB === codigosDireccion.ABAJO) ||
         (dirA === codigosDireccion.ABAJO && dirB === codigosDireccion.ARRIBA) ||
         (dirA === codigosDireccion.IZQUIERDA && dirB === codigosDireccion.DERECHA) ||
         (dirA === codigosDireccion.DERECHA && dirB === codigosDireccion.IZQUIERDA);
}


function mezclarPiezas(veces){
    mezclando = true;
    document.getElementById("tituloUltimoMov").style.display = "none";
    document.getElementById("flecha").style.opacity = "0";
    const mensaje = document.getElementById("mensajeMezclando");
    const switchExperto = document.getElementById("modoExperto");
    const esPrincipiante = switchExperto.checked;

    if (mensaje) {
      mensaje.style.display = "block";
      mensaje.innerHTML = "Mezclando piezas...";
    }

    if(veces <= 0){
      if (esPrincipiante) {
        mensaje.innerHTML = "Piezas mezcladas correctamente <br> ¡Diviértete! Modo <b>Principiante</b> activado.";
      } else {
        mensaje.innerHTML = "Piezas mezcladas correctamente <br> Buena suerte... jugador <b>experto</b>.";
      }
        mezclando = false;
        juegoIniciado = true;
        contadorMovimientos = 0;
        document.getElementById("contador").textContent = contadorMovimientos;
        iniciarCronometro();
        return;
    }
     
    var direcciones = [codigosDireccion.ABAJO, codigosDireccion.ARRIBA, codigosDireccion.DERECHA, codigosDireccion.IZQUIERDA];
    var direccion;
    //definitemos la direccion a mover hasta que la ultima direccion NO sea su opuesta 
    do {
      direccion = direcciones[Math.floor(Math.random() * direcciones.length)];
    } while (ultimaDireccion && esDireccionOpuesta(direccion, ultimaDireccion));
    moverEnDireccion(direccion);
        ultimaDireccion = direccion;


    setTimeout(function(){
        mezclarPiezas(veces - 1);
    }, 100);
}

//necesitamos saber que teclas se estan oprimiendo
function capturarTeclas(){
    document.body.onkeydown = (function(evento){
        if(evento.which === codigosDireccion.ARRIBA || evento.which === codigosDireccion.ABAJO || evento.which === codigosDireccion.DERECHA || evento.which === codigosDireccion.IZQUIERDA){
            moverEnDireccion(evento.which);
            //saber si gane
            var gano = checarSiGano();
            if(gano){
                setTimeout(function(){
                    mostrarCartelGanador();
                }
                ,500);
            }
            evento.preventDefault();
        }
    });
}

//Reordenamos el puzzle antes de volver a mezclar con la dificultad escogida
function reiniciarRompecabezas() {
  rompe = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  filaVacia = 2;
  columnaVacia = 2;

  // Restablecer en el DOM
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const idPieza = "pieza" + rompe[i][j];
      const pieza = document.getElementById(idPieza);
      const contenedor = pieza.parentNode;
      contenedor.appendChild(pieza);
    }
  }
}

function mezclarInstantaneo() {
  mezclando = true;
  let mezclas = calcularMovimientosPorDificultad();
  const mensaje = document.getElementById("mensajeMezclando");


  for (let i = 0; i < mezclas; i++) {
    let direcciones = [
      codigosDireccion.ABAJO,
      codigosDireccion.ARRIBA,
      codigosDireccion.DERECHA,
      codigosDireccion.IZQUIERDA
    ];
    let direccion;
    do {
      direccion = direcciones[Math.floor(Math.random() * direcciones.length)];
    } while (ultimaDireccion && esDireccionOpuesta(direccion, ultimaDireccion));
    moverEnDireccion(direccion);
  }

  mezclando = false;
  mensaje.innerHTML = "Piezas mezcladas correctamente<br>Buena suerte... jugador <b>experto</b>.";
  juegoIniciado = true;
  contadorMovimientos = 0;
  document.getElementById("contador").textContent = contadorMovimientos
  document.getElementById("flecha").textContent = ""; 
  iniciarCronometro();
}


function cambiarModoExperto(checked) {
  const tablero = document.getElementById("juego");
  const mensaje = document.getElementById("mensajeMezclando");

  if (checked) {
    tablero.style.background = "linear-gradient(135deg, #4facfe, #00f2fe)";
  } else {
    tablero.style.background = "linear-gradient(135deg, #00c6ff, #0072ff)";
  }
    mensaje.style.display = "block";
    mensaje.innerHTML = "<b>Mezclando piezas...</b>";

 prepararYMezclar()

}


function iniciar(){
  document.getElementById("tituloUltimoMov").style.display = "none";
document.getElementById("flecha").style.opacity = "0";
  contadorMovimientos = 0;
  document.getElementById("contador").textContent = contadorMovimientos;
  const mensaje = document.getElementById("mensajeMezclando");

  if (mensaje) {
    mensaje.style.display = "block";
    mensaje.innerHTML = "Mezclando piezas...";
  }

  prepararYMezclar();
}


window.onload = function() {
  piezas = Array.from(document.querySelectorAll(".piezas"));
  const switchExperto = document.getElementById("modoExperto");
  cambiarModoExperto(switchExperto.checked); // sincroniza con el estado visual del switch
  capturarTeclas();
};

mostrarInstrucciones(instrucciones);

// mostrar imagen objetivo 
window.addEventListener("DOMContentLoaded", () => {
  const imagenSeleccionada = localStorage.getItem("imagenSeleccionada");
  const imagenObjetivo = document.getElementById("imagenObjetivo");
  imagenObjetivo.src = imagenSeleccionada;
});

// función para dividir la imagen 3x3 y colocarla en los divs menos la 9
function dividirImagenEnPiezas(imagenSrc, filas = 3, columnas = 3) {
    const img = new Image();
    img.crossOrigin = "anonymous"; // evita errores con imágenes externas

    img.onload = function () {
        const ancho = img.width;
        const alto = img.height;
        const piezaAncho = ancho / columnas;
        const piezaAlto = alto / filas;

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        let contador = 1;

        for (let fila = 0; fila < filas; fila++) {
            for (let col = 0; col < columnas; col++) {
                const divPieza = document.getElementById(`pieza${contador}`);

                if (contador === filas * columnas) {
                    if (divPieza) {
                        divPieza.innerHTML = ""; 
                        divPieza.classList.add("vacia");
                    }
                    contador++;
                    continue;
                }

                canvas.width = piezaAncho;
                canvas.height = piezaAlto;

                // dibujar la parte correspondiente de la imagen
                ctx.drawImage(
                    img,
                    col * piezaAncho, fila * piezaAlto, piezaAncho, piezaAlto,
                    0, 0, piezaAncho, piezaAlto
                );

                const dataUrl = canvas.toDataURL();

                // colocar la imagen recortada dentro del div
                if (divPieza) {
                    let imgTag = divPieza.querySelector("img");
                    if (!imgTag) {
                        imgTag = document.createElement("img");
                        divPieza.appendChild(imgTag);
                    }
                    imgTag.src = dataUrl;
                }

                contador++;
            }
        }
    };

    img.src = imagenSrc;
}

window.addEventListener("DOMContentLoaded", () => {
  const imagenSeleccionada = localStorage.getItem("imagenSeleccionada");
  const imagenObjetivo = document.getElementById("imagenObjetivo");
  imagenObjetivo.src = imagenSeleccionada;
  dividirImagenEnPiezas(imagenSeleccionada); 
});

