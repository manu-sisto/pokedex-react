import React from "react";

const ListaPokemones = (props) => {
  return (
    <div>
      <ul>
        {props.pokemones.map((pokemon) => {
          return (
            <li
              key={pokemon} //para que?
              onClick={() => {
                props.onPokemonClick(pokemon); //no entiendo esto. cual es su proposito?
              }}
            >
              {pokemon}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListaPokemones;
