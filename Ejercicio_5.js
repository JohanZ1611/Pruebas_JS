/*
    Enunciado Ejercicio 5:
    Dado un array de personas con nombres y apellidos
    crear una función para ordenar el array por los apellidos
    en orden alfabético
    
    Ejemplo:
    ordenarPorApellidos([
        "Víctor Robles",
        "Antonio Alcantara",
        "Al Pacino",
        "Robert DeNiro",
        "Brad Pitt",
        "Sylvester Stallone"
    ]);  
*/

const ordenarPorApellidos = [
  "Víctor Robles",
  "Antonio Alcantara",
  "Al Pacino",
  "Robert DeNiro",
  "Brad Pitt",
  "Sylvester Stallone",
];

// const RecorrerNombres = (NombreYapellido) => {
//   for (let nombre of NombreYapellido) {
//     let nombresSeparados = nombre.split(" ");
//     // console.log(nombresSeparados);
//     let apellidos = nombresSeparados[1];

//     return apellidos;
//   }
// };

// RecorrerNombres(ordenarPorApellidos);

// Función que compara los apellidos
const compararApellidos = (a, b) => {
  // Extrae los apellidos de cada elemento
  let apellidoA = a.split(" ")[1];
  let apellidoB = b.split(" ")[1];
  // Compara los apellidos alfabéticamente
  if (apellidoA < apellidoB) {
    return -1;
  }
  if (apellidoA > apellidoB) {
    return 1;
  }
  return 0;
};

// Ordena el array usando la función compararApellidos
ordenarPorApellidos.sort(compararApellidos);

console.log(ordenarPorApellidos); // ["Antonio Alcantara", "Robert DeNiro", "Al Pacino", "Brad Pitt", "Víctor Robles", "Sylvester Stallone"]
