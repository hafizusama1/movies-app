import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const DeleteModal = ({
  showModal,
  handleButtonClose,
  handleButtonConfirm,
  handleRememberIsChecked,
}) => {
  return (
    <Modal
      show={showModal.isVisible}
      onHide={handleButtonClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <span style={{ textAlign: "center !important" }}>Delete Movie</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete this movie?</p>
        <Form.Check
          id="remember-checkbox"
          label="Don't ask again"
          onChange={handleRememberIsChecked}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleButtonClose}>
          Close
        </Button>
        <Button variant="primary btn-danger" onClick={handleButtonConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
