export class PokemonService {
   
    traerPagina(urlPasada) {
        const url = urlPasada || "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
        const requestPromise = fetch(url);
        const jsonPromise = requestPromise.then(function (response) {
            return response.json()
        })
        return jsonPromise;
    }

    traerPokemon(url) {
        const requestPromise = fetch(url);
        const jsonPromise = requestPromise.then(function (response) {
            return response.json()
        })
        return jsonPromise;
    }
}

export default PokemonService;