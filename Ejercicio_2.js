/*

Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique
 
Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas


*/

function simplificarRuta(ruta) {
  // Crear variable pila para almacenar las partes de la ruta

  let pila = [];

  // Dividir la ruta en sus diferentes partes utilizando el separador /

  const partes = ruta.split("/");

  // Recorrre cada parte
  for (const parte of partes) {
    // si la parte es .. quito el ultimo elemento
    if (parte == "..") {
      pila.pop();
    }

    // si la parte es diferente a "." a ".." o a una cadena vacia,entonces guardo esa en la pila
    else if (parte !== "." && parte !== "") {
      pila.push(parte);
    }
  }

  return "/" + pila.join("/");
}

console.log(simplificarRuta("/home/")); // Salida: /home
console.log(simplificarRuta("/x/./y/../../z/")); // Salida: /z
console.log(simplificarRuta("/../")); // Salida: /
console.log(simplificarRuta("/home//pruebas/")); // Salida: /home/pruebas
