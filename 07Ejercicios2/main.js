// Ejercicio 10: Operar con dos números según su relación
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
                resultado = "El primer numero es menor que el segundo, asi quela suma es: " + (num1 + num2);
            }
            document.getElementById("resultado").innerText = resultado;
        });

}
    