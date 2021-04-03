var pergunta1=(prompt("Quem é esse pokemon? ").toLowerCase())
var nomeDoPokemon= "Pikachu"
if (pergunta1 == (nomeDoPokemon).toLowerCase()){
  document.write("<h2>Parabéns, você acertou!<br>A sua evolução é o Raichu.<br>Você sabia disso?</div>")
} else{
  document.write("<h2>"+"Infelizmente você errou.<br>A resposta certa é: "+nomeDoPokemon+"<br>A sua evolução é o Raichu!</h2>")
}
