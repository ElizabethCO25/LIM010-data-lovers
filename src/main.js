/* Manejo del DOM */
//Declarando variables
const obtenerClick = document.getElementById('boton-ingresar');
const capturarContraseña = document.getElementById('input-contraseña');
const capturarUsuario = document.getElementById('input-usuario');
const allPokemon = POKEMON.pokemon;

let cuenta = 2;
//
obtenerClick.addEventListener("click", () => {
  if (capturarContraseña.value === "1" && capturarUsuario.value === "1") {
    document.getElementById("pantalla-inicio").classList.remove("ocultar");
    document.getElementById("header").classList.remove("ocultar");
    document.getElementById("pantalla-login").classList.add("ocultar");
    capturarContraseña.value = "";
    capturarUsuario.value = "";
  } else if (cuenta === 0) {
    document.getElementById("pantalla-bloqueo").classList.remove("ocultar");
    document.getElementById("pantalla-login").classList.add("ocultar");
    capturarContraseña.value = "";
  } else {
    document.getElementById("incorrecto").innerHTML = "Contraseña o usuario incorrecto,intenta otra vez";
    capturarContraseña.value = "";
    cuenta--;
  }
});

//Función ENTER:
let enterIniciar = document.getElementById("input-contraseña");
enterIniciar.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("boton-ingresar").click();
  }
});

//Pantalla 2:
// Configuración de botones dle menú desplegable:
// Botón INICIO:
const clickInicio = document.getElementById("inicio");
clickInicio.addEventListener("click", () => {
  document.getElementById("pantalla-pokedex").classList.add("ocultar");
  document.getElementById("pantalla-inicio").classList.remove("ocultar");
  document.getElementById("header").classList.remove("ocultar");
});
// Botón POKEDEX:
const clickPokedex = document.getElementById("pokedex");
clickPokedex.addEventListener("click", () => {
  document.getElementById("pantalla-pokedex").classList.remove("ocultar");
  document.getElementById("pantalla-inicio").classList.add("ocultar");
  document.getElementById("atrapados").classList.remove("ocultar");
  document.getElementById("No-atrapados").classList.remove("ocultar");
  document.getElementById("lista-debilidades").classList.add("ocultar");
  document.getElementById("lista-ordenamiento").classList.add("ocultar");
  document.getElementById("lista-incubadora").classList.add("ocultar");
  document.getElementById("header").classList.remove("ocultar");
  document.getElementById("opciones-contenedor").classList.add("ocultar");
});
// Botón ORDENAR:
const clickOrdenar = document.getElementById("orden");
clickOrdenar.addEventListener("click", () => {
  document.getElementById("pantalla-pokedex").classList.remove("ocultar");
  document.getElementById("pantalla-inicio").classList.add("ocultar");
  document.getElementById("atrapados").classList.add("ocultar");
  document.getElementById("No-atrapados").classList.add("ocultar");
  document.getElementById("lista-ordenamiento").classList.remove("ocultar");
  document.getElementById("lista-debilidades").classList.add("ocultar");
  document.getElementById("lista-incubadora").classList.add("ocultar");
  document.getElementById("header").classList.remove("ocultar");
  document.getElementById("opciones-contenedor").classList.add("ocultar");
});
// Botón FILTRAR:
const clickFiltrar = document.getElementById("filtrar");
clickFiltrar.addEventListener("click", () => {
  document.getElementById("pantalla-pokedex").classList.remove("ocultar");
  document.getElementById("atrapados").classList.add("ocultar");
  document.getElementById("No-atrapados").classList.add("ocultar");
  document.getElementById("lista-ordenamiento").classList.add("ocultar");
  document.getElementById("lista-debilidades").classList.remove("ocultar");
  document.getElementById("opciones-contenedor").classList.remove("ocultar");
  document.getElementById("pantalla-inicio").classList.add("ocultar");
  document.getElementById("lista-incubadora").classList.add("ocultar");
  document.getElementById("header").classList.remove("ocultar");
});
// Botón INCUBADORA:
const clickIncubadora = document.getElementById("incubadora");
clickIncubadora.addEventListener("click", () => {
  document.getElementById("pantalla-pokedex").classList.remove("ocultar");
  document.getElementById("atrapados").classList.add("ocultar");
  document.getElementById("No-atrapados").classList.add("ocultar");
  document.getElementById("lista-ordenamiento").classList.add("ocultar");
  document.getElementById("lista-debilidades").classList.add("ocultar");
  document.getElementById("pantalla-inicio").classList.add("ocultar");
  document.getElementById("lista-incubadora").classList.remove("ocultar");
  document.getElementById("header").classList.remove("ocultar");
  document.getElementById("opciones-contenedor").classList.add("ocultar");
});

