function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const altura = parseInt(document.getElementById("altura").value);
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje");

  let errores = [];

  if (nombre === "" || nombre.length > 50) {
    errores.push("El nombre es obligatorio y debe tener hasta 50 caracteres.");
  }

  if (apellido === "" || apellido.length > 50) {
    errores.push("El apellido es obligatorio y debe tener hasta 50 caracteres.");
  }

  if (isNaN(edad) || edad < 0) {
    errores.push("La edad no puede ser negativa.");
  } else if (edad < 18) {
    errores.push("Debe ser mayor de edad.");
  }

  if (isNaN(altura) || altura < 0 || altura > 230) {
    errores.push("La altura debe estar entre 0 y 230 cm.");
  }

  if (email === "" || !email.includes("@")) {
    errores.push("El correo electrónico debe ser válido y contener '@'.");
  }

  if (errores.length > 0) {
    mensaje.textContent = errores.join(" ");
    mensaje.classList.remove("exito");
    mensaje.classList.add("error");
  } else {
    mensaje.textContent = "¡Todos los datos son válidos!";
    mensaje.classList.remove("error");
    mensaje.classList.add("exito");
  }
}
