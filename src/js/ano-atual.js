const data =  new Date();
const anoAtual = data.getFullYear();

const idCopyright = document.getElementById('copyright');
const textoAnoAtual = "Johnson Webfy &copy;  " + anoAtual + " | All rights reserved";

idCopyright.innerHTML = textoAnoAtual;