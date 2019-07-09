/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const dataPoker = () => {
  const vacio = []; //arreglo vacìo
  for (let i = 0; i < POKEMON.pokemon.length; i++) {
    vacio.push({
      'img': POKEMON.pokemon[i].img,
      'name': POKEMON.pokemon[i].name,
      'num': POKEMON.pokemon[i].num,
    });
  }
  return vacio;
};
window.dataPoker = dataPoker; //

//Ordenar de la A-Z:
/*console.log(pokemon.name.sort());
const filtroAZ = () => {
  const nombrePk = [];
  const listaAZ = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  for (let i = 0; i < listaAZ.length; i++) {
    for (let x = 0; i < pokemon.length; x++) {
      if (listaAZ[i] === pokemon[x].name[0]) {
        nombrePk.push(pokemons[x]);
      }
    }
  }
  return nombrePk;
};*/


