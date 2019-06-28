/* Manejo del DOM */
//Login:
const obtenerClick = document.getElementById("boton-ingresar");
const capturarContraseña = document.getElementById("input-contraseña");
const capturarUsuario = document.getElementById("usuario")
let cuenta = 2;
obtenerClick.addEventListener("click", () => {
  if (capturarContraseña.value === "LABORATORIA" && capturarUsuario.value === "LABORATORIA") {
    alert("Contraseña y usuario correcto!");
    document.getElementById("pantalla-inicio").classList.remove("ocultar");
    document.getElementById("pantalla-login").classList.add("ocultar");
    capturarContraseña.value = "";
    capturarUsuario.value = "";
  } else if (capturarContraseña.value === "LABORATORIA" && capturarUsuario.value != "LABORATORIA"){
    alert("Usuario incorrecto");
    cuenta--;
    capturarContraseña.value = "";
    capturarUsuario.value = "";
  } else if (capturarContraseña.value != "LABORATORIA" && capturarUsuario.value != "LABORATORIA"){
    alert("Contraseña y usuario incorrectos");
    cuenta--;
    capturarContraseña.value = "";
    capturarUsuario.value = "";
  }else if (cuenta === 0) {
    alert("Agotaste tus intentos de ingreso");
    document.getElementById("pantalla-bloqueo").classList.remove("ocultar");
    document.getElementById("pantalla-login").classList.add("ocultar");
    capturarContraseña.value = "";
    capturarUsuario.value = "";
  }else {
    alert("Contraseña incorrecta");
    capturarContraseña.value = "";
    capturarUsuario.value = "";
    cuenta--;
  }
});
