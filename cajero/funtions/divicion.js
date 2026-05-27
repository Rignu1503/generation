const USUARIOS = require("./../DDBB/DB");

function calcularDolar(id) {
  let usuario = USUARIOS.find((usuario) => usuario.id == id);

  dolar = usuario.saldo * 3.713;
  console.log(`
    SU saldo en dolar es de ${dolar}
    `);
}
module.exports = calcularDolar;
