var valorEmAnosLuz = parseFloat(prompt("Qual é o valor em anos-luz que o senhor quer converter?"))
var valorEmKm = ((valorEmAnosLuz*9.461*10**12)/(10**12)).toFixed(2)
var correção="anos-luz"
if (valorEmAnosLuz==1)
  correção="ano-luz"

alert("O valor digitado foi "+valorEmAnosLuz+" "+correção+";"+"\nA conversão do valor digitado é "+valorEmKm+"e+12 Km.")