import "./App.css";
import Tarjeta from './components/Tarjeta.jsx';
import ListaPokemones from "./components/ListaPokemones2.jsx";
import { PokemonService } from "./components/pokemonService.js";
import React, { useState, useEffect } from 'react';


const pokemonService = new PokemonService();

function App() {

  const [data, setData] = useState(); //si uso state para una cosa, no puedo usarlo en otra?
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState();

  useEffect(() => { //como funciona useEffect??
    pokemonService.traerPagina().then(function (response) {
      setData(response.results);
    });
  }, [])
  
  if (!data) return (<h1>loading...</h1>)

  return (
    <main className="App">
      <h1>POKEDEX</h1>
      <Tarjeta
        propiedad = {pokemonSeleccionado}/>

      <ListaPokemones
        pokemones={data.map((pok) => pok.name)}
        onPokemonClick={(pokemon) => { //porque?? onPOKEMONclick no es una function. DUH!
          console.log(pokemon); //como hago para crear componente Tarjeta y pasarle los datos??
          setPokemonSeleccionado(pokemon.toUpperCase());
        }}
      />
    </main>
  );
}

export default App;
