const USUARIOS = require("./../DDBB/DB");

function retiro(valor, id) {
  let usuario = USUARIOS.find((usuario) => usuario.id == id);

  if (usuario.saldo >= valor) {
    usuario.saldo -= valor;

    console.log(`Su nuevo saldo es ${usuario.saldo}`);
  } else {
    console.log(`
        Saldo insuficiente
        `);
  }
}

module.exports = retiro;
