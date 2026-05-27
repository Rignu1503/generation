const USUARIOS = require("./../DDBB/DB");

function deposito(valor, id) {
  let usuario = USUARIOS.find((usuario) => usuario.id == id);

  usuario.saldo += valor;

  console.log(`
    Su nuevo saldo es ${usuario.saldo}`
  );
}

module.exports = deposito;

