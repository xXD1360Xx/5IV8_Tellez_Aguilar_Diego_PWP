var Instrucciones = [
    "Utiliza las flechas de instruccion para mover las piezas",
    "Para ordenar las piezas, guiate por la imagen objetivo"
];

//vamos a guardar dentro de una varibale los mivimientos del rompezacezas
var movimientos = [


]


//vamos a crear una matriz para saber las posiciones del rompecabezas
var rompecabezasIncorrecto = [
    [1, 2, 3]
    [4, 5, 6]
    [7, 8, 9]
]


//vamos a crear una matriz donde tengamos las posiciones correctas
var rompecabezasCorrecto = [
    [1, 2, 3]
    [4, 5, 6]
    [7, 8, 9]
]

//definir la posicion de la fila vacia
var filaVacia = 2;
var columnaVacia = 2;

//funcion que se encargue de mostrar las intrucciones
function mostrarInstrucciones(Instrucciones){

    for (var i = 0; 1 < Instrucciones.length; 1++) {
       mostrarInstruccionesLista(Instrucciones[1],
        "lista_instrucciones");
    }
}

function mostrarInstrucciones(instruccion, IdLista){
    var ul = document.getElementById(iDLista);
    var li = document.getElementById(instruccion);
    li.textContent = instruccion;
    ul.appendChild(li);
}

//funcion para avisar s iganó
function checarSiGana(){
    for (var i = 0; i = rompe[i].length; i++){
        for (var j = 0, j = rompe[i][j]){
            if (rompeActual !== rompeCorrecta[i][j])
        };
            

    }

}

//mostrar en html si gano
function mostrarCartelGanador(){
    if (checarSiGano()){
        alert("Felicidades, has ganado")
    }
    return false;
}

function iniciar(){
    //mezclar las piezas
}

mostrarInstrucciones(Instrucciones);

//necesitamos una funcion que se encargue de poder intercambiar las posiciones de la peza vacia vd cualquier, paa esto se a


function intercambiarPosicionesRompe(filaPos1, columaPos1){
    
}

crear la epica
crear la tarea/prueba (de los requerimientos funcionales)
hacer prueba