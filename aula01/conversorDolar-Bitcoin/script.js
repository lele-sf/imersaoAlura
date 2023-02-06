var valorEmDolar = prompt(
    `Digite o valor em dólar que você quer converter para Bitcoin:`
  );
  
  var cotacaoDoDolar = 0.000044;
  var conversor = valorEmDolar * cotacaoDoDolar;
  conversor = conversor.toFixed(5);
  document.write(
    `<p>${valorEmDolar} dólares equivale a ${conversor} em bitcoins</p>`
  );