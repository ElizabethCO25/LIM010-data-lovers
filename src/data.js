/* Manejo de data */
// Funciòn para mostrar todos  pokemones:
const dataPoker = (data) => {
  const dataNueva = [];
  for (let i = 0; i < data.length; i++) {
    dataNueva.push({
      'img': data[i].img,
      'id': data[i].id,
      'name': data[i].name,
      'num': data[i].num,
      'type': data[i].type,
      'weaknesses': data[i].weaknesses,
      'multipliers': data[i].multipliers,
      'egg': data[i].egg,
      'avg_spawns': data[i].avg_spawns,
      'weight': data[i].weight,
      'height': data[i].height,
      'egg': data[i].egg,
    });
  }
  return dataNueva;
};

// FUNCIÓN PARA ORDENAR ALFABETICAMENTE:
const ordenadorAZ = (data, ordenNombre) => {
  const arrayNombre = data.slice().sort((aa, bb) => {
    if (aa.name > bb.name) {
      return 1;
    }
    if (aa.name < bb.name) {
      return -1;
    }
  });
  if (ordenNombre === 'ordenar-az') {
    return arrayNombre;
  }
  if (ordenNombre === 'ordenar-za') {
    return arrayNombre.reverse();
  }
};
// FUNCIÓN PARA ORDENAR POR SPAWNS:
const ordenadorSpaws = (data, ordenNombre) => {
  const arraySpawns = data.slice().sort((aa, bb) => {
    if (aa.avg_spawns > bb.avg_spawns) {
      return 1;
    }
    if (aa.avg_spawns < bb.avg_spawns) {
      return -1;
    }
  });
  if (ordenNombre === 'asc') {
    return arraySpawns;
  }
  if (ordenNombre === 'des') {
    return arraySpawns.reverse();
  }
};
// Función para filtrar tipo de pokemones:
const filtrarTipo = (data, tipo) => {
  let arrayTipos = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].type.length; x++) {
      if (data[i].type[x] === tipo) {
        arrayTipos.push(data[i]);
      }
    }
  }
  return arrayTipos;
};
// Función para filtrar debilidades de pokemones:
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
// Función para mostrar eclosiòn de huevos por kilómetros y porcentajes:
const eggPoke = (data, eclosion) => {
  let arrayEgg = [];
  arrayEgg = data.filter(poke => (poke.egg === eclosion));
  return arrayEgg;
};

window.dataPoker = dataPoker;
window.ordenadorAZ = ordenadorAZ;
window.ordenadorSpaws = ordenadorSpaws;
window.filtrarTipo = filtrarTipo;
window.filtrarDebil = filtrarDebil;
window.eggPoke = eggPoke;
