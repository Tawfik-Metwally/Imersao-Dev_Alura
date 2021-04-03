var cartaTawfik = {
  nome: "Flash",
  imagem: "https://i.pinimg.com/originals/12/ad/65/12ad65c587d601ae82cab456a119e0ce.gif",
  atributos:{
    Ataque: 85,
    Defesa: 85,
    Velocidade: 100
  }
}
var cartaSuleiman = {
  nome: "Superman",
  imagem: "https://media2.giphy.com/media/A2V5v8e0ZpER2/giphy.gif",
  atributos: {
    Ataque: 100,
    Defesa: 100,
    Velocidade: 95
  }
}
var cartaLucas = {
  nome: "Killua",
  imagem: "https://media2.giphy.com/media/8DTnuPhxv0m4w/giphy.gif",
  atributos: {
    Ataque: 85,
    Defesa: 70,
    velocidade: 90
  }
}



var cartaMaquina
var cartaJogador
var cartas = [cartaTawfik, cartaSuleiman, cartaLucas]
// 0          1           2

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibirCartaJogador()
}

function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] +"<br>"
    }
    var html = "<div id='opcoes' class='carta-status'>"
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + "</div>"
    
}



function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var htmlResultado = ""
    var divResultado = document.getElementById("resultado")
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Venceu</p>"
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Perdeu</p>"
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou</p>"
    }
    divResultado.innerHTML = htmlResultado
    exibirCartaMaquina()
}

function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='"+ atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
    }
    var html = "<div id='opcoes' class='carta-status'>"
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + "</div>"
    
}