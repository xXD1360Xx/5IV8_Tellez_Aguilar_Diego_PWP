const botonRegresar = document.getElementById("boton-regresar");
const botonSiguiente = document.getElementById("boton-siguiente");

botonRegresar.addEventListener("click", () => {
  const actual = window.location.pathname.split("/").pop();

    if (actual === "Ejercicio10.html") {
      window.location.href = "../../06Ejercicios/pages/Ejercicio9.html";
    } else if (actual === "Ejercicio11.html") {
      window.location.href = "Ejercicio10.html";
    } else if (actual === "Ejercicio12.html") {
      window.location.href = "Ejercicio13.html";
    } else if (actual === "Ejercicio13.html") {
      window.location.href = "Ejercicio12.html";
    }        
  });


botonSiguiente.addEventListener("click", () => {
  const actual = window.location.pathname.split("/").pop();

    if (actual === "Ejercicio10.html") {
      window.location.href = "Ejercicio11.html";
    } else if (actual === "Ejercicio11.html") {
      window.location.href = "Ejercicio12.html";
    } else if (actual === "Ejercicio12.html") {
      window.location.href = "Ejercicio13.html";
    } else if (actual === "Ejercicio13.html") {
      alert("¡Todos los ejercicios completados! \nRegresando al menú (index principal)");
      window.location.href = "../../index.html"
    }        
});



// Ejercicio 10
function OperarNumeros() {
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        let resultado;
    if (num1 === num2) {
            resultado = "Los numeros son iguales, asi que la multiplicacion es: " + (num1 * num2);
        } else if (num1 > num2) {
            resultado = "El primer numero es mayor que el segundo, asi que la resta es: " + (num1 - num2);
        } else {
            resultado = "El primer numero es menor que el segundo, asi que la suma es: " + (num1 + num2);
        }
        document.getElementById("resultado").innerText = resultado;
    });
}
    


// Ejercicio 11
function compararNumeros(){
    document.getElementById("boton-e11").addEventListener("click", () => {
        const n1 = parseFloat(document.getElementById("num1").value);
        const n2 = parseFloat(document.getElementById("num2").value);
        const n3 = parseFloat(document.getElementById("num3").value);
        const res = document.getElementById("resultado");

        if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
            res.textContent = "Por favor, ingresa los tres números.";
            return;
        }

        let mayor;

        if (n1 > n2 && n1 > n3) {
            mayor = n1;
        } else if (n2 > n1 && n2 > n3) {
            mayor = n2;
        } else {
            mayor = n3;
        }

        res.textContent = `El número mayor es: ${mayor}`;
    });

}


 
// Ejercicio 12
function calcularPago(){
    document.getElementById("boton-e11").addEventListener("click", () => {
        const horas = parseFloat(document.getElementById("horas").value);
        const pagoHora = parseFloat(document.getElementById("pagoHora").value);
        const res = document.getElementById("resultado");

        if (isNaN(horas) || isNaN(pagoHora)) {
            res.textContent = "Por favor ingresa horas trabajadas y pago por hora correctamente.";
            return;
        }

        let pagoTotal = 0;

        if (horas <= 40) {
            pagoTotal = horas * pagoHora;
        } else {
            const extra = horas - 40;
            if (extra <= 8) {
                pagoTotal = 40 * pagoHora + extra * pagoHora * 2;
            } else {
                pagoTotal = 40 * pagoHora + 8 * pagoHora * 2 + (extra - 8) * pagoHora * 3;
            }
        }

        res.textContent = `El pago total es: $${pagoTotal.toFixed(2)}`;
    });
}



// Ejercicio 13
function calcularUtilidades(){
    document.getElementById("boton-e12").addEventListener("click", () => {
        const salario = parseFloat(document.getElementById("salario").value);
        const antiguedad = parseFloat(document.getElementById("antiguedad").value);
        const res = document.getElementById("resultado");

        if (isNaN(salario) || isNaN(antiguedad) || salario < 0 || antiguedad < 0) {
            res.textContent = "Por favor ingresa salario y antigüedad válidos.";
            return;
        }

        let porcentaje = 0;

        if (antiguedad < 1) {
            porcentaje = 0.05;
        } else if (antiguedad >= 1 && antiguedad < 2) {
            porcentaje = 0.07;
        } else if (antiguedad >= 2 && antiguedad < 5) {
            porcentaje = 0.10;
        } else if (antiguedad >= 5 && antiguedad <= 10) {
            porcentaje = 0.15;
        } else {
            porcentaje = 0.20;
        }

        const utilidad = salario * porcentaje;
        res.textContent = `La utilidad anual es: $${utilidad.toFixed(2)}`;
    });
}

