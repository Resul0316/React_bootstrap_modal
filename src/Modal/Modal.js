import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import "./Modal.css";

function Modale() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  return (
    <>
      <Button className="me-2 mb-2" onClick={() => handleShow(true)}>
        Full screen
      </Button>

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header className="Modal__header" closeButton>
          <Modal.Title className="Modal__title"></Modal.Title>
        </Modal.Header>
        <Modal.Body className="Modal__body">
          <p className="h3 Modal__title">Thank you for your registration</p>
          <div className="Modal__body_content">
          This part will be change Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eos nam sunt, harum nemo quibusdam eaque
          consequuntur, quo reiciendis fugit a soluta assumenda id at veritatis!
          Qui deserunt quia voluptates. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquam, consequuntur recusandae? Est incidunt,
          rerum placeat pariatur impedit in maxime, consequatur odio fugiat
          velit veniam ducimus consectetur aspernatur voluptates tempore dolores
          explicabo ipsum quibusdam eligendi dignissimos? Repellendus in
          molestias harum tempore?
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modale;


