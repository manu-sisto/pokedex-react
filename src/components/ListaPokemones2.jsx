import React from "react";

const ListaPokemones = (props) => {
  return (
    <div>
      <h3>POKEMONES:</h3>
      <ul>
        {props.pokemones.map((pokemon) => {
          return (
            <li
              key={pokemon}
              onClick={() => {
                props.onPokemonClick(pokemon);
              }}
            >
              1
              {pokemon}
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

      <p>{props.siguiente}</p>
      <p>{props.prev}</p>
    </div>
  );
};

export default ListaPokemones;
