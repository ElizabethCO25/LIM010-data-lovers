/* Manejo de data */
//Funciòn para mostrar todos  pokemones:
const dataPoker = () => {
  const vacio = [];
  for (let i = 0; i < allPokemon.length; i++) {
    vacio.push({
      'img': allPokemon[i].img,
      'id': allPokemon[i].id,
      'name': allPokemon[i].name,
      'num': allPokemon[i].num,
    });
  }
  return vacio;
};
//FUNCIÓN PARA ORDENAR ALFABETICAMENTE:
const ordenadorAZ = (data, ordenNombre) => {
  const arrayNombre = data.slice().sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  });
  if (ordenNombre === 'ordenar-az') {
    return arrayNombre;
  }
  if (ordenNombre === 'ordenar-za') {
    return arrayNombre.reverse();
  }
  return 0;
};
//FUNCIÓN PARA ORDENAR POR SPAWNS:
const ordenadorSpaws = (data, ordenNombre) => {
  const arraySpawns = data.slice().sort((a, b) => {
    if (a.avg_spawns > b.avg_spawns) {
      return 1;  
    }
    if (a.avg_spawns < b.avg_spawns) {
      return -1;
    }
    return 0;
  });
  if (ordenNombre === 'asc') {
    return arraySpawns;
  }
  if (ordenNombre === 'des') {
    return arraySpawns.reverse();
  }
  return 0;
};
//Función para filtrar tipo de pokemones:
const filtrarTipo = (data, tipo) => {
  let arrayTipos = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].type.length; x++) {
      if (data[i].type[x] === tipo) {
        arrayTipos.push(data[i]);
      }
    }  }
  return arrayTipos;
};
//Función para filtrar debilidades de pokemones:
const filtrarDebil = (data, debilidad) => {
  let arrayDebilidad = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].weaknesses.length; x++) { 
      if (data[i].weaknesses[x] === debilidad) {
        arrayDebilidad.push(data[i]);
      }
    }
  }
  return arrayDebilidad;
};
//Función para mostrar eclosiòn de huevos por kilómetros , porcentajes:
const eggPoke = (data, eclosion) => {
  let arrayEgg = [];
  arrayEgg = data.filter(poke => (poke.egg === eclosion));
  return arrayEgg;
}

window.dataPoker = dataPoker;
window.ordenadorAZ = ordenadorAZ;
window.filtrarTipo = filtrarTipo;
window.filtrarDebil = filtrarDebil;
window.eggPoke = eggPoke;
