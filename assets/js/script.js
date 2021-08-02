document.body.onload = adcElemento;

function adcElemento () {
  var divNova = document.createElement("img");
  var conteudoNovo = document.images();
  divNova.appendChild(conteudoNovo);

  var divAtual = document.getElementById("geral");
  document.body.insertBefore(divNova, divAtual);
}
