/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const dataPoker = () => {
  const vacio = []; //arreglo vacìo
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
  const arrayNombre = data.slice().sort((a,b) => {
    if (a.name > b.name) {
      return 1;
    }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
  });
  if (ordenNombre === 'ordenar-az'){
    return arrayNombre;
  }
  if (ordenNombre === 'ordenar-za'){
    return arrayNombre.reverse();
  }
  return 0;
};

//FUNCIÓN PARA ORDENAR POR SPAWNS:
const ordenadorSpaws = (data, ordenNombre) => {
  const arraySpawns = data.slice().sort((a,b) => {
    if (a.avg_spawns > b.avg_spawns) {
      return 1;
    }
      if (a.avg_spawns < b.avg_spawns) {
        return -1;
      }
      return 0;
  });
  if (ordenNombre === 'asc'){
    return arraySpawns;
  }
  if (ordenNombre === 'des'){
    return arraySpawns.reverse();
  }
  return 0;
};



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


window.ordenadorAZ = ordenadorAZ;
window.dataPoker = dataPoker;
window.filtrarDebil = filtrarDebil;




