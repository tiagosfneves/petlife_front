const elementosDuvida = document.querySelectorAll(".duvida");

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
        // fecha as outras duvidas
        elementosDuvida.forEach(function (outraDuvida) {
            if (outraDuvida !== duvida) {
              outraDuvida.classList.remove("ativa");
            }
        });
        //abre a duvida clicada
    duvida.classList.toggle("ativa");
  });
});
