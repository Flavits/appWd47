$("#ajuda").click(function () {
  "use strict" // Restringe que o codigo tenha vazamento de variaveis
  $.getJSON("https://ceep.herokuapp.com/cartoes/instrucoes", function(res){
    console.log(res);
    res.instrucoes.forEach(function(instrucoes){
        controladorDeCartoes.adicionarCartao(instrucoes.conteudo, instrucoes.cor);
    });
  });
});
