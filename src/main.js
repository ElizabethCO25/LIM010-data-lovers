/* Manejo del DOM */
//Login:
const obtenerClick = document.getElementById("boton-ingresar");
const capturarContraseña = document.getElementById("input-contraseña");
const capturarUsuario = document.getElementById("input-usuario");
let cuenta = 2;
obtenerClick.addEventListener("click", () => {
  if (capturarContraseña.value === "1" && capturarUsuario.value === "1") {
    document.getElementById("pantalla-inicio").classList.remove("ocultar");
    document.getElementById("pantalla-login").classList.add("ocultar");
    document.getElementById("header").classList.remove("ocultar");
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
  document.getElementById("header").classList.remove("ocultar");
});
// Botón ORDENAR:
const clickOrdenar = document.getElementById("ordenar");
clickOrdenar.addEventListener("click", () => {
  document.getElementById("pantalla-pokedex").classList.remove("ocultar");
  document.getElementById("pantalla-inicio").classList.add("ocultar");
  document.getElementById("header").classList.remove("ocultar");
});
// Botón FILTRAR:
const clickFiltrar = document.getElementById("filtrar");
clickOrdenar.addEventListener("click", () => {
  document.getElementById("pantalla-pokedex").classList.remove("ocultar");
  document.getElementById("pantalla-inicio").classList.add("ocultar");
  document.getElementById("header").classList.remove("ocultar");
});


//mostrar pokemones
const pokemonNuevo = dataPoker(); // constante con una funcion 
const mostrarData = (pokemon) => { //paràmetro
  let muestra = ' ';
  for (let i = 0; i < pokemon.length; i++) {
    let llamar = `
    <div>
      <article class= "fondo-poke zoom" >
        <img  src ="${pokemon[i].img}"/>
        <p class = "num-poke">${pokemon[i].num}</p>   
        <p class = "nombre-poke">${pokemon[i].name}</p>
      </article>
    </div>`;
    muestra += llamar;
  }
  return muestra;
}
contenedorPokemon.innerHTML = mostrarData(pokemonNuevo);

//Identificar pokemones No atrapados
let contadorNoatrapado = 0;
let contadorAtrapado = 0;
//recorriendo todo el array
for (let i = 0; i < POKEMON.pokemon.length; i++) {
  if (POKEMON.pokemon[i].multipliers == null) {
    contadorNoatrapado++
  } else {
    contadorAtrapado++
  }
}
document.getElementById('atrapados').innerHTML = "Pokemones Atrapados :" + " " + contadorAtrapado;
document.getElementById('No-atrapados').innerHTML = "Pokemones No Atrapados :" + " " + contadorNoatrapado;

// el modal
const modal = document.getElementById("my-modal");
const btn = document.getElementById("contenedorPokemon");

btn.addEventListener('click', () => {
  const numero = parseInt(event.target.parentElement.id) - 1;
  if (event.target.parentElement.getAttribute('name') === 'pokemon') {
    modal.classList.remove('hide');
    document.getElementById('modal-content').innerHTML = `
    <img class="imagenModal" src="${POKEMON.pokemon[numero].img}"/>
    <p> Nombre:"${POKEMON.pokemon[numero].name}"</p>
    <p>Peso:${POKEMON.pokemon[numero].weight}</p>
    <p>Altura: ${POKEMON.pokemon[numero].height}</p>
    <p>Tipo: ${POKEMON.pokemon[numero].type}</p> `;
  }
});
// cerrar Modal 
document.getElementById('close').addEventListener('click', () => {
  document.getElementById('my-modal').classList.add('hide');
});




