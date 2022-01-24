(() => {
  const botaoProximo = document.querySelector(".carrossel__proximo");
  const botaoVoltar = document.querySelector(".carrossel__voltar");
  const listaCarrossel = document.querySelector(".carrossel__lista");

  botaoProximo.addEventListener("click", () => {
    listaCarrossel.scrollLeft += listaCarrossel.offsetWidth;
  });

  botaoVoltar.addEventListener("click", () => {
    listaCarrossel.scrollLeft -= listaCarrossel.offsetWidth;
  });
})();
