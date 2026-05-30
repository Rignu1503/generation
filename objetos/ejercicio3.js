
function Reproductor() {
  this.estado = "detenido";

  this.play = function () {
    if (this.estado == "pausado" || this.estado == "detenido") {
      console.log("Reproduciendo música.");
      this.estado = "reproduciendo";
    } else if (this.estado == "reproduciendo")
      console.log("La música se está reproduciendo.");
  };

  this.pausar = function () {
    if (this.estado == "reproduciendo") {
      console.log("Se ha pausado la música.");
      this.estado = "pausado";
    } else if (this.estado == "pausado")
      console.log("no hay reproducciones en la lista de canciones.");
  };
  this.detener = function () {
    this.estado = "detenido";
    console.log("La música se ha detenido.");
  };
}

