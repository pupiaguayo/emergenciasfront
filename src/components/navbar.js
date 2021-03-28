import React, { useState } from "react";
import logoEmergencias from "../logoEmergencias.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "../styles/navbar.css";
const NavEmergencias = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="color">
      <Navbar className="nav-edit" dark expand="md">
        <NavbarBrand href="/">
          <img className="logo" src={logoEmergencias} alt="" />
        </NavbarBrand>
        <NavbarToggler className="button-nav" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="container-links" navbar>
            <NavItem className="item-links">
              <NavLink className="links" href="/">
                Inicio
              </NavLink>
            </NavItem>
            <NavItem className="item-links">
              <NavLink className="links" href="/puestos">
                Puestos
              </NavLink>
            </NavItem>
            <NavItem className="item-links">
              <NavLink className="links" href="/perfil">
                Perfil
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavEmergencias;
