const btnFS = document.querySelector(".btnFS");
const resultado = document.querySelector(".resultado");
const containerResultado = document.querySelector(".container-resultado");

function soma() {
  const nameCliente = document.querySelector(".name-cliente").value

  const segX = document.querySelector(".segX").value;
  const segD = document.querySelector(".segD").value;

  const terX = document.querySelector(".terX").value;
  const terD = document.querySelector(".terD").value;

  const quaX = document.querySelector(".quaX").value;
  const quaD = document.querySelector(".quaD").value;

  const quiX = document.querySelector(".quiX").value;
  const quiD = document.querySelector(".quiD").value;

  const sexX = document.querySelector(".sexX").value;
  const sexD = document.querySelector(".sexD").value;

  const sabX = document.querySelector(".sabX").value;
  const sabD = document.querySelector(".sabD").value;

  const domX = document.querySelector(".domX").value;
  const domD = document.querySelector(".domD").value;

  const trocaX = document.querySelector(".trocaX").value;
  const trocaD = document.querySelector(".trocaD").value;

  const somaSeg = (segX * 1.4 + segD * 1.4).toFixed(2);
  const somaTer = (terX * 1.4 + terD * 1.4).toFixed(2);
  const somaQua = (quaX * 1.4 + quaD * 1.4).toFixed(2);
  const somaQui = (quiX * 1.4 + quiD * 1.4).toFixed(2);
  const somaSex = (sexX * 1.4 + sexD * 1.4).toFixed(2);
  const somaSab = (sabX * 1.4 + sabD * 1.4).toFixed(2);
  const somaDom = (domX * 1.4 + domD * 1.4).toFixed(2);

  const somatoria =
    segX * 1.4 +
    segD * 1.4 +
    terX * 1.4 +
    terD * 1.4 +
    quaX * 1.4 +
    quaD * 1.4 +
    quiX * 1.4 +
    quiD * 1.4 +
    sexX * 1.4 +
    sexD * 1.4 +
    sabX * 1.4 +
    sabD * 1.4 +
    domX * 1.4 +
    domD * 1.4;
  const somatotal = somatoria.toFixed(2);

  const somaTroca = (trocaX * 1.4 + trocaD * 1.4).toFixed(2);

  const somafinal = (somatotal - somaTroca).toFixed(2);

  resultado.innerHTML = `
  <h2>${nameCliente.toUpperCase()}<h2>
  <br>
  <h3>SEGUNDA FEIRA</h3>
  <p>${segX} xis + ${segD} dog = R$${somaSeg}</p>
  <br>
  <h3>TERÇA FEIRA</h3>
  <p>${terX} xis + ${terD} dog = R$${somaTer}</p>
  <br>
  <h3>QUARTA FEIRA</h3>
  <p>${quaX} xis + ${quaD} dog = R$${somaQua}</p>
  <br>
  <h3>QUINTA FEIRA</h3>
  <p>${quiX} xis + ${quiD} dog = R$${somaQui}</p>
  <br>
  <h3>SEXTA FEIRA</h3>
  <p>${sexX} xis + ${sexD} dog = R$${somaSex}</p>
  <br>
  <h3>SÁBADO</h3>
  <p>${sabX} xis + ${sabD} dog = R$${somaSab}</p>
  <br>
  <h3>DOMINGO</h3>
  <p>${domX} xis + ${domD} dog = R$${somaDom}</p>
  <br>
  <br>
  <h3>SOMA TOTAL R$${somatotal}</h3>
  <br>
  <h4>DESCONTAR ${trocaX} xis + ${trocaD} dog = R$${somaTroca}</h4>
  <br>
  <br>
  <h2>SOMA FINAL R$${somafinal}</h2>`;
}

function activeResult() {
  containerResultado.style.display = "flex";
}

btnFS.addEventListener("click", soma);
btnFS.addEventListener("click", activeResult);
