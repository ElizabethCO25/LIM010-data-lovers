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
const mostrarData = (pokemon) => { //parámetro
  let muestra = ' ';
  for (let i = 0; i < pokemon.length; i++) {
    let llamar = `
    <div name='pokemon' id="${pokemon[i].id}">
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

const contenedorPokecito = document.getElementById('contenedorPokemon');
/* al contenedor le agrego un evento clik*/
contenedorPokecito.addEventListener('click', () => {
  const pokecito = event.target.parentElement.id - 1;
  console.log(pokecito);
  /* Pongo condicional que si el atributo name  del padre de ese elemento es pokemon, muestra modal e inserta datos del pokemon*/
  if (event.target.parentElement.getAttribute('name') === 'pokemon') {
    /* Muestra modal*/
    document.getElementById('my-modal').classList.remove('ocultar');
    /* Insertar info de pokemon en Modal*/
    document.getElementById('caracteristicas').innerHTML = `
<img class="imagenModal" src="${POKEMON.pokemon[pokecito].img}"/>
<p> Nombre:  ${POKEMON.pokemon[pokecito].name}</p>
<p>Peso: ${POKEMON.pokemon[pokecito].weight}</p> 
<p>Altura: ${POKEMON.pokemon[pokecito].height}</p>    
<p>Tipo: ${POKEMON.pokemon[pokecito].type}</p> `;
  }
});

/* cerrarndo Modal */
document.getElementById('close').addEventListener('click', () => {
  document.getElementById('my-modal').classList.add('ocultar');
});

//Pantalla 3:
// Ordenando de la A-Z:
const clickOrdenarAZ = document.getElementById("ordenar-az");
clickOrdenarAZ.addEventListener("click", () => {
  document.getElementById("orden-AZ").value = ordenadorAZ();
});

