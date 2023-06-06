/*

Enunciado Ejercicio 1:

Dado un array de superheroes de Marvel, haz una programa que pueda 
mostrar la informacion de un superheroe.

y añade una capacidad de buscar la informacion de varios superheroes a la vez.


Ejemplo: 
mostrarInformacionSuperheroe('Iron Man');

salida:
Nombre real: Tony Stark
Poderes: Tecnologia avanzada, Movilidad aerea
Equipo: Los vengadores

Ejemplo 2:
mostrarInformacionSuperheroe([array de nombres]);

Salida: 
Muestra la informacion de todos los superheroes

*/

//*Solucion

/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal.
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 1:
Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
mostrar la información de un superheroe.
 
Y añade una capacidad de buscar la información de varios superhéroes a la vez.
 
Ejemplo:
mostrarInformacionSuperheroe('Iron Man');
 
Salida:
Nombre real: Tony Stark
Poderes: Tecnología avanzada, Movilidad aérea
Equipo: Los vengadores
 
Ejemplo 2: 
mostrarInformacionSuperheroes([array de nombres]]);
 
Salida:
Muestra la información de todos los superheroes
 
*/

// Crear array de objetos de superheroes marvel
const infoSuperheroes = {
  "Iron Man": {
    nombreReal: "Tony Stark",
    poderes: ["Tecnologia avanzada", "Movilidad aérea"],
    equipo: "Los vengadores",
  },
  "Capitán América": {
    nombreReal: "Steve Rogers",
    poderes: ["Fuerza sobrehumana", "Agilidad y reflejos sobresalientes"],
    equipo: "Los vengadores",
  },
  Thor: {
    nombreReal: "Thor Odinson",
    poderes: ["Mjolnir", "Viento y trueno"],
    equipo: "Los vengadores",
  },
  "Spider-Man": {
    nombreReal: "Peter Parker",
    poderes: ["Balanceo", "Telarañas pegajosas", "Sentido aracnido"],
    equipo: "Los vengadores",
  },
  Hulk: {
    nombreReal: "Bruce Banner",
    poderes: ["Fuerza sobrehumana", "Invulnerabilidad"],
    equipo: "Los vengadores",
  },
};

/*
const mostrarInformacionSuperheroe = (nombreHeroes) => {
  if (typeof nombreHeroes === "string") {
    let heroe = infoSuperheroes[nombreHeroes];
    if (heroe) {
      return heroe;
    } else {
      return "no se encontro siperheroe por ese nombre";
    }
  } else if (Array.isArray(nombreHeroes)) {
    for (let heroe of nombreHeroes) {
      console.log(mostrarInformacionSuperheroe(heroe));
    }
  } else {
    return " el parqmetro debe de ser un string o un array";
  }
};

mostrarInformacionSuperheroe(["Iron Man", "Spider-Man"]);
*/

//!Resuelto

function mostrarInformacionSuperheroe(aka) {
  // comprobar si el superheroe existe dentro del objeto
  console.log(`############### ${aka} ################`);

  if (aka in infoSuperheroes) {
    //Conseguir la info de ese super heroe
    const informacion = infoSuperheroes[aka];

    // Mostrar la info
    console.log(`Nombre real: ${informacion.nombreReal}`);
    console.log(`Poderes: ${informacion.poderes.join(", ")}`);
    console.log(`Equipo: ${informacion.equipo}`);
  } else {
    console.log(`${aka} no existe en los datos que tengo`);
  }
}

const mostrarInformacionSuperheroes = (aka) => {
  // Recorrer todos los nombres
  aka.forEach((nombre) => {
    // Mostrar la info (usar funcon anterior)
    mostrarInformacionSuperheroe(nombre);
  });
};

mostrarInformacionSuperheroes(["Iron Man", "Thor", "Joker"]);
