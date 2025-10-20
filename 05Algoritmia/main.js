//Ejercicio 1
function invertirPalabra() {
    const input = document.getElementById("e1-input").value;
    const output = document.getElementById("e1-output");

    if (input === "") {
        output.textContent = "Por favor, ingresa una palabra.";
        return;
    }

    const invertida = input.split("").reverse().join("");
    output.textContent = `Resultado: ${invertida}`;
}



//Ejercicio 2
function minimoProductoEscalar() {
    const x = [];
    const y = [];

    for (let i = 1; i <= 5; i++) {
        const xi = parseFloat(document.getElementById(`e2-x${i}`).value);
        const yi = parseFloat(document.getElementById(`e2-y${i}`).value);
        if (isNaN(xi) || isNaN(yi)) {
            document.getElementById("e2-output").textContent = "Por favor, llena todos los campos numéricos.";
            return;
        }
        x.push(xi);
        y.push(yi);
    }

    // Ordena x ascendente y y descendente para obtener el mínimo producto escalar
    x.sort((a, b) => a - b);
    y.sort((a, b) => b - a);

    let producto = 0;
    for (let i = 0; i < x.length; i++) {
        producto += x[i] * y[i];
    }

    document.getElementById("e2-output").textContent = `Mínimo producto escalar: ${producto}`;
}

//Ejercicio 3
function palabraMasUnica() {
    const input = document.getElementById("e3-input").value.trim();
    const output = document.getElementById("e3-output");

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

    output.textContent = `Palabra con más caracteres únicos: ${palabraGanadora} (${maxUnicos} caracteres únicos)`;
}
