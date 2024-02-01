const btnFS = document.querySelector(".btnFS");
const resultado = document.querySelector(".resultado");
const containerResultado = document.querySelector(".container-resultado");

function soma() {
  const nameCliente = document.querySelector(".name-cliente").value;

  const pendingAmount = document.querySelector(".pending-amount").value;

  const segX = document.querySelector(".segX").value;
  const segD = document.querySelector(".segD").value;
  const segDG = document.querySelector(".segDG").value;

  const terX = document.querySelector(".terX").value;
  const terD = document.querySelector(".terD").value;
  const terDG = document.querySelector(".terDG").value;

  const quaX = document.querySelector(".quaX").value;
  const quaD = document.querySelector(".quaD").value;
  const quaDG = document.querySelector(".quaDG").value;

  const quiX = document.querySelector(".quiX").value;
  const quiD = document.querySelector(".quiD").value;
  const quiDG = document.querySelector(".quiDG").value;

  const sexX = document.querySelector(".sexX").value;
  const sexD = document.querySelector(".sexD").value;
  const sexDG = document.querySelector(".sexDG").value;

  const sabX = document.querySelector(".sabX").value;
  const sabD = document.querySelector(".sabD").value;
  const sabDG = document.querySelector(".sabDG").value;

  const domX = document.querySelector(".domX").value;
  const domD = document.querySelector(".domD").value;
  const domDG = document.querySelector(".domDG").value;

  const trocaX = document.querySelector(".trocaX").value;
  const trocaD = document.querySelector(".trocaD").value;
  const trocaDG = document.querySelector(".trocaDG").value;

  if (
    segD &&
    segDG &&
    terD &&
    terDG &&
    quaD &&
    quaDG &&
    quiD &&
    quiDG &&
    sexD &&
    sexDG &&
    sabD &&
    sabDG &&
    domD &&
    domDG == 0
  ) {
    const somaSeg = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(segX * 1.4);
    const somaTer = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(terX * 1.4);
    const somaQua = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(quaX * 1.4);
    const somaQui = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(quiX * 1.4);
    const somaSex = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(sexX * 1.4);
    const somaSab = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(sabX * 1.4);
    const somaDom = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(domX * 1.4);

    const somatoria =
      segX * 1.4 +
      terX * 1.4 +
      quaX * 1.4 +
      quiX * 1.4 +
      sexX * 1.4 +
      sabX * 1.4 +
      domX * 1.4;

    const somatotal = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(parseInt(somatoria) + parseInt(pendingAmount));
    const somatotall = parseInt(somatoria) + parseInt(pendingAmount);

    const somaTroca = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(trocaX * 1.4);
    const somaTrocaa = trocaX * 1.4;

    const somafinal = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(parseInt(somatotall) - parseInt(somaTrocaa));

    resultado.innerHTML = `
    <br>
    <h2>*👤${nameCliente.toUpperCase()}*<h2>
    <br>
    <br>
    <h3>*🟥 VALOR PENDENTE ${Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(parseInt(pendingAmount))}*<h3>
    <br>
    <br>
    <h3>*🔶SEGUNDA FEIRA*</h3>
    <p>🔸${segX} XIS = ${somaSeg}</p>
    <br>
    <h3>*🔶TERÇA FEIRA*</h3>
    <p>🔸${terX} XIS = ${somaTer}</p>
    <br>
    <h3>*🔶QUARTA FEIRA*</h3>
    <p>🔸${quaX} XIS = ${somaQua}</p>
    <br>
    <h3>*🔶QUINTA FEIRA*</h3>
    <p>🔸${quiX} XIS = ${somaQui}</p>
    <br>
    <h3>*🔶SEXTA FEIRA*</h3>
    <p>🔸${sexX} XIS = ${somaSex}</p>
    <br>
    <h3>*🔶SÁBADO*</h3>
    <p>🔸${sabX} XIS = ${somaSab}</p>
    <br>
    <h3>*🔶DOMINGO*</h3>
    <p>🔸${domX} XIS = ${somaDom}</p>
    <br>
    <br>
    <h3>*🟥 SOMA TOTAL ${somatotal}*</h3>
    <br>
    <br>
    <h4>*🔶 DESCONTAR*</h4>
    <h4>🔸${trocaX} XIS = ${somaTroca}<h4>
    <br>
    <br>
    <h2>*🟥 SOMA FINAL ${somafinal}*</h2>`;
  } else if (segDG && terDG && quaDG && quiDG && sexDG && sabDG && domDG == 0) {
    const somaSeg = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(segX * 1.4 + segD * 1.4);
    const somaTer = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(terX * 1.4 + terD * 1.4);
    const somaQua = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(quaX * 1.4 + quaD * 1.4);
    const somaQui = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(quiX * 1.4 + quiD * 1.4);
    const somaSex = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(sexX * 1.4 + sexD * 1.4);
    const somaSab = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(sabX * 1.4 + sabD * 1.4);
    const somaDom = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(domX * 1.4 + domD * 1.4);

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

    const somatotal = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(parseInt(somatoria) + parseInt(pendingAmount));
    const somatotall = parseInt(somatoria) + parseInt(pendingAmount);

    const somaTroca = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(trocaX * 1.4 + trocaD * 1.4);
    const somaTrocaa = trocaX * 1.4 + trocaD * 1.4;

    const somafinal = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(parseInt(somatotall) - parseInt(somaTrocaa));

    resultado.innerHTML = `
    <br>
    <h2>*👤${nameCliente.toUpperCase()}*<h2>
    <br>
    <br>
    <h3>*🟥 VALOR PENDENTE ${Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(parseInt(pendingAmount))}*<h3>
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
  } else {
    const somaSeg = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(segX * 1.4 + segD * 1.4 + segDG * 1.5);
    const somaTer = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(terX * 1.4 + terD * 1.4 + terDG * 1.5);
    const somaQua = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(quaX * 1.4 + quaD * 1.4 + quaDG * 1.5);
    const somaQui = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(quiX * 1.4 + quiD * 1.4 + quiDG * 1.5);
    const somaSex = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(sexX * 1.4 + sexD * 1.4 + sexDG * 1.5);
    const somaSab = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(sabX * 1.4 + sabD * 1.4 + sabDG * 1.5);
    const somaDom = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(domX * 1.4 + domD * 1.4 + domDG * 1.5);

    const somatoria =
      segX * 1.4 +
      segD * 1.4 +
      segDG * 1.5 +
      terX * 1.4 +
      terD * 1.4 +
      terDG * 1.5 +
      quaX * 1.4 +
      quaD * 1.4 +
      quaDG * 1.5 +
      quiX * 1.4 +
      quiD * 1.4 +
      quiDG * 1.5 +
      sexX * 1.4 +
      sexD * 1.4 +
      sexDG * 1.5 +
      sabX * 1.4 +
      sabD * 1.4 +
      sabDG * 1.5 +
      domX * 1.4 +
      domD * 1.4 +
      domDG * 1.5;

    const somatotal = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(parseInt(somatoria) + parseInt(pendingAmount));
    const somatotall = parseInt(somatoria) + parseInt(pendingAmount);

    const somaTroca = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(trocaX * 1.4 + trocaD * 1.4 + trocaDG * 1.5);
    const somaTrocaa = trocaX * 1.4 + trocaD * 1.4 + trocaDG * 1.5;

    const somafinal = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(parseInt(somatotall) - parseInt(somaTrocaa));

    resultado.innerHTML = `
    <br>
    <h2>*👤${nameCliente.toUpperCase()}*<h2>
    <br>
    <br>
    <h3>*🟥 VALOR PENDENTE ${Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(parseInt(pendingAmount))}*<h3>
    <br>
    <br>
    <h3>*🔶SEGUNDA FEIRA*</h3>
    <p>🔸${segX} XIS + ${segD} DOG + ${segDG} DOGÃO = ${somaSeg}</p>
    <br>
    <h3>*🔶TERÇA FEIRA*</h3>
    <p>🔸${terX} XIS + ${terD} DOG + ${terDG} DOGÃO = ${somaTer}</p>
    <br>
    <h3>*🔶QUARTA FEIRA*</h3>
    <p>🔸${quaX} XIS + ${quaD} DOG + ${quaDG} DOGÃO = ${somaQua}</p>
    <br>
    <h3>*🔶QUINTA FEIRA*</h3>
    <p>🔸${quiX} XIS + ${quiD} DOG + ${quiDG} DOGÃO = ${somaQui}</p>
    <br>
    <h3>*🔶SEXTA FEIRA*</h3>
    <p>🔸${sexX} XIS + ${sexD} DOG + ${sexDG} DOGÃO = ${somaSex}</p>
    <br>
    <h3>*🔶SÁBADO*</h3>
    <p>🔸${sabX} XIS + ${sabD} DOG + ${sabDG} DOGÃO = ${somaSab}</p>
    <br>
    <h3>*🔶DOMINGO*</h3>
    <p>🔸${domX} XIS + ${domD} DOG + ${domDG} DOGÃO = ${somaDom}</p>
    <br>
    <br>
    <h3>*🟥 SOMA TOTAL ${somatotal}*</h3>
    <br>
    <br>
    <h4>*🔶 DESCONTAR*</h4>
    <h4>🔸${trocaX} XIS + ${trocaD} DOG + ${trocaDG} DOGÃO = ${somaTroca}<h4>
    <br>
    <br>
    <h2>*🟥 SOMA FINAL ${somafinal}*</h2>`;
  }
}

function activeResult() {
  containerResultado.style.display = "flex";
}

btnFS.addEventListener("click", soma);
btnFS.addEventListener("click", activeResult);
