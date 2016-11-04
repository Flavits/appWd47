var botao = document.querySelector("#mudaLayout");
var mural = document.querySelector(".mural");
"use strict" // Restringe que o codigo tenha vazamento de variaveis
//Ação de detectar o click e acionar a function mudaLayout
botao.addEventListener("click",mudaLayout);

function mudaLayout(){
  console.log("abriu o js");
  //A ação .toogle verifica se existe essa class "mural--linhas" dentro da section e add ou remove a mesma
  mural.classList.toggle("mural--linhas");
  if(mural.classList.contains("mural--linhas")){
    this.textContent = "Blocos";
  }else {
    this.textContent = "Linhas";
  }//final do if
};//final da function mudaLayout
