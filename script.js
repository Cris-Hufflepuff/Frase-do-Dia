function fraseDoDia(){
  var campoFrase = document.querySelector('#frase')
 var suaFrase = campoFrase.value
 var numeroAleatorio = parseInt((Math.random() * 7)+1)

   if (numeroAleatorio == 1){
   campoFrase.value=(" Tudo vale apena, a vida é um aprendizado!")
  } 
  else if (numeroAleatorio == 2) {
   campoFrase.value=("Você pode , é só ter foco, sonhos e objetivos!")

  } 
  else if (numeroAleatorio == 3) {
   campoFrase.value=("Defeitos e virtudes são apenas dois lados da mesma moeda.") 
  }
  else if (numeroAleatorio == 4) {
   campoFrase.value=("A maior de todas as torres começa no solo.") 
  }
  else if (numeroAleatorio == 5) {
  campoFrase.value=("Teu futuro esta nas tuas mãos.") 
  }
  else if (numeroAleatorio == 6) {
   campoFrase.value=("Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.") 
  } 
  else if (numeroAleatorio == 7) {
   campoFrase.value=("A juventude é um estado de espirito.") 
 }
 listarFraseNaTela(suaFrase)
 //campoFrase.value = ""
}

function listarFraseNaTela(frase) {
  var listafrase =document.querySelector('#frase')
  listafrase.innerHTML=listafrase.innerHTML
}
