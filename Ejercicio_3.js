/*

Enunciado Ejercicio 3:
Dadas dos fechas, crea una función que me proporcione la diferencia de dias
entre ellas
 
Ejemplo:
diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23

*/

/*
function diferenciaDeDias(fecha1, fecha2) {
  // separar la fecha por la ',' y tomar el ultimo valor que seria el dia

  const primeraFecha = fecha1.split(",")[0].split(" ")[1];
  const segundaFecha = fecha2.split(",")[0].split(" ")[1];

  // restar los dias para saber la diferencia de dias entre ellas

  const diferencia = primeraFecha - segundaFecha;

  // diferencia entre fechas

  return Math.abs(diferencia);
}

console.log(diferenciaDeDias("Dec 1, 2023", "Dec 24, 2023"));
*/

//!Resuelto

function diferenciaDeDias(fecha1, fecha2) {
  // Dar el formato correcto a las fechas

  fecha1 = fecha1 instanceof Date ? fecha1 : new Date(fecha1);
  fecha2 = fecha2 instanceof Date ? fecha2 : new Date(fecha2);

  // Obtener la diferencia en milisegundos entre las dos fechas

  const diferenciaEnMilisegundos = Math.abs(
    fecha1.getTime() - fecha2.getTime()
  );

  // Dividir la diferencia de milisegundos entre el numero de milisegundos
  // que tiene un dia y redondearla para sacar los dias

  const dias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));

  if (isNaN(dias)) {
    return "Formato de fecha incorrecto, usa el formato americano";
  }

  return "La diferencia son " + dias + " dias";
}

console.log(diferenciaDeDias("Dec 1, 2023", "Dec 24, 2023"));

console.log(diferenciaDeDias("3/3/2023", "20/3/2023"));
