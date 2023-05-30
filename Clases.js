//* Clases

class Coche {
  constructor(modelo, velocidad, antiguedad) {
    this.modelo = modelo;
    this.velocidad = velocidad;
    this.antiguedad = antiguedad;
  }

  aumentarVelocidad() {
    this.velocidad += 1;
  }

  reducirVelocidad() {
    this.velocidad -= 1;
  }
}

var coche1 = new Coche("BMW", 200, 2017);
var coche2 = new Coche("Audi", 100, 2018);
var coche3 = new Coche("Mercedes", 200, 2017);
var coche4 = new Coche("Renault", 200, 2017);

let datos = document.querySelector("#datos");
// datos.innerHTML = "<h1>Velocidad:" + coche1.velocidad + "</h1>";

coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();

// datos.innerHTML += "<h1>Velocidad:" + coche1.velocidad + "</h1>";

//*Herencia

//hereda todas las propiedades del padre(traer las cualidades de la clase padre a la clase hija)

class Autobus extends Coche {
  constructor(modelo, velocidad, antiguedad) {
    super(modelo, velocidad, antiguedad);
    this.altura = 5;
  }

  mostrarAltura() {
    return "la altura del bus es: " + this.altura;
  }
}

var autobus1 = new Autobus("pegasus", 200, 2017);
console.log(autobus1.mostrarAltura());
