// CORTE DE CONTROL MÁS ARRAYS SALE MEJOR PORQUE SE OPTIMIZAN ALGUNOS PROCESOS :)
// En realidad para poder mantener mejor en el tiempo

// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Función que recibe un número y verifica si es par o impar.
function verificarParidad(numero) {
    return numero % 2 === 0 ? "El número es par" : "El número es impar";
}

// Ejercicio 2: Condicionales anidados
// Función que clasifica la edad en "Menor de edad", "Adulto" o "Adulto mayor".
function clasificarEdad(edad) {
    if (edad < 18) return "Menor de edad";
    if (edad <= 65) return "Adulto";
    return "Adulto mayor";
}

// Ejercicio 3: Bucles while
// Función que imprime una cuenta regresiva desde el número dado hasta 0.
function cuentaRegresiva(numero) {
    let resultado = [];
    while (numero >= 0) {
        resultado.push(numero);
        numero--;
    }
    return resultado;
}

// Ejercicio 4: Bucles do-while
// Función que imprime "Estoy aprendiendo JavaScript" 5 veces.
function repetirMensaje() {
    let resultado = [];
    let contador = 0;
    do {
        resultado.push("Estoy aprendiendo JavaScript");
        contador++;
    } while (contador < 5);
    return resultado;
}

// Ejercicio 5: Bucle for
// Función que imprime todos los números pares entre 0 y el número dado.
function imprimirPares(numero) {
    let pares = [];
    for (let i = 0; i <= numero; i += 2) {
        pares.push(i);
    }
    return pares;
}

// Ejercicio 6: Uso de break
// Función que recorre los números del 1 al 10 y se detiene en el 6.
function detenerEnSeis() {
    let resultado = [];
    for (let i = 1; i <= 10; i++) {
        if (i === 6) break;
        resultado.push(i);
    }
    return resultado;
}

// Ejercicio 7: Uso de continue
// Función que recorre los números del 1 al 10 y se salta el 5.
function saltarCinco() {
    let resultado = [];
    for (let i = 1; i <= 10; i++) {
        if (i === 5) continue;
        resultado.push(i);
    }
    return resultado;
}

// Ejercicio 8: Switch básico
// Función que devuelve el día de la semana correspondiente (1 es "Lunes", 7 es "Domingo").
function obtenerDiaSemana(dia) {
    switch (dia) {
        case 1: return "Lunes";
        case 2: return "Martes";
        case 3: return "Miércoles";
        case 4: return "Jueves";
        case 5: return "Viernes";
        case 6: return "Sábado";
        case 7: return "Domingo";
        default: return "Número inválido";
    }
}

// Ejercicio 9: Switch con múltiples casos
// Función que determina si una letra es vocal (a, e, i, o, u).
function esVocal(letra) {
    switch (letra.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return "Es una vocal";
        default:
            return "No es una vocal";
    }
}

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Función que determina si todos los números son positivos, si al menos uno es negativo, o si todos son negativos.
function evaluarNumeros(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        return "Todos son positivos";
    }
    if (a < 0 || b < 0 || c < 0) {
        return "Al menos uno es negativo";
    }
    return "Todos son negativos";
}

// Exportar todas las funciones
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};


// Por Vania Ruiz Diaz Solis
