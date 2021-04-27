import React from "react";

const Tarjeta = (props) => {
  return (
    <div>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="imagen del pokemon"
      />
      <div>ID:</div>
      <div>numero id</div>
      <br></br>
      <div>Nombre:</div>
      <div>{props.propiedad}</div>
      <br></br>
    </div>
  );
};


export default Tarjeta;
