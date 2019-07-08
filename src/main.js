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

//modal
const modal= document.getElementById('mi-modal');
const btn = document.getElementById('mi-boton');
const span = document.getElementById('cerrar');

btn.addEventListener('click', ()=>{
modal.style.display ='block';
});
span.addEventListener('click', ()=>{
  modal.style.display ='none';
  });
// Cuando el usuario haga clic en cualquier lugar fuera del modal, ciérrelo
window.addEventListener('click', ()=>{
if(event.target == modal){
  modal.style.display ='none';
}
 });
  

/*ordenar de A-Z
const ordenar = () => {
  const namepoke = [];
  const dataAZ = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  for (let i = 0; i < dataAZ.length; i++) {
    for (let x = 0; i < POKEMON.pokemon.length; x++) {
      if (dataAZ[i] === POKEMON.pokemon[x].name[0]) {
        namepoke.push(POKEMON.pokemon[x]);
      }
    }
  }
  return namepoke;
}; */
