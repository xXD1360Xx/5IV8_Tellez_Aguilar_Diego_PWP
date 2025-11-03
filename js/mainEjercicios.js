// Temporizador 
let intervalo;
let enPausa = false;

function iniciarTemporizador() {
  const contenedor = document.getElementById("contenedor-tiempo");
  const tiempo = document.getElementById("valor-tiempo");
  const botonSiguientee = document.getElementById("boton-siguiente");
  const botonPausa = document.getElementById("boton-pausa");

  if (!contenedor || !tiempo || !botonSiguientee || !botonPausa) return;

  let tiempoRestante = parseInt(contenedor.dataset.tiempo) || 30;
  tiempo.textContent = tiempoRestante;

  intervalo = setInterval(() => {
    if (!enPausa) {
      tiempoRestante--;
      tiempo.textContent = tiempoRestante;

      if (tiempoRestante <= 0) {
        clearInterval(intervalo);
        botonSiguientee.click();
      }
    }
  }, 1000);

  botonPausa.addEventListener("click", () => {
    enPausa = !enPausa;
    botonPausa.textContent = enPausa ? "Reanudar" : "Pausar";
  });

}

window.addEventListener("load", iniciarTemporizador);

