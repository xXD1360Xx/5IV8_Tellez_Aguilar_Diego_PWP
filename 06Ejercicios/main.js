// Ejercicio 1: Cálculo de interés 
function validarNumero(e){
    var teclado = (document.all) ? e.keyCode : e.which; 
    if (teclado == 8) return true; // Permitir borrar (backspace)
    var patron = /[0-9.]/; //Permitir solo números y punto decimal
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function calcularInteres(){
    var meses = document.getElementById("mesesI").value;
    var valor = document.getElementById("cantidadI").value;
    var parseo = parseFloat(valor);

    if (isNaN(parseo)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    switch (meses) {
        case "3":
            var interes = parseo * (0.085 * 3 / 12);
            break;
        case "6":
            var interes = parseo * (0.085 * 6 / 12);
            break;
        case "12":
            var interes = parseo * (0.085 * 12 / 12);
            break;
        case "18":
            var interes = parseo * (0.085 * 18 / 12);
            break;
        default:
            var interes = 0;
    }

    var total = interes + parseo; 
    document.getElementById("saldoI").value = "$" + total.toFixed(2); //limite a dos decimales
}

function borrarCampos() {
    document.getElementById("cantidadI").value = "";
    document.getElementById("saldoI").value = "";
}



// Ejercicio 2: Cálculo de comisión por ventas
function calcularComision() {
    var venta1 = parseFloat(document.getElementById("venta1").value);
    var venta2 = parseFloat(document.getElementById("venta2").value);
    var venta3 = parseFloat(document.getElementById("venta3").value);
    var sueldoBase = parseFloat(document.getElementById("sueldoBase").value);

    var totalVentas = venta1 + venta2 + venta3;
    var comision = totalVentas * 0.1; // 10% de comisión
    var totalAPagar = sueldoBase + comision;

    document.getElementById("resultadoComision").innerHTML = "Comisión: $" + comision.toFixed(2) + "<br>Total a pagar: $" + totalAPagar.toFixed(2);
}

function borrarCamposComision() {
    document.getElementById("venta1").value = "";
    document.getElementById("venta2").value = "";
    document.getElementById("venta3").value = "";
    document.getElementById("sueldoBase").value = "";
    document.getElementById("resultadoComision").innerHTML = "";
}

//en el ejericio dos se deben ingresar 3 ventas, un sueldo bse, y despues calcular el monto total, debe de aparecer cuanto cobra por comisión y la suma total

//en el ejercicio tres se debe ingresar un producto, con su precio y aplicarle el descuento del 15%, y sel sistema debe mostrar el precio del producto, el descuento y el total a pagar

//en el ejercicio cuatro se debe ingresar calificación 1, calificación 2 y calificaicón 3. Se aplicael propmedio y su porcentaje, se ingresa trabajo final y se aplica un porcentaje, y examen final y se aplica el porcentaje. 
//Se debe mostrar el total de califcicación 

//en el ejercicio 5 se debe ingresar cantidad de hombres y cantidad d emujeres, y mostrar su sp orentajes correspondientes 

//en el ejercicio 6 se debe calcular la edad de una persona