/* Manejo del DOM */
//Login:
const obtenerClick = document.getElementById("boton-ingresar");
const capturarContraseña = document.getElementById("input-contraseña");
const capturarUsuario = document.getElementById("usuario");
let intentos = 0;

obtenerClick.addEventListener("click", () => {
  if (capturarContraseña.value === "LABORATORIA" && capturarUsuario.value ==="LABORATORIA") {
   document.getElementById("pantalla-inicio").classList.remove("ocultar");
   document.getElementById("pantalla-login").classList.add("ocultar");
  } else  {
        if(capturarContraseña != "LABORATORIA" && intentos ==2){
          document.getElementById("pantalla-bloqueo").classList.remove("ocultar");
          document.getElementById("pantalla-login").classList.add("ocultar");
  }else {

    document.getElementById("incorrecto").innerHTML="datos erròneos, intenta otra vez";
    capturarContraseña.value="";
    intentos++;
  }
};
});

