import React from "react";

const imgStyle = {
  backgroundColor: "rgb(221, 221, 221)",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "40%",
  borderStyle: "solid",
  borderColor: "red",
  borderWidth: "5px",
  borderRadius: "5px"
};

const cardStyle = {
  backgroundColor: "rgb(190, 190, 190)",
  width: "30%",
  marginLeft: "auto",
  marginRight: "auto",
  borderStyle: "solid",
  borderColor: "green",
  borderWidth: "5px",
  borderRadius: "5px"
}

const Tarjeta = (props) => {

  const objeto = props.pokemon 
  if (!props.pokemon) return null
  console.log('render', objeto) 

  return (
    <div style={cardStyle}> 
      <img
        src= {objeto.sprites.front_default} 
        alt="imagen del pokemon"
        style={imgStyle}
      />
      <div>ID:</div>
      <div>{objeto.id}</div>
      <br></br>
      <div>Nombre:</div>
      <div>{objeto.name}</div>
      <br></br>
    </div>
  );
};


export default Tarjeta;
