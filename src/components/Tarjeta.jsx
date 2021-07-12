import React from "react";

const Tarjeta = (props) => {
  const objeto = props.pokemon;

  let peso = (Math.ceil(objeto.weight * 0.1))
  let altura = (Math.ceil(objeto.height * 10))

  if (!props.pokemon) return null;
  console.log("render", objeto);

  return (
    <div className="tarjeta">
      <div className="nombreTarjeta">{objeto.name}</div>
      <img
        className="imagenPokemon"
        src={objeto.sprites.front_default}
        alt="imagen del pokemon"
      />
      <div>ID: {objeto.id}</div>
      <div>ALTURA: {peso} Cm.</div>
      <div>PESO: {altura} Kg.</div>

      <br></br>
    </div>
  );
};

export default Tarjeta;
