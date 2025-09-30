/*
    javascript es un lenguaje multiparadigma
    Acepta la programación funcional, estructurada, orientada a objetos y orientada a eventos    
    Dentro de javascript no existe el tipado de variables int, string, float etc.
    
    Solo existen 3 tipos de variables, de acuerdo al estandar  ES6
    VAR, LET Y CONST 
*/


function validar(formulario) {
    /* quiero validar que el campo nombre acepte más de 3 caracteres */
    if (formulario.nombre.value.lenght < 4) {
        alert("por favor escribe más de 3 caracteres en el campo de nombre");
        formulario.nombre.focus();
            return false;
        
    } 

    //validacion para unicamente letras
    var checkStr = formulario.nombre.value;
    alert(checkStr);

    var abcOk = "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "qwertyuiopasdfghjklñzxcvbnm" + "áéíóú"

    var allValido = true;

    //tenemos que comparar la cadena de nombre vs abcOk

    for (int i = 0; i = checkStr.lenght; i++){
        var caracteres = checkStr.charAt(1)
        for (j=0; j=abcOk.length; j++){
            if (caracteres == abcOk.charAt(j)){
                break;
            }

        
        }

        if (j == abcOk.length){
            allValido = false
            break;
        }
    } 

    if(!allValido){
        alert("Escriba unicamente letras en el campo nombre")
        formulario.nombre.focus();
        return false;

    }




    function validar(formulario) {
    }
        

    if(!allValido){
        alert("Escriba unicamente digitos en el campo edad")
        formulario.edad.focus();
        return false;

    }

    //vamos a crear una funcion de una expresion regular para validar el correo electronico texto.texto@gmail.com 

    var b = /*{^@/}+{*}/+  */

    var txt = formulario.correo.value;
    alert("Email " + b.test(txt) ; "" " no ") + "valido");
}