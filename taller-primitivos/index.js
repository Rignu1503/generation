const prompt = require("prompt-sync")();

// Ejercicio 1
function ejercicioVariables() {
    let nombre = "Rigoberto";
    let edad = 22;
    let esEstudiante = true;

    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("¿Es estudiante?:", esEstudiante);
}

// Ejercicio 2
function ejercicioUndefinedNull() {
    let sinValor;
    let valorNulo = null;

    console.log("Variable undefined:", sinValor);
    console.log("Variable null:", valorNulo);
}

// 2. Ingreso de Datos por Teclado

// Ejercicio 1
function calcularEdad() {
    let anioNacimiento = prompt("Ingresa tu año de nacimiento:");
    let edad = 2026 - Number(anioNacimiento);

    console.log("Tu edad es:", edad);
}

// Ejercicio 2
function sumarNumeros() {
    let numero1 = Number(prompt("Ingresa el primer número:"));
    let numero2 = Number(prompt("Ingresa el segundo número:"));

    let suma = numero1 + numero2;

    console.log("La suma es:", suma);
}

// 3. Condicional if

// Ejercicio 1
function verificarEdad() {
    let edad = Number(prompt("Ingresa tu edad:"));

    if (edad >= 18) {
        console.log("Puedes entrar");
    } else {
        console.log("No puedes entrar");
    }
}

// Ejercicio 2
function verificarNumero() {
    let numero = Number(prompt("Ingresa un número:"));

    if (numero > 0) {
        console.log("Es positivo");
    } else if (numero < 0) {
        console.log("Es negativo");
    } else {
        console.log("Es cero");
    }
}

// 4. Bucle while=

// Ejercicio 1
function contarConWhile() {
    let numero = Number(prompt("Ingresa un número:"));
    let contador = 1;

    while (contador <= numero) {
        console.log(contador);
        contador++;
    }
}

// Ejercicio 2
function validarContrasena() {
    let contrasena = prompt("Ingresa la contraseña:");

    while (contrasena !== "1234") {
        contrasena = prompt("Contraseña incorrecta. Intenta nuevamente:");
    }

    console.log("Contraseña correcta");
}

//5. Bucle for

// Ejercicio 1
function imprimirNumeros() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// Ejercicio 2
function tablaMultiplicar() {
    let numero = Number(prompt("Ingresa un número:"));

    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

// ejercicioVariables();
// ejercicioUndefinedNull();
// calcularEdad();
// sumarNumeros();
// verificarEdad();
// verificarNumero();
// contarConWhile();
// validarContrasena();
// imprimirNumeros();
// tablaMultiplicar();