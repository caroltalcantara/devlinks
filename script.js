function toggleMode() {
  const html = document.documentElement
  html.classList.toggleMode('light')

  // pegar a tag img
  const img = document.querySelector('#profile img')

  // substituir a img
  if (html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/carol-sorrindop 1.jpg')
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/carol-sorrindo 1.jpg')
  }
}
