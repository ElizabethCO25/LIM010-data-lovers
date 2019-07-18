/* Manejo del DOM */
// Declarando variables
const obtenerClick = document.getElementById('boton-ingresar');
const capturarContraseña = document.getElementById('input-contrasena');
const capturarUsuario = document.getElementById('input-usuario');
const allPokemon = POKEMON.pokemon;
const contenedorPokemon = document.getElementById('contenedor-pokemon');

let cuenta = 2;
//
obtenerClick.addEventListener('click', () => {
  if (capturarContraseña.value === '1' && capturarUsuario.value === '1') {
    document.getElementById('pantalla-inicio').classList.remove('ocultar');
    document.getElementById('header').classList.remove('ocultar');
    document.getElementById('pantalla-login').classList.add('ocultar');
    capturarContraseña.value = '';
    capturarUsuario.value = '';
  } else if (cuenta === 0) {
    document.getElementById('pantalla-bloqueo').classList.remove('ocultar');
    document.getElementById('pantalla-login').classList.add('ocultar');
    capturarContraseña.value = '';
  } else {
    document.getElementById('incorrecto').innerHTML = 'Contraseña o usuario incorrecto,intenta otra vez';
    capturarContraseña.value = '';
    cuenta--;
  }
});

// Función ENTER:
let enterIniciar = document.getElementById('input-contrasena');
enterIniciar.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('boton-ingresar').click();
  }
});

// Pantalla 2:
// Configuración de botones dle menú desplegable:
// Botón INICIO:
const clickInicio = document.getElementById('inicio');
clickInicio.addEventListener('click', () => {
  document.getElementById('pantalla-pokedex').classList.add('ocultar');
  document.getElementById('pantalla-inicio').classList.remove('ocultar');
  document.getElementById('header').classList.remove('ocultar');
});
// Botón POKEDEX:
const clickPokedex = document.getElementById('pokedex');
clickPokedex.addEventListener('click', () => {
  document.getElementById('pantalla-pokedex').classList.remove('ocultar');
  document.getElementById('pantalla-inicio').classList.add('ocultar');
  document.getElementById('atrapados').classList.remove('ocultar');
  document.getElementById('no-atrapados').classList.remove('ocultar');
  document.getElementById('lista-debilidades').classList.add('ocultar');
  document.getElementById('lista-ordenamiento').classList.add('ocultar');
  document.getElementById('lista-incubadora').classList.add('ocultar');
  document.getElementById('header').classList.remove('ocultar');
  document.getElementById('porcentaje').classList.add('ocultar');
  document.getElementById('opciones-contenedor').classList.add('ocultar');
});
// Botón ORDENAR:
const clickOrdenar = document.getElementById('orden');
clickOrdenar.addEventListener('click', () => {
  document.getElementById('pantalla-pokedex').classList.remove('ocultar');
  document.getElementById('pantalla-inicio').classList.add('ocultar');
  document.getElementById('atrapados').classList.add('ocultar');
  document.getElementById('no-atrapados').classList.add('ocultar');
  document.getElementById('lista-ordenamiento').classList.remove('ocultar');
  document.getElementById('lista-debilidades').classList.add('ocultar');
  document.getElementById('lista-incubadora').classList.add('ocultar');
  document.getElementById('header').classList.remove('ocultar');
  document.getElementById('porcentaje').classList.add('ocultar');
  document.getElementById('opciones-contenedor').classList.add('ocultar');
});
// Botón FILTRAR:
const clickFiltrar = document.getElementById('filtrar');
clickFiltrar.addEventListener('click', () => {
  document.getElementById('pantalla-pokedex').classList.remove('ocultar');
  document.getElementById('atrapados').classList.add('ocultar');
  document.getElementById('no-atrapados').classList.add('ocultar');
  document.getElementById('lista-ordenamiento').classList.add('ocultar');
  document.getElementById('lista-debilidades').classList.remove('ocultar');
  document.getElementById('opciones-contenedor').classList.remove('ocultar');
  document.getElementById('pantalla-inicio').classList.add('ocultar');
  document.getElementById('lista-incubadora').classList.add('ocultar');
  document.getElementById('porcentaje').classList.add('ocultar');
  document.getElementById('header').classList.remove('ocultar');
});
// Botón INCUBADORA:
const clickIncubadora = document.getElementById('incubadora');
clickIncubadora.addEventListener('click', () => {
  document.getElementById('pantalla-pokedex').classList.remove('ocultar');
  document.getElementById('atrapados').classList.add('ocultar');
  document.getElementById('no-atrapados').classList.add('ocultar');
  document.getElementById('lista-ordenamiento').classList.add('ocultar');
  document.getElementById('lista-debilidades').classList.add('ocultar');
  document.getElementById('pantalla-inicio').classList.add('ocultar');
  document.getElementById('lista-incubadora').classList.remove('ocultar');
  document.getElementById('header').classList.remove('ocultar');
  document.getElementById('porcentaje').classList.remove('ocultar');
  document.getElementById('opciones-contenedor').classList.add('ocultar');
});

