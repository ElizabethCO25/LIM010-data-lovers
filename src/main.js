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

//mostrar pokemones
const pokemonNuevo = dataPoker(); // constante con una funcion 
const mostrarData = (pokemon) => { //paràmetro
  let muestra = ' ';
  for (let i = 0; i < pokemon.length; i++) {
    let llamar = `
    <div>
      <article class= "fondo-poke zoom" >
        <img  src ="${pokemon[i].img}"/>   
        <p class = "nombre-poke">${pokemon[i].name}</p>
        <p>${pokemon[i].id}</p>
        <p>${pokemon[i].multipliers}</p>
      </article>
    </div>`;
    muestra += llamar;
  }
  return muestra;
};
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
document.getElementById('No-atrapados').innerHTML = "Pokemones No Atrapados :" + " " +contadorNoatrapado;
document.getElementById('atrapados').innerHTML = "Pokemones Atrapados :" + " " + contadorAtrapado;
let mostrarNoatrapados = contadorNoatrapado;
let mostrarAtrapados = contadorAtrapado;
for (let i = 0; i < POKEMON.pokemon.length; i++) {
  if (POKEMON.pokemon[i].multipliers == null) {
    let mostrar = `
    <div>
    <article class= "fondo-no zoom" >
        <img src ="${POKEMON.pokemon[i].img}"/>   
        <p >${POKEMON.pokemon[i].name}</p>
        <p>${POKEMON.pokemon[i].id}</p>
        </article>
    </div>`;
    mostrarNoatrapados += mostrar;
  } else {
    for (let i = 0; i < POKEMON.pokemon.length; i++) {
      if (POKEMON.pokemon[i].multipliers !== null) {
        let mostrar = `
       <div>
       <article class= "fondo-si  zoom" >
           <img src ="${POKEMON.pokemon[i].img}"/>   
           <p >${POKEMON.pokemon[i].name}</p>
           <p>${POKEMON.pokemon[i].id}</p>
           </article>
       </div>`;
        mostrarAtrapados += mostrar;
      }
    }
    document.getElementById('atrapados').innerHTML = mostrarAtrapados;
  }
}
document.getElementById('No-atrapados').innerHTML = mostrarNoatrapados;


