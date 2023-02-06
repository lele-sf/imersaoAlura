function jogar() {
    var numSecreto = parseInt(Math.random()*(1000 - 1) + 1)
    var qntdChutes = 0
    while(qntdChutes <= 9) {
    var chute = prompt('Digite um número entre 0 e 1000')
    if (!chute) break;
    qntdChutes++
    if(chute==numSecreto) {
        alert(`Acertou! Você conseguiu em ${qntdChutes} tentativas!`)
        break;
    } else if (chute > numSecreto) {
        alert(`Errou... O número secreto é menor do que ${chute}`)
    } else if (chute < numSecreto) {
        alert(`Errou... O número secreto é maior do que ${chute}`)
    }
    }
    if (qntdChutes > 9) {
    document.getElementById("tentativa").innerHTML = `Você perdeu! O número secreto era ${numSecreto}!`
    }
}