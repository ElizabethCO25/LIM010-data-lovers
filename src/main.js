/* Manejo del DOM */
//Login:
const obtenerClick = document.getElementById("boton-ingresar");
const capturarContraseña = document.getElementById("input-contraseña");
let cuenta = 2;
obtenerClick.addEventListener("click", () => {
 if (capturarContraseña.value === "LABORATORIA") {
   alert("Contraseña Correcta");
   document.getElementById("pantalla-inicio").classList.remove("ocultar");
   document.getElementById("pantalla-login").classList.add("ocultar");
   capturarContraseña.value = "";
 } else if (cuenta === 0) {
   alert("Agotaste tus intentos de ingreso");
   document.getElementById("pantalla-bloqueo").classList.remove("ocultar");
   document.getElementById("pantalla-login").classList.add("ocultar");
   capturarContraseña.value = "";
 } else {
   alert("Vuelve a intentarlo");
   capturarContraseña.value = "";
   cuenta--;
 }
});