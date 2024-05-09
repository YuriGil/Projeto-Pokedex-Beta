/*Poke-Api - Manipulação da API*/
const pokeApi = {};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  /*codigo de consumo de api*/

  //Promise são assincronos, serão executadas em paralelo, sem impedir a continuidade do codigo
  //utilizado quando você quer transformar um modelo síncrono (que espera sua finalização), em um assíncrono (transforma a função em promises).
  //fetch promise = promessa que a requisção solicitada ao servidor será realizada/comunicação com o servidor
  return fetch(url)
    //.then = usado para manipular o resultado da promise
    //response.json() = converte o resultado para json, arquvi de comunicação reconhecido pelo JS
    .then((response) => response.json())
    //pega o resultado convertido e disponibiliza para manipulação
    .then((jsonbody) => jsonbody.results)
  //resultado convertido em Lista-HTML para manipulação baseado na promise
    .catch((error) => console.error(error))
    .finally(() => console.log("Requisição concluida"))
}
