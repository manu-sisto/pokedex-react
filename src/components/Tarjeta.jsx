import React from "react";

const Tarjeta = (props) => {
  if (!props.pokemon) return null;

  const objeto = props.pokemon;
  let peso = Math.ceil(objeto.weight * 0.1);
  let altura = Math.ceil(objeto.height * 10);

  return (
    <div>
      <div className="tarjeta">
        <div className="nombreTarjeta">{objeto.name}</div>
        <img
          className="imagenPokemon"
          src={objeto.sprites.front_default}
          alt="imagen del pokemon"
        />
        <div>ID: {objeto.id}</div>
        <div>ALTURA: {altura} Cm.</div>
        <div>PESO: {peso} Kg.</div>
        <br />
        <button
          onClick={() => {
            props.onAnteriorClick(props.anteriorPokemon)
          }}
        >
          anterior
        </button>
        <button
          onClick={() => {
            props.onSiguienteClick(props.siguientePokemon)
          }}
        >
          siguiente
        </button>
      </div>
    </div>
  );
};

export default Tarjeta;
