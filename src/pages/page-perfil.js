import React, { useState, Component } from "react";
import CardsPerfil from "../components/cards-perfil";
import "../styles/page-perfil.css";
const PagePerfil = () => {
  const perfilCards = [
    {
      title: "Informacion Personal",
      labelUno: "Nombre y Apellido",
      labelDos: "Lugar de Residencia",
      labelTres: "DNI",
      labelCuatro: "CUIL",
    },
    {
      title: "Estudios",
      labelUno: "Titulo",
      labelDos: "Estado",
      labelTres: "Universidad",
      labelCuatro: "Año Ingreso",
    },
    {
      title: "Experiencia Laboral",
      labelUno: "Empresa Actual",
      labelDos: "Puesto",
      labelTres: "Antiguedad en la empresa",
      labelCuatro: "Antiguedad en el puesto",
    },
  ];
  return (
    <React.Fragment>
      <div class="fixed-top"></div>
      <h1>Perfil de Postulante</h1>
      <div className="container container-cards">
        {perfilCards.map((item, index) => {
          return (
            <CardsPerfil
              perfilTitle={item.title}
              labelUno={item.labelUno}
              labelDos={item.labelDos}
              labelTres={item.labelTres}
              labelCuatro={item.labelCuatro}
              boton={item.boton}
              key={index}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default PagePerfil;
