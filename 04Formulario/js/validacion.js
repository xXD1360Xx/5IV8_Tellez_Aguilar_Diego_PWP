/*
    JavaScript es un lenguaje multiparadigma
    Acepta la programación funcional, estructurada, orientada a objetos y orientada a eventos.    
    Dentro de JavaScript no existe el tipado de variables int, string, float, etc.
    
    Solo existen 3 tipos de variables, de acuerdo al estándar ES6:
    VAR, LET y CONST
*/

function validar(formulario) {
    // Validar que el campo nombre no acepte menos de 3 caracteres
    if (formulario.nombre.value.length < 3) {
        alert("Por favor, escribe más de 3 caracteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    // Validación de que el nombre contenga solo letras (mayúsculas y minúsculas, incluyendo ñ)
    var nombre = formulario.nombre.value;
    var regexNombre = /^[a-zA-ZÑñ]+$/;

    if (!regexNombre.test(nombre)) {
        alert("Ingresa un nombre válido (solo letras)");
        formulario.nombre.focus();
        return false;
    }

    // Validación "solo números" para la edad
    var edad = formulario.edad.value;
    var regexEdad = /^[0-9]+$/;

    if (!regexEdad.test(edad)) {
        alert("Ingrese únicamente números en el campo edad");
        formulario.edad.focus();
        return false;
    }

    // Validación de correo electrónico
    var correo = formulario.correo.value;
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexCorreo.test(correo)) {
        alert("Ingrese un correo electrónico válido");
        formulario.correo.focus();
        return false;
    }

    return true;
}
