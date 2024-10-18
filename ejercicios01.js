// Operadores de comparación

// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
    console.log('¿Es 10 mayor o igual que 9?', 10 >= 9);
}

// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    console.log('¿Es 0 igual a 0?', 0 === 0);
}

// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
    console.log('¿Es 7 mayor que 8 y menor que 10?', 7 > 8 && 7 < 10);
}

// Operadores lógicos

// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct() {
    const originalPrice = 1500;
    const discount = 0.25;
    const finalPrice = originalPrice * (1 - discount);
    const availableMoney = 1150;

    console.log(availableMoney >= finalPrice ? 'Puedes comprar el producto.' : 'No puedes comprar el producto.');
}

// Variables

// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    console.log('Hola JavaScript');
}

// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable() {
    console.log('La suma de 2 y 3 es:', 2 + 3); 
}

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
    const IS_DISABLED = true;
    console.log('¿Está deshabilitado?', IS_DISABLED);
}

// Null y Undefined

// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable() {
    console.log('Capacidad:', null);
}

// 9. Crea una variable con `let` llamada `dinero` y asígnale un valor `undefined`, luego imprime la variable en consola.
function createUndefinedVariable() {
    console.log('Dinero:', undefined);
}

// typeof

// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
function checkUserNameType() {
    console.log('El tipo de dato de userName es:', typeof "Juan");
}

// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString() {
    console.log('El tipo de dato de dogId es:', typeof String(12345));
}

// console.log()

// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage() {
    console.log('Este es un mensaje de prueba.');
}

// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge() {
    console.log('La edad es:', 30);
}

// 14. Muestra el mensaje 'La versión de JavaScript es' seguido de la variable `version` con el valor 2024 usando `console.log()`.
function logVersion() {
    console.log('La versión de JavaScript es', 2024);
}

// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
};

// Por Vania Ruiz Diaz Solis