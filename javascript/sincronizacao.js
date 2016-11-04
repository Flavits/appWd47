$(document).on("precisaSincronizar",function () {
  $("#sync").removeClass("botaoSync--sincronizado");
  $("#sync").addClass("botaoSync--esperando");
});

(function(card){
  "use strict"
  var usuario = "flavial_santana@hotmail.com.br";

  $(document).on("precisaSincronizar", function(){
    var cartoes = [];
    $(".cartao").each(function(){
      var cartao = {};
      cartao.conteudo = $(this).find(".cartao-conteudo").html();
      cartoes.push(cartao);
    });
    //escolha seu nome de usuário aqui
    var mural = {
      usuario: usuario,
      cartoes: cartoes
    }
    $.ajax({
      url:"https://ceep.herokuapp.com/cartoes/salvar",
      method: "POST",
      data: mural,
      success: function(res){
        $("#sync").addClass("botaoSync--sincronizado");
        console.log(res.quantidade + " cartoes salvos em " + res.usuario);
        var quantidadeRemovidos = controladorDeCartoes.getContador() - res.quantidade;
        console.log(quantidadeRemovidos + " cartões removidos");
      },
      error: function(){
        $("#sync").addClass("botaoSync--deuRuim");
        console.log("Não foi possivel salvar o mural!");
      },
      complete: function(){
        $("#sync").removeClass("botaoSync--esperando");
      }
    });
  });
  $("#sync").click(function () {
    $(document).trigger("precisaSincronizar");
  });
  $.getJSON(
    "https://ceep.herokuapp.com/cartoes/carregar?callback=?",{usuario: usuario},
    function(res){
      var cartoes = res.cartoes;
      console.log(cartoes.length + " carregados em " + res.usuario);
      cartoes.forEach(function(cartao){
        card.adicionarCartao(cartao.conteudo, "#0FF");
      });
    }
  );
})(controladorDeCartoes)
