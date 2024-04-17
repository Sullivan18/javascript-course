function calcular() {
  var vel = document.getElementById("txtvel");
  let res = document.getElementById("res");
  vel = Number(txtvel.value);
  if (vel > 90) {
    res.innerHTML = `Velocidade acima do permitido: <strong> ${vel} Km/h </strong>`;
    res.innerHTML += `<p>Você está <strong> MULTADO </strong> por excesso de velocidade`
  } else {
    res.innerHTML = `Velocidade acima do permitido: <strong> ${vel} Km/h </strong>`;
  }
}
