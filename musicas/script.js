const hardRock = 
{
  genero: "hard-rock", musica: "Måneskin - ZITTI E BUONI"
};
const indiePop = 
{
  genero: "indie-pop", musica: "AURORA - Animal"
};
const rockNacional = 
{
  genero: "rock-nacional", musica: "Projeto Rivera - Varanda"
};

const genero = document.querySelector("#genero-musical");
const divMusica = document.querySelector(".musica");
const musica = document.querySelector("#musica");

genero.addEventListener('change', function (event) {
  divMusica.classList.remove('none');

  if (event.target.value === "0") {
    divMusica.classList.add('none');
    musica.value = null;
  }

  if (event.target.value === hardRock.genero) {
    musica.value = hardRock.musica;
  }
  if (event.target.value === indiePop.genero) {
    musica.value = indiePop.musica;
  }
  if (event.target.value === rockNacional.genero) {
    musica.value = rockNacional.musica;
  }
});