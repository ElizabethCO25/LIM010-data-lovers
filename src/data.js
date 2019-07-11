/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

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
const porcentajePoke = (data, eclosion) => {
  let arrayPorcentaje = [];

  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].egg.length; x++) {
      if (data[i].egg[x] === eclosion) {
        arrayPorcentaje.push(data[i].egg[x]);
      }
    }
  }
  console.log(arrayPorcentaje);
  return arrayPorcentaje;
};


window.dataPoker = dataPoker;
window.filtrarDebil = filtrarDebil;
window.porcentajePoke = porcentajePoke;



