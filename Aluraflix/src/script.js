function adicionarFilme(){
  var filmeFavoritoValor = document.querySelector('#filme').value
  validaFilmes(filmeFavoritoValor)
  document.querySelector('#filme').value= ''
  console.log(filmeFavoritoValor)
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}

function validaFilmes(filmeFavorito){
  if (filmeFavorito.endsWith('.jpg')){
    listarFilmesNaTela(filmeFavorito)
  }
  else{
    alert("Erro! Imagem inválida!")
  }
}