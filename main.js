const offset = 0;
const limit = 9;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
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
`
}
//pega o elemento do HTML para ser manipulado no JS
const pokemonList = document.getElementById('pokemonList')

//Promise são assincronos, serão executadas em paralelo, sem impedir a continuidade do codigo
//utilizado quando você quer transformar um modelo síncrono (que espera sua finalização), em um assíncrono (transforma a função em promises).
//fetch promise = promessa que a requisção solicitada ao servidor será realizada/comunicação com o servidor
fetch(url)
  //.then = usado para manipular o resultado da promise
  //response.json() = converte o resultado para json, arquvi de comunicação reconhecido pelo JS
  .then((response) => response.json())
  //pega o resultado convertido e disponibiliza para manipulação
  .then((jsonbody) => jsonbody.results)
  //resultado convertido em Lista-HTML para manipulação baseado na promise
  .then((pokemons) => {
    //percorrendo a lista
    for (let i = 0; i < pokemons.length; i++) {
        //pega o elemento e converte ele para LI
        const pokemon = pokemons[i];
        //concatenando ele na lista
        pokemonList.innerHTML += convertPokemonToLi(pokemon)
        
    }
  })
  .catch((error) => console.error(error))
  .finally(() => console.log("Requisição concluida"));
