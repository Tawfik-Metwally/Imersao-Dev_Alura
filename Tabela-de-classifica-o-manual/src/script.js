var J1={
  nome:"Tawfik",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}
var J2={
  nome:"Suleiman",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}


J1.pontos = calculoDePontos(J1)
console.log(J1.pontos)
J2.pontos = calculoDePontos(J2)
console.log(J2.pontos)
function calculoDePontos(J){
  var pontos = J.vitorias * 3 + J.empates
  return pontos
}



var jogadores = [J1,J2]
exibirValores(jogadores)
function exibirValores(jogadores){
  var html = ""
  var a = 0
  for(i = 0; i < jogadores.length; i++){
    html += "<tr><td>"+jogadores[i].nome+"</td>"
    html += "<td>"+jogadores[i].vitorias+"</td>"
    html += "<td>"+jogadores[i].empates+"</td>"
    html += "<td>"+jogadores[i].derrotas+"</td>"
    html += "<td>"+jogadores[i].pontos+"</td>"
    html += "<td><button onClick='adicionarVitoria("+i+")'>Vitória</button></td>"
    if(a == 0){
      html += "<td rowspan='2'><button onClick='adicionarEmpate("+i+")'>Empate</button></td>"
    }
    html += "<td><button onClick='adicionarDerrota("+i+")'>Derrota</button></td>"
    a++
  }
  i = 0
  html += "<tr><td colspan='8'><button onClick='Zerar("+i+")' style='width: 250px; height: 25px'>Zerar</button></td></tr>"
  var tabelaDeClassificacao = document.getElementById('tabelaJogadores')
  tabelaDeClassificacao.innerHTML = html
}

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculoDePontos(jogador)
  exibirValores(jogadores)
}
function adicionarEmpate(i){
  var jogador1 = jogadores[i+1]
  var jogador2 = jogadores[i]
  jogador1.empates++
  jogador2.empates++
  jogador1.pontos = calculoDePontos(jogador1)
  jogador2.pontos = calculoDePontos(jogador2)
  exibirValores(jogadores)
}
function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirValores(jogadores)
}
function Zerar(i){
  var jogador1 = jogadores[i]
  var jogador2 = jogadores[i+1]
  jogador1.derrotas = 0
  jogador1.vitorias = 0
  jogador1.empates = 0
  jogador1.derrotas = 0
  jogador1.pontos = 0
  jogador2.derrotas = 0
  jogador2.vitorias = 0
  jogador2.empates = 0
  jogador2.derrotas = 0
  jogador2.pontos = 0
  exibirValores(jogadores)
}