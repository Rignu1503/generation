const prompt = require("prompt-sync")();
const USUARIOS = require("./DDBB/DB");

const deposito = require("./funtions/suma");
const retiro = require("./funtions/resta");
const interesAnuales = require("./funtions/multiplicacion");
const calcularDolar = require("./funtions/divicion");

console.log(`
    Bienvenido a su cajero automatico
  `);

let valor;
let opcion = 0;
let pinIngresado = parseInt(prompt("Por favor ingrese su contraseña: "));
let usuarioEncontrado = USUARIOS.find((usuario) => usuario.pin == pinIngresado);

if (!usuarioEncontrado) {
  console.log(`
    Usuario no encontrado
    `);
  return;
}
do {

  console.log(`
    === Bienvenido ${usuarioEncontrado.nombre} ===

    Que operacion desea realizar

    1. Mostrar saldo
    2. Retirar dinero
    3. Depositar dinero
    4. Calcular interes anual
    5. Convertir saldo en dolares
    6. Salir
  `);

  opcion = parseInt(prompt("Ingrese una opcion: "));

  switch (opcion) {

    case 1:
      console.log(`
        Su saldo es ${usuarioEncontrado.saldo}
      `);
      break;

    case 2:
      valor = parseInt(prompt("Ingrese el valor de retiro: "));
      retiro(valor, usuarioEncontrado.id);
      break;

    case 3:
      valor = parseInt(prompt("Ingrese el valor del deposito: "));
      deposito(valor, usuarioEncontrado.id);
      break;

    case 4:
      let anios = parseInt(prompt("Ingrese la cantidad de años: "));
      interesAnuales(usuarioEncontrado.id, anios);
      break;

    case 5:
      calcularDolar(usuarioEncontrado.id);
      break;

    case 6:
      console.log(`Gracias por usar el cajero`);
      break;

    default:
      console.log(`
        ERROR
        Opcion no valida
      `);
  }

} while (opcion != 6);