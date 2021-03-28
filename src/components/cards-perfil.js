import React, { useState } from "react";
import "../styles/cards-perfil.css";
const CardsPerfil = (props) => {
  const prueba = () => {
    alert("Modulo en prueba");
  };
  return (
    <React.Fragment>
      <div className="tarjetaPerfil">
        <h2>{props.perfilTitle}</h2>
        <form className="formularioPerfil" action="">
          <label>{props.labelUno}</label>
          <input type="text" />
          <label>{props.labelDos}</label>
          <input type="text" />
          <label>{props.labelTres}</label>
          <input type="text" />
          <label>{props.labelCuatro}</label>
          <input type="text" />
        </form>
        <input
          onClick={prueba}
          className="button-agregar"
          type="submit"
          value="Actualizar"
        />
      </div>
    </React.Fragment>
  );
};

export default CardsPerfil;
