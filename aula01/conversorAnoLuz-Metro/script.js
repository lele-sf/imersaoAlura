var valorEmAnoLuz = prompt(
    `Digite o valor em ano-luz que você quer converter para metros:`
  );
  
  var valorEmMetro = 9.461e15;
  var conversor = valorEmAnoLuz * valorEmMetro;
  conversor = conversor.toExponential();
  document.write(
    `<p>${valorEmAnoLuz} ano-luz equivale aproximadamente a ${conversor} em metros</p>`
  );