//mostrar pokemones
const pokemonNuevo = dataPoker(); // constante con una funcion 
const mostrarData = (pokemon) => { //parámetro
  let muestra = ' ';
  for (let i = 0; i < pokemon.length; i++) {
    let llamar = `
    <div name='pokemon' id="${pokemon[i].id}">
      <article class= "fondo-poke zoom" >
        <img  src ="${pokemon[i].img}"/>
        <p class ="nombre-poke">${pokemon[i].name}</p>
        <p class = "num-poke">${pokemon[i].num}</p>   
      </article>
    </div>`;
    muestra += llamar;
  }
  return muestra;
}
contenedorPokemon.innerHTML = mostrarData(pokemonNuevo);

//Identificar pokemones No atrapados y Atrapados:
let contadorNoatrapado = 0;
let contadorAtrapado = 0;
//recorriendo todo el array
for (let i = 0; i < allPokemon.length; i++) {
  if (allPokemon[i].multipliers == null) {
    contadorNoatrapado++
  } else {
    contadorAtrapado++
  }
}
document.getElementById('atrapados').innerHTML =  "Pokemones Atrapados" + " " + contadorAtrapado;
document.getElementById('No-atrapados').innerHTML = "Pokemones No Atrapados" + " " + contadorNoatrapado;

//Modal
const contenedorPokecito = document.getElementById('contenedorPokemon');
/* al contenedor le agrego un evento click*/
contenedorPokecito.addEventListener('click', () => {
  const pokecito = event.target.parentElement.id - 1;
/* Coloco condicional que si el atributo name  del padre de ese elemento es pokemon, muestra modal e inserta datos del pokemon*/
  if (event.target.parentElement.getAttribute('name') === 'pokemon') {
    /* Muestra modal*/
    document.getElementById('my-modal').classList.remove('ocultar');
    /* Insertar caracterìsticas  de pokemon en Modal*/
    document.getElementById('caracteristicas').innerHTML = `
      <img class="imagenModal" src="${allPokemon[pokecito].img}"/>
      <p class="nombrePokemodal"> Nombre:${allPokemon[pokecito].name}</p>
      <p>Peso: ${allPokemon[pokecito].weight}</p> 
      <p>Altura: ${allPokemon[pokecito].height}</p>    
      <p>Tipo: ${allPokemon[pokecito].type}</p> `;
  }
});

// cerrando Modal 
document.getElementById('close').addEventListener('click', () => {
  document.getElementById('my-modal').classList.add('ocultar');
});

//Pantalla 3:
// Ordenando de la A-Z:
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
tiposPoke= filtrarTipo(allPokemon,seleccionar);
contenedorPokemon.innerHTML= mostrarData(tiposPoke);
});


//Filtrar Debilidades pokemon 
const debilidades = document.getElementById('debilidades');
debilidades.addEventListener('change',(event)=>{
  const seleccionar =event.target.value;
  let debilidadesPoke =[];
  debilidadesPoke = filtrarDebil(allPokemon,seleccionar);
  contenedorPokemon.innerHTML= mostrarData(debilidadesPoke);
});

//Incubadora :
const calculoEgg = document.getElementById('eclosion');
let eggPoke1 = [];
console.log(calculoEgg);
calculoEgg.addEventListener('change', () => {
  let seleccionar = calculoEgg.value;
  console.log(seleccionar);
  if (seleccionar === '2 km') {
    eggPoke1 = eggPoke(allPokemon, seleccionar);
    contenedorPokemon.innerHTML = null;
    contenedorPokemon.innerHTML = mostrarData(eggPoke1);
    document.getElementById('porcentaje').innerHTML = 'El porcentaje de los pokemones  en 2km es: ' + ((eggPoke1.length) / 151 * 100).toFixed(2).bold() + '%';
  } else if (seleccionar === '5 km') {
    eggPoke1 = eggPoke(allPokemon, seleccionar);
    contenedorPokemon.innerHTML = null;
    contenedorPokemon.innerHTML = mostrarData(eggPoke1);
    document.getElementById('porcentaje').innerHTML = 'El porcentaje de los pokemones  en 5km es: ' + ((eggPoke1.length) / 151 * 100).toFixed(2).bold() + '%';

  } else if (seleccionar === '10 km') {
    eggPoke1 = eggPoke(allPokemon, seleccionar);
    contenedorPokemon.innerHTML = null;
    contenedorPokemon.innerHTML = mostrarData(eggPoke1);
    document.getElementById('porcentaje').innerHTML = 'El porcentaje de los pokemones  en 10km es: ' + ((eggPoke1.length) / 151 * 100).toFixed(2).bold() + '%';
  }
});
