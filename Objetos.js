//*Objetos

var coche = {
  modelo: "Mercedes Clase A",
  maxima: 500,
  antiguedad: 2020,
  mostratDatos() {
    console.log(this.modelo, this.maxima, this.antiguedad);
    console.log(this.modelo, this.maxima, this.antiguedad);
    console.log(this.modelo, this.maxima, this.antiguedad);
    console.log(this.modelo, this.maxima, this.antiguedad);
  },
  propiedad1: "valor aleatoreo",
};

let datos = document.querySelector("#datos");
datos.innerHTML = "<h1>" + coche.antiguedad + "</h1>";

coche.mostratDatos();

console.log(coche);

//* Promesas

var saludar = new Promise((resolve, reject) => {
  setTimeout(() => {
    let saludo = "hola muy buenas a todos!!!";

    // saludo = false;

    if (saludo) {
      resolve(saludo);
    } else {
      reject("No hay saludo disponible");
    }
  }, 2000);
});

saludar
  .then((resultado) => {
    alert(resultado);
  })
  .catch((err) => {
    alert(err);
  });
