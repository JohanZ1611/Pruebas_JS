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

let superheroes = [
  {
    spiderman: {
      nombreReal: "Peter Parker",
      poderes: ["trepar paredes", "sentido arácnido", "lanzar telarañas"],
      equipo: "Avengers",
    },
  },
  {
    batman: {
      nombreReal: "Bruce Wayne",
      poderes: ["inteligencia", "artes marciales", "tecnología"],
      equipo: "Justice League",
    },
  },
  {
    wonderWoman: {
      nombreReal: "Diana Prince",
      poderes: ["fuerza", "velocidad", "lazo de la verdad"],
      equipo: "Justice League",
    },
  },
];

// console.log(superheroes);

const mostrarInformacionSuperheroe = (nombreHeroes) => {
  if (typeof nombreHeroes === "string") {
    let heroe = superheroes.find((obj) => obj[nombreHeroes]);
    if (heroe) {
      return heroe[nombreHeroes];
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

mostrarInformacionSuperheroe(["batman", "wonderWoman"]);