// mostrar pokemones
const pokemonNuevo = dataPoker(); // constante con una funcion 
const mostrarData = (pokemon) => { // parámetro
  let muestra = ' ';
  for (let i = 0; i < pokemon.length; i++) {
    let llamar = `
    <div name='pokemon' class= 'fondo-poke zoom'  id='${pokemon[i].id}'>
        <img  src ='${pokemon[i].img}'/>
        <p class ='nombre-poke'>${pokemon[i].name}</p>
        <p class = 'num-poke'>${pokemon[i].num}</p>   
    </div>`;
    muestra += llamar;
  }
  return muestra;
};
contenedorPokemon.innerHTML = mostrarData(pokemonNuevo);

// Identificar pokemones No atrapados y Atrapados:
const misAtrapados = document.getElementById('atrapados');
const noAtrapados = document.getElementById('no-atrapados');
let contadorNoatrapado = 0;
let contadorAtrapado = 0;
// recorriendo todo el array
for (let i = 0; i < allPokemon.length; i++) {
  if (allPokemon[i].multipliers === null) {
    contadorNoatrapado ++;
  } else {
    contadorAtrapado ++;
  }
}
misAtrapados.innerHTML = `Pokemones Atrapados: ${contadorAtrapado}`;
noAtrapados.innerHTML = `Pokemones No Atrapados: ${contadorNoatrapado}`;

// Modal

/* al contenedor le agrego un evento click*/
contenedorPokemon.addEventListener('click', () => {
  const pokecito = event.target.parentElement.id - 1;
  /* Coloco condicional que si el atributo name  del padre de ese elemento es pokemon, muestra modal e inserta datos del pokemon*/
  if (event.target.parentElement.getAttribute('name') === 'pokemon') {
    /* Muestra modal*/
    document.getElementById('my-modal').classList.remove('ocultar');
    /* Insertar caracterìsticas  de pokemon en Modal*/
    document.getElementById('caracteristicas').innerHTML = `
      <img class='imagenModal' src='${allPokemon[pokecito].img}'/>
      <p class='nombrePokemodal'> Nombre:${allPokemon[pokecito].name}</p>
      <p>Peso: ${allPokemon[pokecito].weight}</p> 
      <p>Altura: ${allPokemon[pokecito].height}</p>    
      <p>Tipo: ${allPokemon[pokecito].type}</p> `;
  }
});

// cerrando Modal 
document.getElementById('close').addEventListener('click', () => {
  document.getElementById('my-modal').classList.add('ocultar');
});

// Pantalla 3:
// Ordenando la data:
const ordenar = document.getElementById('ordenar');
ordenar.addEventListener('change', () => {
  let ordenador = ordenar.value;
  let ordenadorPoke = [];
  if (ordenador === 'ordenar-az') {
    ordenadorPoke = ordenadorAZ(allPokemon, ordenador);
  } else if (ordenador === 'ordenar-za') {
    ordenadorPoke = ordenadorAZ(allPokemon, ordenador);
  } else if (ordenador === 'asc') {
    ordenadorPoke = ordenadorSpaws(allPokemon, ordenador);
  } else if (ordenador === 'des') {
    ordenadorPoke = ordenadorSpaws(allPokemon, ordenador);
  } else {
    contenedorPokemon.innerHTML = mostrarData(allPokemon);
  }
  contenedorPokemon.innerHTML = mostrarData(ordenadorPoke);
}
);
// //filtrar tipos pokemon:
const tipos = document.getElementById('tipos');
tipos.addEventListener('change', (event) => {
  const seleccionar = event.target.value;
  let tiposPoke = [];
  tiposPoke = filtrarTipo(allPokemon, seleccionar);
  contenedorPokemon.innerHTML = mostrarData(tiposPoke);
});

// Filtrar Debilidades pokemon 
const debilidades = document.getElementById('debilidades');
debilidades.addEventListener('change', (event) => {
  let seleccionar = event.target.value;
  let debilidadesPoke = [];
  debilidadesPoke = filtrarDebil(allPokemon, seleccionar);
  contenedorPokemon.innerHTML = mostrarData(debilidadesPoke);
});
// Incubadora :
const calculoEgg = document.getElementById('eclosion');
calculoEgg.addEventListener('change', (event) => {
  let seleccionar = event.target.value;
  let huevosPoke = [];
  huevosPoke = eggPoke(allPokemon, seleccionar);
  contenedorPokemon.innerHTML = mostrarData(huevosPoke);
  document.getElementById('porcentaje').innerHTML = `El porcentaje de los pokemones es:${((huevosPoke.length) / 151 * 100).toFixed(2).bold()} %`;
});
