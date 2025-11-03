const botonRegresar = document.getElementById("boton-regresar");
const botonSiguiente = document.getElementById("boton-siguiente");

botonRegresar.addEventListener("click", () => {
  const actual = window.location.pathname.split("/").pop();

  if (actual === "Ejercicio1.html") {
      window.location.href = "../index.html";
    } else if (actual === "Ejercicio2.html") {
      window.location.href = "Ejercicio1.html";
    } else if (actual === "Ejercicio3.html") {
      window.location.href = "Ejercicio2.html";
    }  
});
  

botonSiguiente.addEventListener("click", () => {
  const actual = window.location.pathname.split("/").pop();

    if (actual === "Ejercicio1.html") {
      window.location.href = "Ejercicio2.html";
    } else if (actual === "Ejercicio2.html") {
      window.location.href = "Ejercicio3.html";
    } else {
      alert("¡Todos los ejercicios completados! \nPasando a la siguiente práctica");
      window.location.href = "../../06Ejercicios/pages/Ejercicio4.html"
    }
});



// Ejercicio 1 
function invertirPalabra() {
  const input = document.getElementById("entrada-e1").value;
  const output = document.getElementById("salida-e1");

  if (input === "") {
    output.textContent = "Por favor, ingresa una palabra.";
    return;
  }

  const invertida = input.split("").reverse().join("");
  output.textContent = `Resultado: ${invertida}`;
}


 
// Ejercicio 2
function minimoProductoEscalar() {
  const x = [];
  const y = [];

  for (let i = 1; i <= 5; i++) {
    const inputX = document.getElementById(`entrada-x${i}`);
    const inputY = document.getElementById(`entrada-y${i}`);

    const xi = parseFloat(inputX.value);
    const yi = parseFloat(inputY.value);

    if (isNaN(xi) || isNaN(yi)) {
      document.getElementById("salida-e2").textContent =
        "Por favor, completa todos los campos numéricos.";
      return;
    }

    x.push(xi);
    y.push(yi);
  }

  x.sort((a, b) => a - b);
  y.sort((a, b) => b - a);

  let producto = 0;
  for (let i = 0; i < x.length; i++) {
    producto += x[i] * y[i];
  }

  document.getElementById("salida-e2").textContent =
    `Mínimo producto escalar: ${producto}`;
}



// Ejercicio 3
function palabraMasUnica() {
  const input = document.getElementById("entrada-e3").value.trim();
  const output = document.getElementById("salida-e3");

  if (input === "") {
    output.textContent = "Por favor, ingresa al menos una palabra.";
    return;
  }

  const palabras = input.split(",");
  let maxUnicos = 0;
  let palabraGanadora = "";

  for (let palabra of palabras) {
    palabra = palabra.trim().toUpperCase().replace(/[^A-Z]/g, "");
    const unicos = new Set(palabra);
    if (unicos.size > maxUnicos) {
      maxUnicos = unicos.size;
      palabraGanadora = palabra;
    }
  }

  output.textContent = `Palabra con más caracteres únicos: ${palabraGanadora} (${maxUnicos})`;
}
