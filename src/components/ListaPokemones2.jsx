import React from "react";

const ListaPokemones = (props) => {
  return (
    <div className="container">
      <ul className="lista">
      <h3>POKEMONES:</h3>
        {props.pokemones.map((pokemon) => {
          return (
            <li
              key={pokemon.name}
              onClick={() => {
                props.onPokemonClick(pokemon);
              }}
            >
              {pokemon.url.split("/")[6] + ". " + pokemon.name}
            </li>
          );
        })}
      </ul>

      <button className="anterior"
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
