var listaJogadores = [];
function addJogador() {
    var nomeJogador = prompt("Digite o nome do jogador");
    var novoJogador = {
        nome: nomeJogador,
        vitoria: 0,
        empate: 0,
        derrota: 0,
        pontos: 0
    };
    zerarPontos();
    listaJogadores.push(novoJogador);
    exibirNaTela();
}
function remJogador() {
  var nomeJogador = prompt("Digite o nome do jogador que deseja remover");
  var jogadorEncontrado = false;
  for (var i in listaJogadores) {
    if (listaJogadores[i].nome === nomeJogador) {
        jogadorEncontrado = true;
        listaJogadores.splice(i, 1);
        break;
    }
}
  if (jogadorEncontrado) {
    exibirNaTela();
  } else {
    alert("Jogador não encontrado!Tente novamente!");
  }
    exibirNaTela();
    zerarPontos();
}
function zerarPontos() {
  for(var i in listaJogadores) {
    listaJogadores[i].vitoria = 0;
    listaJogadores[i].empate = 0;
    listaJogadores[i].derrota = 0;
    listaJogadores[i].pontos = 0;
  }
  exibirNaTela();
}

  var elementoTabela = document.getElementById("tabelaJogadores");
  
  exibirNaTela();

  function exibirNaTela() {
    var res = "";
    for (let i = 0; i < listaJogadores.length; i++) {
    res += `
        <tr>
            <td>${listaJogadores[i].nome}</td>
            <td>${listaJogadores[i].vitoria}</td>
            <td>${listaJogadores[i].empate}</td>
            <td>${listaJogadores[i].derrota}</td>
            <td>${listaJogadores[i].pontos}</td>
            <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
            <td><button onClick="adicionarEmpate()">Empate</button></td>
            <td><button onClick="adicionarDerrota()">Derrota</button></td>
          </tr>
    `;
    }
    elementoTabela.innerHTML = res
  }
  function adicionarVitoria(jogador) {
    listaJogadores[jogador].vitoria++;
    listaJogadores[jogador].pontos = listaJogadores[jogador].pontos + 3;
    exibirNaTela();
  }
  function adicionarEmpate() {
    for (var i in listaJogadores) {
      listaJogadores[i].empate++
      listaJogadores[i].pontos++
    }
    exibirNaTela();
  }
  function adicionarDerrota() {
    var nomeJogador = prompt("Digite o nome do jogador que perdeu");
    for (var i in listaJogadores) {
      if (listaJogadores[i].nome === nomeJogador) {
        listaJogadores[i].derrota++
      } else {
        adicionarVitoria(i)
      }
    }
    exibirNaTela();
  }