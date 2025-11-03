const botonRegresar = document.getElementById("boton-regresar");
const botonSiguiente = document.getElementById("boton-siguiente");

botonRegresar.addEventListener("click", () => {
  const actual = window.location.pathname.split("/").pop();

    if (actual === "Ejercicio4.html") {
      window.location.href = "../../05Algoritmia/pages/Ejercicio3.html";
    } else if (actual === "Ejercicio5.html") {
      window.location.href = "Ejercicio4.html";
    } else if (actual === "Ejercicio6.html") {
      window.location.href = "Ejercicio5.html";
    } else if (actual === "Ejercicio6.html") {
      window.location.href = "Ejercicio5.html";
    } else if (actual === "Ejercicio7.html") {
      window.location.href = "Ejercicio6.html";
    } else if (actual === "Ejercicio8.html") {
      window.location.href = "Ejercicio7.html";
    } else if (actual === "Ejercicio9.html") {
      window.location.href = "Ejercicio8.html";
    }        
  });


botonSiguiente.addEventListener("click", () => {
  const actual = window.location.pathname.split("/").pop();

    if (actual === "Ejercicio4.html") {
      window.location.href = "Ejercicio5.html";
    } else if (actual === "Ejercicio5.html") {
      window.location.href = "Ejercicio6.html";
    } else if (actual === "Ejercicio6.html") {
      window.location.href = "Ejercicio7.html";
    } else if (actual === "Ejercicio7.html") {
      window.location.href = "Ejercicio8.html";
    } else if (actual === "Ejercicio8.html") {
      window.location.href = "Ejercicio9.html";
    } else if (actual === "Ejercicio9.html") {
      alert("¡Todos los ejercicios completados! \nPasando a la siguiente práctica");
      window.location.href = "../../07Ejercicios2/pages/Ejercicio10.html";
    }        
});



// Ejercicio 4
function validarNumero(e){
    var teclado = (document.all) ? e.keyCode : e.which; 
    if (teclado == 8) return true;
    var patron = /[0-9.]/; 
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
    document.getElementById("saldoI").value = "$" + total.toFixed(2); 
}

function borrarCampos4() {
    document.getElementById("mesesI").value = "";     
    document.getElementById("cantidadI").value = "";
    document.getElementById("saldoI").value = "";
}



// Ejercicio 5
function calcularSueldo() {
    var venta1 = parseFloat(document.getElementById("venta1").value);
    var venta2 = parseFloat(document.getElementById("venta2").value);
    var venta3 = parseFloat(document.getElementById("venta3").value);
    var sueldoBase = parseFloat(document.getElementById("sueldoBase").value);

    if (isNaN(venta1) || isNaN(venta2) || isNaN(venta3) || isNaN(sueldoBase)) {
    alert("Ingrese su sueldo base y las 3 ventas correctamente.");
    return;
  }

    var totalVentas = venta1 + venta2 + venta3;
    var comision = totalVentas * 0.1; 
    var totalAPagar = sueldoBase + comision;

    document.getElementById("comision").value = "$" + comision.toFixed(2);
    document.getElementById("sueldoTotal").value = "$" + totalAPagar.toFixed(2);
}

function borrarCampos5() {
    document.getElementById("venta1").value = "";
    document.getElementById("venta2").value = "";
    document.getElementById("venta3").value = "";
    document.getElementById("sueldoBase").value = "";
    document.getElementById("comision").value = "";
    document.getElementById("sueldoTotal").value = "";
}




//Ejercicio 6
function calcularDescuento() {
  let precio = parseFloat(document.getElementById("precio").value);
  let producto = document.getElementById("producto").value;

  if (producto.trim() === "" || isNaN(precio)) {
    alert("Ingrese el nombre del producto y su precio correctamente.");
    return;
  }

  let descuento = precio * 0.15;
  let total = precio - descuento;

  document.getElementById("descuento").value = "$" + descuento.toFixed(2);
  document.getElementById("total").value = "$" + total.toFixed(2);
}

function borrarCampos6() {
  document.getElementById("producto").value = "";
  document.getElementById("precio").value = "";
  document.getElementById("descuento").value = "";
  document.getElementById("total").value = "";
}



// Ejercicio 7
function calcularCalificacion() {
  let c1 = parseFloat(document.getElementById("c1").value);
  let c2 = parseFloat(document.getElementById("c2").value);
  let c3 = parseFloat(document.getElementById("c3").value);
  let trabajo = parseFloat(document.getElementById("trabajo").value);
  let examen = parseFloat(document.getElementById("examen").value);

  if ([c1, c2, c3, trabajo, examen].some(v => isNaN(v))) {
    alert("Por favor llena todos los campos correctamente.");
    return;
  }

  let promedioParciales = (c1 + c2 + c3) / 3;
  let finalParciales = promedioParciales * 0.55;
  let finalTrabajo = trabajo * 0.15;
  let finalExamen = examen * 0.30;

  let total = finalParciales + finalTrabajo + finalExamen;

  document.getElementById("resultado").value = total.toFixed(2);
}

function borrarCampos7() {
  document.getElementById("c1").value = "";
  document.getElementById("c2").value = "";
  document.getElementById("c3").value = "";
  document.getElementById("trabajo").value = "";
  document.getElementById("examen").value = "";
  document.getElementById("resultado").value = "";
}



//Ejercicio 8
function calcularPorcentajes() {
  let hombres = parseInt(document.getElementById("hombres").value);
  let mujeres = parseInt(document.getElementById("mujeres").value);

  if (isNaN(hombres) || isNaN(mujeres) || (hombres + mujeres) === 0) {
    alert("Ingresa cantidades válidas para hombres y mujeres.");
    return;
  }

  let total = hombres + mujeres;
  let porcentajeH = (hombres / total) * 100;
  let porcentajeM = (mujeres / total) * 100;

  document.getElementById("porHombres").value = porcentajeH.toFixed(2) + "%";
  document.getElementById("porMujeres").value = porcentajeM.toFixed(2) + "%";
}

function borrarCampos8() {
  document.getElementById("hombres").value = "";
  document.getElementById("mujeres").value = "";
  document.getElementById("porHombres").value = "";
  document.getElementById("porMujeres").value = "";
}



// Ejercicio 9
function calcularEdad() {
    const fecha = document.getElementById("fechaNacimiento").value;
    if (!fecha) {
        alert("Por favor, selecciona tu fecha de nacimiento");
        return;
    }

    const nacimiento = new Date(fecha);
    const hoy = new Date();
    
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    document.getElementById("edadResultado").value = edad + " años";
}

function borrarCampos9() {
    document.getElementById("fechaNacimiento").value = "";
    document.getElementById("edadResultado").value = "";
}