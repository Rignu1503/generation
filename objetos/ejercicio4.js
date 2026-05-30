const prompt = require("prompt-sync")();

function Carrito() {
  this.productos = [];
  this.total = 0;

  this.agregarProducto = function () {
    this.productos.push(prompt("Agregue el nombre del prodcuto: "));
    this.total += parseInt(prompt("ingrese el precio del producto: "));

  };
  this.calcularDescuento = function () {
    if (this.total > 100) {
      this.total = this.total - this.total * 0.1;
      console.log(`el valor con un descuento de 10% es ${this.total}`);

    } else if (this.total > 50 && this.total <= 100) {
      this.total = this.total - this.total * 0.05;
      console.log(`el valor con un descuento de 5% es ${this.total}`);

    } else {
      console.log(`Sin descuento el valor es: ${this.total}`);
    }
  };
}

let compra = new Carrito()
compra.agregarProducto()
compra.calcularDescuento()