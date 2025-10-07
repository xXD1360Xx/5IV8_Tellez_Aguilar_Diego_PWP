function validarn(e){
    var teclado = (document.all) ? e.keycode : e.which; 
    if (teclado == 8) return true;
    var patron = /[0-9.]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);

}

//funcion para delimitar
function interes(){
    var valor = document.getElementById("cantidad1").value;

    var parseo = parseFloat(valor);

    var interes = parseo*(0.085); //limite a dos decimales

    var total = interes + parseo; 

    document.getElementById("saldoI").value = "$" + total; //limite a dos decimales

}

function borrar(){
    document.getElementById("saldoI").value = "";
    document.getElementById("cantidadI").value = "";
}


//del ejercicio, tenemos que agregar el campo número de meses y será una inversión de máximo 18 meses

//en el ejericio dos se deben ingresar 3 ventas, un sueldo bse, y despues calcular el monto total, debe de aparecer cuanto cobra por comisión y la suma total

//en el ejercicio tres se debe ingresar un producto, con su precio y aplicarle el descuento del 15%, y sel sistema debe mostrar el precio del producto, el descuento y el total a pagar

//en el ejercicio cuatro se debe ingresar calificación 1, calificación 2 y calificaicón 3. Se aplicael propmedio y su porcentaje, se ingresa trabajo final y se aplica un porcentaje, y examen final y se aplica el porcentaje. 
//Se debe mostrar el total de califcicación 

//en el ejercicio 5 se debe ingresar cantidad de hombres y cantidad d emujeres, y mostrar su sp orentajes correspondientes 

//en el ejercicio 6 se debe calcular la edad de una persona