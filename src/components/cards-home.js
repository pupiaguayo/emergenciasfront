import React, { useState } from "react";
import "../styles/cards-home.css";
const CardsHome = (props) => {
  return (
    <React.Fragment>
      <div className="tarjetas">
        <h2>{props.title}</h2>
        <p>{props.texto}</p>
        <button>
          <a href={props.url}>{props.boton}</a>
        </button>
      </div>
    </React.Fragment>
  );
};

export default CardsHome;
