var criaOpcoesDoCartao = (function () {
  "use strict"
  function removerCartao(conteudo) {
    var cartao = document.querySelector("#cartao_"+this.dataset.ref);
    //Adicionando a animaçao da classe cartao--some no na tag button
    cartao.classList.add("cartao--some");
    cartao.addEventListener("transitionend",function() {
      cartao.remove();
      $(document).trigger("precisaSincronizar");
    });
    /*tirar da pagina depois da animaçao
    setTimeout(function(){
    cartao.remover();
  });
  */
  }
  var ehPraEditar = false;
  function toggleEdicao() {
    var cartao = $("#cartao_" + this.dataset.ref);
    var conteudo = cartao.find(".cartao-conteudo");

    if(ehPraEditar){
      ehPraEditar = false;
      conteudo.attr("contenteditable",false);
      conteudo.blur();
    } else{
      ehPraEditar = true;
      conteudo.attr("contenteditable",true);
      conteudo.focus;
    }
  }
  return function (contador) {

    var botaoRemover = $("<button>").addClass("opcoesDoCartao-remover").addClass("opcoesDoCartao-opcao")
    .attr("data-ref",contador)
    .text("Remover")
    .click(removerCartao);

    var botaoEditar = $("<button>").addClass("opcoesDoCartao-editar").addClass("opcoesDoCartao-opcao")
    .attr("data-ref",contador)
    .text("Editar")
    .click(toggleEdicao);

    var opcoes = $("<div>").addClass("opcoesDoCartao")
    .append(botaoRemover)
    .append(botaoEditar);
    return opcoes;
  }
})();
