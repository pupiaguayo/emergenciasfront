import React, { useState, Component } from "react";
import "../styles/page-home.css";
import CardsHome from "../components/cards-home";
const PageHome = () => {
  const infoCards = [
    {
      title: "Búsqueda de puestos",
      texto:
        "Consulte nuestras ofertas de puestos actuales. Puede buscar, filtrar y clasificar puestos para encontrar el más adecuado para usted.",
      boton: "¡Comience su búsqueda ahora!",
      url: "/puestos",
    },
    {
      title: "Gestión de puestos",
      texto:
        "Puede supervisar y gestionar los puestos que ha encontrado. Utilice nuestras herramientas organizativas para guardar puestos y revisarlos más tarde",
      boton: " ¡Cree una alerta de puesto!",
      url: "/puestos",
    },
    {
      title: "Mi perfil",
      texto:
        "Cree un perfil personal que guarde su experiencia previa y sus datos profesionales para que los reclutadores puedan encontrarle con facilidad cuando surjan nuevos puestos.",
      boton: "¡Actualice su perfil!",
      url: "/perfil",
    },
    {
      title: "Nosotros",
      texto:
        "La mejora continua de los procesos, el desarrollo y aplicación de tecnología y el compromiso de los colaboradores son los pilares fundamentales donde se apoya el crecimiento de la empresa para ser un  líder en gestión de soluciones de salud.​",
      boton: "¡Conocenos!",
      url: " https://www.linkedin.com/company/emergencias/about/",
    },
    {
      title: "Equipo",
      texto:
        "Soluciones digitales con inteligencia cognitiva para la gestión de la salud y el bienestar de las personas, basadas en los últimos avances en IA. Nuestro propósito es simplificar el acceso a la salud en el mundo creando plataformas digitales inteligentes.",
      boton: "Ver Integrantes",
      url: " https://www.linkedin.com/company/emergencias/people/",
    },
    {
      title: "Especialidades",
      texto:
        "Inteligencia Artificial, AI, Internet of things, App development, Desarrollo de apps, Plataforma Médicas, Soluciones Médicas, Software Development, Desarrollo de Software, Product Engineering, Ingeniería de Producto, Medical Technology, etc",
      boton: "Ver mas",
      url:
        "https://www.linkedin.com/company/emergencias/life/transformacion-digital/",
    },
  ];
  return (
    <React.Fragment>
      <div class="fixed-top"></div>
      <h1>¡Hola Postulantes!</h1>
      <div className="container container-cards">
        {infoCards.map((item, index) => {
          return (
            <CardsHome
              title={item.title}
              texto={item.texto}
              url={item.url}
              boton={item.boton}
              key={index}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default PageHome;
