$("#busca").on("input",function(){
  "use strict" // Restringe que o codigo tenha vazamento de variaveis
  //guarda o valor digitado na tag input type=seach e retira os espaços extras
  var busca = $(this).val().trim();
  if(busca.length > 2){
    $(".cartao").hide().filter(function(){ // hide = esconde os cartoes, filter = filtra conforme a funcao
      return $(this).find(".cartao-conteudo") // return = retorna o cartao, find = procura a class
      .text() // pega o conteudo da tag com essa class
      .match(new RegExp(busca,"i")); // compara os valores atravez de uma expressao(o que voce procura, i = maiuscula e minuscula)
    }).show();
  }else{
    $(".cartao").show();
  }
});
