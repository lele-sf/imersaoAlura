var listaFilmes = [
  {
    nome: "Sucker Punch",
    imagem: "https://s2.glbimg.com/1H6AlhJ3avDo8spNcvREfPs5Rxc=/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2019/E/k/1jALDgR1mtwooMxB6yhg/foto25cul-301-dvd3-d30.jpg",
    trailer: "https://www.youtube.com/watch?v=OUCWPH9u94s"
  },
  {
    nome: "NOPE",
    imagem: "https://m.media-amazon.com/images/M/MV5BOGJhYzAwN2MtNjA1Ny00ZjJiLWFmNzYtMDgzNTUzYjc5NTIzXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=DbNk5A468Xc"
  },
  {
    nome: "Matrix",
    imagem: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=2KnZac176Hs"
  }
]
gerarListaFilme()

function gerarListaFilme() {
  var elementoListaFilmes = document.getElementById('listaFilmes')
  elementoListaFilmes.innerHTML = ''
  for (var i = 0; i < listaFilmes.length; i++) {
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML +  '<div class="filme">' +
    '<a href=' + listaFilmes[i].trailer + ' target="_blank">' + '<img src=' + listaFilmes[i].imagem + '></a><p>' + listaFilmes[i].nome + '</p>'
    '</div>'
  }
}
function adicionarFilme() {
  var nomeFilme = document.getElementById('nomeFilme').value
  var filmeFavorito = document.getElementById('filme').value
  var linkFilme = document.getElementById('trailerFilme').value
  var elementoListaFilmes = document.getElementById('listaFilmes')
  if (
    filmeFavorito.endsWith("jpeg") ||
    filmeFavorito.endsWith("jpe") ||
    filmeFavorito.endsWith("jpg") ||
    filmeFavorito.endsWith("png")
  ) {
    listaFilmes.push({nome: nomeFilme, imagem: filmeFavorito, trailer: linkFilme})
    gerarListaFilme()
    document.getElementById('nomeFilme').value = ''
    document.getElementById('filme').value = ''
    document.getElementById('trailerFilme').value = ''
  } else {
    alert('A imagem não é válida. Por favor, forneça uma imagem com a extensão .jpg ou .png')
  }
}
function removerFilme() {
  var nomeFilme = prompt('Qual filme você deseja remover?')
  for (var i = 0; i < listaFilmes.length; i++) {
    if (listaFilmes[i].nome == nomeFilme) {
      listaFilmes.splice(i, 1)
    }
  }
  gerarListaFilme()
}
function limparLista() {
  listaFilmes = []
  gerarListaFilme()
}

