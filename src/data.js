/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const dataPoker = () => {
  const vacio = []; //arreglo vacìo
  for (let i = 0; i < POKEMON.pokemon.length; i++) {
    vacio.push({
      'img': POKEMON.pokemon[i].img,
      'id': POKEMON.pokemon[i].id,
      'name': POKEMON.pokemon[i].name,
      'num': POKEMON.pokemon[i].num,
    });
  }
  return vacio;
};
window.dataPoker = dataPoker; //

