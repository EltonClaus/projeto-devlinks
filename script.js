function toggleMode() {
  const html = document.documentElement;
    html.classList.toggle("light");

  //pega tag image e substitui a imagem
  const img = document.querySelector("#profile img");

  // se tiver light mode adicionar a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png"),
      img.setAttribute(
        "alt",
        "Foto de Elton Claus camiseta preta e fundo branco"
      )
  } else {
    img.setAttribute(
      "src",
      "./assets/avatar.png",  
      ),
      img.setAttribute(
        "alt",
        "Foto de Elton Claus com camiseta Branca e fundo Preto"
      )
  }

}