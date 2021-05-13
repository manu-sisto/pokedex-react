import "./App.css";
import Tarjeta from "./components/Tarjeta.jsx";
import ListaPokemones from "./components/ListaPokemones2.jsx";
import { PokemonService } from "./components/pokemonService.js";
import React, { useState, useEffect } from "react";

const pokemonService = new PokemonService();

function App() {
  const [data, setData] = useState();
  const [prev, setPrev] = useState();
  const [next, setNext] = useState();
  const [PokemonSeleccionado, setPokemonSeleccionado] = useState();

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


  if (!data) return <h1>loading...</h1>;

  return (
    <main className="App">
      <h1>POKEDEX</h1>

      <Tarjeta pokemon={PokemonSeleccionado} />

      <ListaPokemones
        pokemones={data.map(pok => (pok))}

        siguiente={next}
        anterior={prev}
        onPokemonClick={(pokemon) => {
          datosPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(
            (obj) => {
              setPokemonSeleccionado(obj);
            }
          );
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
    </main>
  );
}

export default App;
