(() => {
  const botaoProximo = document.querySelector(".carrossel__proximo");
  const botaoVoltar = document.querySelector(".carrossel__voltar");
  const listaCarrossel = document.querySelector(".carrossel__lista");
  const itemCarrossel = document.querySelector(".carrossel__item");

  botaoProximo.addEventListener("click", () => {
    listaCarrossel.scrollLeft +=
      listaCarrossel.offsetWidth - itemCarrossel.offsetWidth;
  });

  botaoVoltar.addEventListener("click", () => {
    listaCarrossel.scrollLeft -=
      listaCarrossel.offsetWidth - itemCarrossel.offsetWidth;
  });
})();
