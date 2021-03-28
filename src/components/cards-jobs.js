import React, { useState } from "react";
import "../styles/cards-jobs.css";
import { Modal, ModalBody } from "reactstrap";
const CardsJobs = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <React.Fragment>
      <div className="tarjetaJobs">
        <h2>{props.jobTitle}</h2>
        <p>{props.jobDescription}</p>
        <input
          className="button-agregar"
          type="submit"
          onClick={toggle}
          value="Aplicar
              "
        />
      </div>
      <Modal isOpen={modal} className="edit-modal">
        <ModalBody className="body-modal">
          <h2>Puesto a Aplicar</h2>
          <p>Descripcion de las caracteristicas a cumplir segun el puesto.</p>
          <form action="">
            <div className="formularioAplicar">
              <label>Ingrese Nombre y apellido</label>
              <input type="text" />
              <label>Linkedin o Github</label>
              <input type="text" />
              <label>Adjuntar CV</label>
              <input type="text" />
            </div>
          </form>
          <div className="cancelar-aplicar">
            <input
              className="button-cancelar"
              onClick={toggle}
              value="Cancelar
              "
              type="button"
            />
            <input
              className="button-aplicar"
              onClick={toggle}
              value="Aplicar
              "
              type="button"
            />
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default CardsJobs;
