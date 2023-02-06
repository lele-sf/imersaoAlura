var nome = prompt("Digite o seu nome:");
var valorEmDolar = prompt(
  `Olá ${nome}, digite o valor em dólar que você quer converter ao real:`
);

var cotacaoDoDolar = 5.32;
var conversor = valorEmDolar * cotacaoDoDolar;
conversor = conversor.toFixed(2);
document.write(`<p>${valorEmDolar} dólares equivale a ${conversor} reais</p>`);