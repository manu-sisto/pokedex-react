import React from "react";

const ListaPokemones = (props) => {
  return (
    <div>
      <h3>POKEMONES:</h3>
      <ul>
        {props.pokemones.map((pokemon) => {
          return (
            <li
              key= {pokemon.name}
              
              onClick={() => {
                props.onPokemonClick(pokemon);
              }}
            >
              {pokemon.url.split("/")[6] + ". " + pokemon.name}
            </li>
          );
        })}
      </ul>

      <button
        onClick={() => {
          props.onAnteriorClick(props.anterior);
        }}
      >
        Anterior  
      </button>

      <button
        onClick={() => {
          props.onSiguienteClick(props.siguiente);
        }}
      >
        Siguiente 
      </button>
    </div>
  );
};

export default ListaPokemones;
