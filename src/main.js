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
      <img src ="${pokemon[i].img}"/>    
      <p>${pokemon[i].name}</p>
    </div>`;
    muestra += llamar;
  }
  return muestra;
};
contenedorPokemon.innerHTML = mostrarData(pokemonNuevo);

