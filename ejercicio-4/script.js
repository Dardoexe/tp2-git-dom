function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const estatura = parseFloat(document.getElementById("estatura").value);

  if (peso > 0 && estatura > 0) {
    const imc = peso / (estatura ** 2);
    alert(`Tu IMC es: ${imc.toFixed(2)}`);
  } else {
    alert("Por favor, ingresá valores válidos para peso y estatura.");
  }
}
