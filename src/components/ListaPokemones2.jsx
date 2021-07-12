import React from "react";

const ListaPokemones = (props) => {
  return (
    <div>
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
        &#9664; Ant. 20 
      </button>

      <button
        onClick={() => {
          props.onSiguienteClick(props.siguiente);
        }}
      >
        20 Sig. &#9658;
      </button>
    </div>
  );
};

export default ListaPokemones;
