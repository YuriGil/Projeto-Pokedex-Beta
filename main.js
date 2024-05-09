/*
const offset = 0;
const limit = 9;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
*/

//função para converter o resultado da promise em html para ser exibido e manipulado
function convertPokemonToLi(pokemon) {
  return `
  <li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>
    
    <div class="detail">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
        </ol>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif" alt="Bulbasaur">
    </div>
</li>
`;
}
//pega o elemento do HTML para ser manipulado no JS
const pokemonList = document.getElementById("pokemonList");

//transforma a lista promise em lista HTML
pokeApi.getPokemons().then((pokemons) => {
    //percorrendo a lista
    for (let i = 0; i < pokemons.length; i++) {
      //pega o elemento e converte ele para LI
      const pokemon = pokemons[i];
      //concatenando ele na lista
      pokemonList.innerHTML += convertPokemonToLi(pokemon);
    }
  })
  