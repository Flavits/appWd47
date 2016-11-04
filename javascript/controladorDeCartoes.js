var controladorDeCartoes = (function(){
  "use strict" // Restringe que o codigo tenha vazamento de variaveis
  var contador = $(".cartao").length;

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

  function decideTipoCartao(conteudo) {

  }
  //Atribuindo valores
  function adicionarCartao(conteudo, cor) {
    if (conteudo) {
      contador++; //somador

      var opcoes = criaOpcoesDoCartao(contador);

      var conteudoTag = $("<p>").addClass("cartao-conteudo")
      .append(conteudo);

      $("<div>").addClass("cartao")
      .attr("id","cartao_" + contador)
      .attr("tabindex",0)
      .append(opcoes)
      .append(conteudoTag)
      .prependTo(".mural");
    }
  }return {
    adicionarCartao: adicionarCartao,
    getContador: function () {
      return contador;
    }
  }
})();
