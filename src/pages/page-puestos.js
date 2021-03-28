import React, { useState, Component } from "react";
import "../styles/page-puestos.css";
import CardsJobs from "../components/cards-jobs";
const PagePuestos = () => {
  const infoJobs = [
    {
      title: "Frontend Developer",
      texto: "Trabajo Remoto",
    },
    {
      title: "Backend Developer",
      texto: "Trabajo Remoto/Presencial",
    },
    {
      title: "UI DESIGNER",
      texto: "Trabajo Remoto/Presencial",
    },
    {
      title: "UX DESIGNER",
      texto: "Trabajo Remoto",
    },
    {
      title: "DevOps",
      texto: "Trabajo Remoto",
    },
    {
      title: "Trainee Developers",
      texto: "Trabajo Remoto",
    },
    {
      title: "FullStack Developer",
      texto: "Trabajo Remoto/Presencial",
    },
    {
      title: "Project Manager",
      texto: "Trabajo Remoto",
    },
    {
      title: "Community Manager",
      texto: "Trabajo Presencial",
    },
    {
      title: "Solutions Architect",
      texto: "Trabajo Remoto",
    },

    {
      title: "QA",
      texto: "Trabajo Presencial",
    },
    {
      title: "Product Designer",
      texto: "Trabajo Remoto",
    },
  ];
  return (
    <React.Fragment>
      <div class="fixed-top"></div>
      <h1>¡Unite a Emergencias!</h1>
      <div className="container container-cards">
        {infoJobs.map((item, index) => {
          return (
            <CardsJobs
              jobTitle={item.title}
              jobDescription={item.texto}
              key={index}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default PagePuestos;
