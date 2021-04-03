var cartaTawfik = {
  nome: "Flash",
  atributos:{
    Ataque: 85,
    Defesa: 75,
    Velocidade: 95
  }
}
var cartaSuleiman = {
  nome: "Superman",
  atributos: {
    Ataque: 95,
    Defesa: 80,
    Velocidade: 80
  }
}
var cartaLucas = {
  nome: "Killua",
  atributos: {
    ataque: 90,
    defesa: 70,
    velocidade: 90
  }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaTawfik,cartaSuleiman,cartaLucas]

function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random()*3)
    cartaMaquina = cartas[numeroCartaMaquina]
  
    var numeroCartaJogador = parseInt(Math.random()*3)
    while (numeroCartaMaquina == numeroCartaJogador){
      var numeroCartaJogador = parseInt(Math.random()*3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    exibirOpcoes()
}

function exibirOpcoes(){
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>"+ atributo + " "
  }
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado(){
  var radioAtributo = document.getElementsByName('atributo')
  for (i = 0; i < radioAtributo.length; i++){
     if (radioAtributo[i].checked ){
       return radioAtributo[i].value
     }
  }
}
function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado()
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    alert("Venceu")
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    alert("Perdeu")
  } else{
    alert("Empatou")
  }
  console.log(atributoSelecionado)
  console.log(cartaMaquina)
}