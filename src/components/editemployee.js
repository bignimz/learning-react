import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditEmployee() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-primary px-5 mt-3" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="editModal">
            <div className="mb-3">
              <label for="firstName" className="form-label">
                First Name
              </label>
              <input type="text" className="form-control" id="first-name" />
              <label for="lastName" className="form-label">
                Last Name
              </label>
              <input type="text" className="form-control" id="last-name" />
            </div>
            <label for="role" className="form-label">
              Position
            </label>
            <input type="text" className="form-control" id="role" />
            <label for="department" className="form-label">
              Department
            </label>
            <input type="text" className="form-control" id="department" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button
            id="editModal"
            className="btn btn-success"
            onClick={handleClose}
          >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;
