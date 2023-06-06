/*

Enunciado Ejercicio 4:
Crea el juego del ahorcado.
El usuario tendrá que ir adivinando y descubriendo las letras de una palabra 
secreta, y tendrá 5 intentos (un intento por extremidad del cuerpo humano).
 
Utiliza el método de entrada de datos habitual de tu lenguaje,
en el caso de JS, usaremos la función prompt.
 
Ejemplo:
juegoDelAhorcado('victor');  
 
/Salida:
Adivina la letra: i
La palabra es: _i___
Te quedan 5 intentos

*/

function juegoDelAhorcado(palabraSecreta) {
  //Crear variable paabra oculta con guiones bajos
  let palabraOculta = "_".repeat(palabraSecreta.length);
  console.log(palabraOculta);

  //Variables con el numero de intentos que vamos a tener

  let intentos = 5;

  //Bucle para pedir letra que se va a ejecutar
  //mientras que no se haya adivinado todas las letras
  // y mientras aun queden intentos

  while (intentos > 0 && palabraOculta !== palabraSecreta) {
    //Pedimos una letra
    let letra = prompt("Adivina una letra");

    //Comprobar si la letra esta en la palabra par aactualizar
    //la variable palabra oculta

    if (palabraSecreta.includes(letra)) {
      //actualizar la palabra aculta
      // y meter la letra en la posicion correcta

      for (
        let contadorLetras = 0;
        contadorLetras < palabraSecreta.length;
        contadorLetras++
      ) {
        if (letra === palabraSecreta[contadorLetras]) {
          // Convertir la palabraOculta en un array
          let palabraOCultaArray = Array.from(palabraOculta);

          //Seleccionar su indice y cambiar _ por la letra adivinada
          palabraOCultaArray[contadorLetras] = letra;

          // unir el array en un string de nuevo
          // Actualizar la variable palabraCulta
          palabraOculta = palabraOCultaArray.join("");
        }
      }
    } else {
      // Si no existe la letra en la palabra entoces resto un intento
      intentos--;
    }

    // Mostrar el estado de la palabra oculta

    console.log(`la palabra es: ${palabraOculta}`);

    //Mostrar cuantos intentos quedan

    console.log(`Te quedan: ${intentos} intentos`);
  }

  //Cuando salga del bucle
  //Si se han adivinado todas las letras mostrar mensaje de victoria

  if (palabraOculta === palabraSecreta) {
    console.log(
      `¡EnHorabuena, has ganado! la palabra secreta era: ${palabraSecreta}`
    );
  } else {
    console.log(
      `lo siento,has perdido. La paabra secreta es: ${palabraSecreta}`
    );
  }
}

const lanzaJuego = document.querySelector("#lanzarJuego");

lanzaJuego.addEventListener("click", () => {
  juegoDelAhorcado("victor");
});
