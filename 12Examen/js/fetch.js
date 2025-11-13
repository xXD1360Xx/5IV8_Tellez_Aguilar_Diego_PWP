let paginaActual = 1;
let filtroActivoEstado = "";
let filtroActivoGenero = "";
let filtroActivoProtagonista = "";

const contenedor = document.getElementById("contenedorPersonajes");
const textoPagina = document.getElementById("numeroPagina");
const botonAnterior = document.getElementById("botonAnterior");
const botonSiguiente = document.getElementById("botonSiguiente");

async function obtenerPaginaDePersonajes(numeroPagina) {

    let url = `https://rickandmortyapi.com/api/character?page=${numeroPagina}`;
    if (filtroActivoEstado) url += `&status=${filtroActivoEstado}`;
    if (filtroActivoGenero) url += `&gender=${filtroActivoGenero}`;

    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    let lista = datos.results || [];

    if (!datos.results || datos.results.length === 0) {
        contenedor.innerHTML = `
            <div class="mensaje-final">
                Ya se han mostrado todos los personajes disponibles.
            </div>`;
        textoPagina.textContent = `Fin de resultados`;
        return; 
    }

    if (filtroActivoProtagonista) {
        const nombreFiltro = filtroActivoProtagonista.toLowerCase();
        lista = lista.filter(p => p.name.toLowerCase().includes(nombreFiltro));
    }

    if (lista.length > 0) {
        mostrarPersonajes(lista);
        textoPagina.textContent = (filtroActivoEstado || filtroActivoGenero || filtroActivoProtagonista)
            ? `Página ${numeroPagina} (filtrada)`
            : `Página ${numeroPagina}`;
    } else {
        contenedor.innerHTML = `
            <div class="mensaje-final">
                En esta pagina no se han encontrado personajes que coincidan con tus filtros.
            </div>`;            
        textoPagina.textContent = `Sin resultados`;
        
    }
}

function mostrarPersonajes(lista) {
    contenedor.innerHTML = "";
    lista.forEach(personaje => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-personaje");
        tarjeta.innerHTML = `
            <img src="${personaje.image}" alt="${personaje.name}">
            <h3>${personaje.name}</h3>
        `;
        tarjeta.onclick = () => mostrarDetalle(personaje);
        contenedor.appendChild(tarjeta);
    });
}

function mostrarDetalle(personaje) {
    const panel = document.getElementById("panelDetalle");
    panel.classList.add("mostrar");
    document.getElementById("imagenDetalle").src = personaje.image;
    document.getElementById("nombreDetalle").textContent = personaje.name;
    document.getElementById("especieDetalle").textContent = personaje.species;
    document.getElementById("estadoDetalle").textContent = personaje.status;
    document.getElementById("generoDetalle").textContent = personaje.gender;
    document.getElementById("origenDetalle").textContent = personaje.origin.name;
    document.getElementById("ubicacionDetalle").textContent = personaje.location.name;
    localStorage.setItem("imagenSeleccionada", personaje.image);
}

document.getElementById("botonCerrar").onclick = () => {
    document.getElementById("panelDetalle").classList.remove("mostrar");
};

document.getElementById("botonPuzzle").onclick = () => {
    window.location.href = "../../08Rompecabezas/rompecabezasRickAndMorty.html";
}

botonSiguiente.onclick = () => {
    paginaActual++;
    obtenerPaginaDePersonajes(paginaActual);
};

botonAnterior.onclick = () => {
    if (paginaActual > 1) {
        paginaActual--;
        obtenerPaginaDePersonajes(paginaActual);
    }
};

const panelFiltros = document.getElementById("panelFiltros");
const botonFiltros = document.getElementById("botonFiltros");
const cerrarFiltros = document.getElementById("cerrarFiltros");
const aplicarFiltros = document.getElementById("aplicarFiltros");
const filtroEstado = document.getElementById("filtroEstado");
const filtroGenero = document.getElementById("filtroGenero");
const filtroProtagonista = document.getElementById("filtroProtagonista");

botonFiltros.onclick = () => panelFiltros.classList.add("mostrar");
cerrarFiltros.onclick = () => panelFiltros.classList.remove("mostrar");


aplicarFiltros.onclick = async () => {
    panelFiltros.classList.remove("mostrar");

    filtroActivoEstado = filtroEstado.value;
    filtroActivoGenero = filtroGenero.value;
    filtroActivoProtagonista = filtroProtagonista.value;

    paginaActual = 1;
    obtenerPaginaDePersonajes(paginaActual);
};

obtenerPaginaDePersonajes(paginaActual);

document.addEventListener("DOMContentLoaded", () => {
  const botonRegresar = document.getElementById("botonRegresar");

  botonRegresar.addEventListener("click", () => {
    // Aquí va lo que quieras que haga el botón
    console.log("Botón regresar presionado");


    window.location.href = "../../index.html";
  });
});