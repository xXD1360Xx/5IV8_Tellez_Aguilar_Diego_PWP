
// Descripción: Crea una versión memorizada de una función para evitar repetir cálculos.

/**
 * @param {Function} fn - función original que se va a memorizar
 * @return {Function} - nueva función con memoria de resultados anteriores
 */
function memoizar(fn) {
  // Aquí se guardan los resultados previos
  const memoria = new Map();

  return function(...args) {
    const clave = JSON.stringify(args);

    // Si ya existe en la memoria, se devuelve sin volver a ejecutar
    if (memoria.has(clave)) {
      return memoria.get(clave);
    }
    const resultado = fn(...args);
    memoria.set(clave, resultado);
    return resultado;
  };
}

function probar(obtenerEntradas, fn) {
  let llamadas = 0;
  const fnContadora = (...args) => {
    llamadas++;
    return fn(...args);
  };

  const memorizada = memoizar(fnContadora);
  const resultados = [];
  const entradas = obtenerEntradas();

  for (const arr of entradas) {
    const val = memorizada(...arr);
    resultados.push({ val, calls: llamadas });
  }

  return resultados;
}

// Ejemplo 1
let entradas = () => [[2, 2], [2, 2], [1, 2]];
let fn = (a, b) => a + b;
console.log(probar(entradas, fn));

// Ejemplo 2
entradas = () => [[{}, {}], [{}, {}], [{}, {}]];
fn = (a, b) => ({ ...a, ...b });
console.log(probar(entradas, fn));

// Ejemplo 3
entradas = () => { 
  const o = {}; 
  return [[o, o], [o, o], [o, o]]; 
};
fn = (a, b) => ({ ...a, ...b });
console.log(probar(entradas, fn));
