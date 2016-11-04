(function (card) {
  "use strict" // Restringe que o codigo tenha vazamento de variaveis
  var novoCartao = document.querySelector(".novoCartao");
  novoCartao.addEventListener("submit", function(event){
    //Anula a ação do forme de subimeter a pagina a uma atualização
    event.preventDefault();
    //javascript puro
    var novoCartaoConteudo = document.querySelector(".novoCartao-conteudo");
    var elementError = document.querySelector(".error");

    if(novoCartaoConteudo.value == "" && elementError == null){
      var msgError = document.createElement("p");
      msgError.textContent = "Preencha o campo acima";
      msgError.classList.add("error"); //Adiciona uma classe pra colocar estilo ao p inserido

      novoCartao.insertBefore(msgError, document.querySelector(".novoCartao-salvar"));
    };
    //usando Jquery
    var campoConteudo = $(".novoCartao-conteudo");
    var contador = $(".cartao").length;
    var conteudo = campoConteudo.val().trim() // .trim elimina espaços desnecessarios
    .replace(/\n/g,"<br>");// \n é igual a enter e g=global, ou seja, pega todos os enter presentes no conteudo

  card.adicionarCartao(conteudo);
  $(document).trigger("precisaSincronizar");
  });
})(controladorDeCartoes);
