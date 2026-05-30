function Libro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.prestado = false;

  this.prestar = function () {
    if (!this.prestado) {
      console.log(`el libro ${this.titulo} esta disponible, te lo prestamo`);
      this.prestado = true;
    } else {
      console.log(`el libro ${this.titulo} no esta disponible`);
    }
  };
}
