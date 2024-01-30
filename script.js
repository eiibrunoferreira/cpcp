const btnFS = document.querySelector(".btnFS");
const resultado = document.querySelector(".resultado");
const containerResultado = document.querySelector(".container-resultado");

function soma() {
  const nameCliente = document.querySelector(".name-cliente").value;

  const pendingAmount = document.querySelector(".pending-amount").value;

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

  const somaSeg = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(segX * 1.4 + segD * 1.4);
  const somaTer = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(terX * 1.4 + terD * 1.4);
  const somaQua = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(quaX * 1.4 + quaD * 1.4);
  const somaQui = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(quiX * 1.4 + quiD * 1.4);
  const somaSex = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(sexX * 1.4 + sexD * 1.4);
  const somaSab = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(sabX * 1.4 + sabD * 1.4);
  const somaDom = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(domX * 1.4 + domD * 1.4);

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

  const somatotal = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(parseInt(somatoria) + parseInt(pendingAmount));
  const somatotall = parseInt(somatoria) + parseInt(pendingAmount);

  const somaTroca = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(trocaX * 1.4 + trocaD * 1.4);
  const somaTrocaa = (trocaX * 1.4 + trocaD * 1.4);

  const somafinal = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(parseInt(somatotall) - parseInt(somaTrocaa));


  
  resultado.innerHTML = `
  <br>
  <h2>*👤${nameCliente.toUpperCase()}*<h2>
  <br>
  <br>
  <h3>*🟥 VALOR PENDENTE ${Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(parseInt(pendingAmount))}*<h3>
  <br>
  <br>
  <h3>*🔶SEGUNDA FEIRA*</h3>
  <p>🔸${segX} XIS + ${segD} DOG = ${somaSeg}</p>
  <br>
  <h3>*🔶TERÇA FEIRA*</h3>
  <p>🔸${terX} XIS + ${terD} DOG = ${somaTer}</p>
  <br>
  <h3>*🔶QUARTA FEIRA*</h3>
  <p>🔸${quaX} XIS + ${quaD} DOG = ${somaQua}</p>
  <br>
  <h3>*🔶QUINTA FEIRA*</h3>
  <p>🔸${quiX} XIS + ${quiD} DOG = ${somaQui}</p>
  <br>
  <h3>*🔶SEXTA FEIRA*</h3>
  <p>🔸${sexX} XIS + ${sexD} DOG = ${somaSex}</p>
  <br>
  <h3>*🔶SÁBADO*</h3>
  <p>🔸${sabX} XIS + ${sabD} DOG = ${somaSab}</p>
  <br>
  <h3>*🔶DOMINGO*</h3>
  <p>🔸${domX} XIS + ${domD} DOG = ${somaDom}</p>
  <br>
  <br>
  <h3>*🟥 SOMA TOTAL ${somatotal}*</h3>
  <br>
  <br>
  <h4>*🔶 DESCONTAR*</h4>
  <h4>🔸${trocaX} XIS + ${trocaD} DOG = ${somaTroca}<h4>
  <br>
  <br>
  <h2>*🟥 SOMA FINAL ${somafinal}*</h2>`;
}

function activeResult() {
  containerResultado.style.display = "flex";
}

btnFS.addEventListener("click", soma);
btnFS.addEventListener("click", activeResult);
