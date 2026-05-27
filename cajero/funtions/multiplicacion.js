const USUARIOS = require("./../DDBB/DB");

function interesAnuales(id, anios) {
  let usuario = USUARIOS.find((usuario) => usuario.id == id);
  tasaAnual = 0.1; //10%

  let interesAnual = usuario.saldo * tasaAnual * anios;

  console.log(`
        Con su saldo de: ${usuario.saldo} el interes generado
        en ${anios} años seria de ${interesAnual}
        `);
}
module.exports = interesAnuales;
