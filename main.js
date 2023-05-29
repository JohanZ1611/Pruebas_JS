//alertas
// alert("hola soy johan");

//variables
let nombre = "Johan Zuluaga"; //*MEJOR RENDIMIENTO
nombre = "Alan Smith";

//Constantes
const altura = 187;
// altura = 186;
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
