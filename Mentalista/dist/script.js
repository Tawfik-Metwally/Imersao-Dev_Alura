var numeroAleatorio = Math.floor((Math.random() * 11))
console.log(numeroAleatorio)
var tentativa = 3
while (tentativa > 0 ){
    var chute= parseInt(prompt("Digite um número entre 0 a 10"))
    console.log(chute)
    if(chute == numeroAleatorio){
      document.write("<h2><br>Parabéns! Você acertou!</h2>")
      tentativa = 1 //break (outra alternativa)
    }
    if(chute > numeroAleatorio){
      alert("O número que você chutou é maior que o número secreto.")
    }
    if(chute < numeroAleatorio){
      alert("O número que você chutou é menor que o número secreto.")
    }
    tentativa = tentativa - 1 
}

if (chute != numeroAleatorio){
  document.write("<h2>Infelizmente você não tem mais tentativas. O número secreto era "+numeroAleatorio+".</h2")
}