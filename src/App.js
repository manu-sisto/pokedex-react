import "./App.css";
import Tarjeta from "./components/Tarjeta.jsx";
import ListaPokemones from "./components/ListaPokemones2.jsx";
import Pokebola from "./components/Pokebola";
import { PokemonService } from "./components/pokemonService.js";
import React, { useState, useEffect } from "react";

const pokemonService = new PokemonService();

function App() {
  const [data, setData] = useState();
  const [prev, setPrev] = useState();
  const [next, setNext] = useState();
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState();
  const [siguientePokemon, setSiguientePokemon] = useState();
  const [anteriorPokemon, setAnteriorPokemon] = useState();

  useEffect(() => {
    pokemonService.traerPagina().then(function (response) {
      setData(response.results);
      setNext(response.next);
      setPrev(response.previous);
    });
  }, []);

  function datosPokemon(url) {
    return pokemonService.traerPokemon(url);
  }

  if (!data)
    return (
      <div className="container">
        <Pokebola />
        <h1 className="loading">loading...</h1>;
      </div>
    );

  return (
    <main className="App">
      <div className="container">
        <h1 className="titulo">POKEDEX</h1>
        <Tarjeta
          pokemon={pokemonSeleccionado}
          siguientePokemon={siguientePokemon}
          anteriorPokemon={anteriorPokemon}
          onSiguienteClick={(pokemon) => {
            datosPokemon(pokemon).then((obj) => {
              setPokemonSeleccionado(obj);
              setAnteriorPokemon(
                `https://pokeapi.co/api/v2/pokemon/${
                  Number(pokemon.split("/")[6]) - 1
                }/`
              );
              setSiguientePokemon(
                `https://pokeapi.co/api/v2/pokemon/${
                  Number(pokemon.split("/")[6]) + 1
                }/`
              );
            });
          }}
          onAnteriorClick={(pokemon) => {
            datosPokemon(pokemon).then((obj) => {
              setPokemonSeleccionado(obj);
              setAnteriorPokemon(
                `https://pokeapi.co/api/v2/pokemon/${
                  Number(pokemon.split("/")[6]) - 1
                }/`
              );
              setSiguientePokemon(
                `https://pokeapi.co/api/v2/pokemon/${
                  Number(pokemon.split("/")[6]) + 1
                }/`
              );
            });
          }}
        />

        <ListaPokemones
          pokemones={data.map((pok) => pok)}
          siguiente={next}
          anterior={prev}
          onPokemonClick={(pokemon) => {
            datosPokemon(pokemon.url).then((obj) => {
              setPokemonSeleccionado(obj);
              setSiguientePokemon(
                `https://pokeapi.co/api/v2/pokemon/${
                  Number(pokemon.url.split("/")[6]) + 1
                }/`
              );
              setAnteriorPokemon(
                `https://pokeapi.co/api/v2/pokemon/${
                  Number(pokemon.url.split("/")[6]) - 1
                }/`
              );
            });
            console.log(pokemon);
          }}
          onAnteriorClick={(A) => {
            pokemonService.traerPagina(A).then(function (response) {
              setData(response.results);
              setPrev(response.previous);
              setNext(response.next);
            });
          }}
          onSiguienteClick={(A) => {
            pokemonService.traerPagina(A).then(function (response) {
              setData(response.results);
              setPrev(response.previous);
              setNext(response.next);
            });
          }}
        />
      </div>
    </main>
  );
}

export default App;
