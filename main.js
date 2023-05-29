//alertas
// alert("hola soy johan");

//variables
let nombre = "Johan Zuluaga"; //*MEJOR RENDIMIENTO
nombre = "Alan Smith";

//Constantes
// const altura = 187;
let altura = 187;
const apellido = "Zuluaga";

//Mostrar en consola
console.log(nombre);
console.log(altura);

//Concatenacion
let concatenacion = nombre + " " + apellido;

//seleccionar elementos del dom
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <hr>
    <h1>Soy la caja de datos</h1>
    <h2>mi nombre es: ${nombre} ${apellido}</h2>
    <h2>mi nombre es: ${concatenacion}</h2>
    <h3>mido ${altura}cm</h3>
    `;

//Condiciones
altura = 180;

if (altura >= 185) {
  datos.innerHTML += "<h1>Eres una persona alta</h1>";
} else {
  datos.innerHTML += "<h1>Eres una persona bajita</h1>";
}

//Bucles
// for(inicializador; condicion;modificador)

for (let year = 2000; year <= 2023; year++) {
  datos.innerHTML += `<h2> Estamos en el año ${year}</h2>`;
}

//Array
let nombres = ["Victor", "Francisco", "Pepe"];

let divNombres = document.querySelector("#nombres");

// divNombres.innerHTML = nombres[0];

divNombres.innerHTML = "<h1>Listado de nombres</h1><ul>";

// nombres.forEach((nombre) => {
//   divNombres.innerHTML += "<li>" + nombre + "</li>";
// });

for (let nombre of nombres) {
  divNombres.innerHTML += "<li>" + nombre + "</li>";
}

divNombres.innerHTML += "</ul>";

// Funciones

const miInformacion = (nombre, altura) => {
  let misDatos = `
        <hr>
        <h1>Soy la caja de datos</h1>
        <h2>mi nombre es: ${nombre} ${apellido}</h2>
        <h2>mi nombre es: ${concatenacion}</h2>
        <h3>mido ${altura}cm</h3>
        `;

  return misDatos;
};

// console.log(miInformacion("johan", 173));

const Imprimir = () => {
  let datos = document.querySelector("#datos");
  datos.innerHTML = miInformacion("johan", 173);
};

Imprimir();
