function calcularArea() {
  const A = parseFloat(document.getElementById("a").value);
  const B = parseFloat(document.getElementById("b").value);
  const C = parseFloat(document.getElementById("c").value);

  if (A > C && B > 0 && C > 0) {
    const areaRectangulo = B * C;
    const areaTriangulo = (B * (A - C)) / 2;
    const areaTotal = areaRectangulo + areaTriangulo;

    document.getElementById("resultado").textContent =
      `El área total es: ${areaTotal.toFixed(2)} m²`;
  } else {
    document.getElementById("resultado").textContent =
      "Por favor, ingresá valores válidos (A debe ser mayor que C).";
    document.getElementById("resultado").style.color = "red";
  }
}
