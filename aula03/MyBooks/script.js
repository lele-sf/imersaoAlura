var listaLivros = ["https://m.media-amazon.com/images/I/81zN7udGRUL.jpg","https://m.media-amazon.com/images/I/61Nxq9EvcKL.jpg","https://m.media-amazon.com/images/I/91DIYtTpRnL.jpg","https://m.media-amazon.com/images/I/51ohv8wLuxL.jpg","https://m.media-amazon.com/images/I/91M9xPIf10L.jpg","https://m.media-amazon.com/images/I/5126hLd7jsL.jpg"];
var listaNomes = ["Duna","Between Two Fires","The Priory of the Orange Tree", "Half a King","O Hobbit","Dracula"];
/* desafio com o while
let i = 0;
while (i<listaLivros.length) {
  i++
  document.write("<img src = "+ listaLivros[i] + ">")
}
*/
function gerarListaLivros() {
  var res = document.getElementById('res');
  res.innerHTML = '';
  for (let i = 0; i < listaLivros.length; i++) {
    if (listaLivros[i].endsWith(".jpg")) {   
      res.innerHTML += "<div class='livro'>" + 
        "<img src = " + listaLivros[i] + ">" + 
        '<p class="nomes"> ' + listaNomes[i] + '</p>' +
        "</div>";
    } else {
      alert("A "+ (i+1) +" imagem não é válida. Por favor, forneça uma imagem com a extensão .jpg.");
    }
  }
}

gerarListaLivros();

  function adicionarLivro() {
    var nomeLivro = document.getElementById('linkNome').value;
    var linkImg = document.getElementById('linkImg').value;
    var res = document.getElementById('res');
    
    if (linkImg.endsWith(".jpg")) {
      listaLivros.push(linkImg);
      listaNomes.push(nomeLivro);
      gerarListaLivros();
    } else {
      alert("A imagem não é válida. Por favor, forneça uma imagem com a extensão .jpg.");
    }
  }
  function removerLivro() {
    var nome = prompt('Qual livro você deseja remover?')
      for (let i = 0; i < listaLivros.length; i++) {
        if (listaNomes[i] === nome) {
          listaLivros.splice(i, 1);
          listaNomes.splice(i, 1);
      }
        gerarListaLivros()
      }
  }