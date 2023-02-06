function converter() {
    let valorEmReal = document.getElementById("real").value;
    let moedaSelecionada = document.getElementsByName("moedaEstrangeira");
    const valorDoDolar = 0.1962593;
    const valorDoEuro = 0.18;
    const valorDoIene = 25.62;
    const valorDoBitcoin = 0.0000085;
    let conversor;
    let resultado;
        if (moedaSelecionada[0].checked) {
            conversor = valorEmReal * valorDoDolar;
            resultado = conversor.toFixed(2);
            document.getElementById(
            "result"
            ).innerHTML = `<p>${valorEmReal} reais equivale a ${resultado} dólares</p>`;
        } else if (moedaSelecionada[1].checked) {
            conversor = valorEmReal * valorDoEuro;
            resultado = conversor.toFixed(2);
            document.getElementById(
            "result"
            ).innerHTML = `<p>${valorEmReal} reais equivale a ${resultado} euros</p>`;
        } else if (moedaSelecionada[2].checked) {
            conversor = valorEmReal * valorDoIene;
            resultado = conversor.toFixed(2);
            document.getElementById(
            "result"
            ).innerHTML = `<p>${valorEmReal} reais equivale a ${resultado} ienes</p>`;
        } else if (moedaSelecionada[3].checked) {
            conversor = valorEmReal * valorDoBitcoin;
            resultado = conversor.toFixed(4);
            document.getElementById(
            "result"
            ).innerHTML = `<p>${valorEmReal} reais equivale a ${resultado} bitcoins</p>`;
        }
    document.getElementById("real").value = "";
}