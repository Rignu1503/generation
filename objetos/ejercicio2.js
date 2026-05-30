// Ejercicio 2 - Lista de Compras

function ListaCompras() {
    this.productos = [];
    this.agregar = function() {
        for (let i = 1; i <= 3; i++) {
            this.productos.push(prompt(`Digite el nombre del producto a agregar: `));
        }
    }
    this.mostrar = function() {
        for (let i = 0; i <= this.productos.length; i++) {
            console.log(i+1 + ". " + this.productos[i]);
        }
    }
}

let compra = new ListaCompras();
compra.agregar();
compra.mostrar();