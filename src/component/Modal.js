/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  Button,
  Form,
  ModalFooter,
} from "react-bootstrap";
import { Context } from "../utils/constant";

const PopupModal = ({ state, showModal , value, showForm }) => {
  const consumedData = useContext(Context);

  useEffect(() => {
    consumedData.setForm({
      ...consumedData.form,
      name: state?.selected?.name,
      email: state?.selected?.email,
      number: state?.selected?.number,
    });
  }, [state]);

  const handleChange = ({ target }) => {
    consumedData.setForm({ ...consumedData.form, [target.name]: target.value });
  };
  
  const closeModal = () => {
    consumedData.setModal({
      ...consumedData.modal,
      showEditModal: false,
      showAddModal: false,
      showDeletModal: false,
    });
  };
  return (
    <Modal show={showModal} onHide={closeModal}>
      <ModalHeader>
        <ModalTitle>{value}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        {showForm ? (
          <Form
            validate="true"
            onSubmit={(e) => consumedData?.onSubmitData(e, consumedData.form)}
          >
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={consumedData.form.name}
              type="text"
              required
              name="name"
              onChange={handleChange}
            />
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              name="email"
              value={consumedData.form.email}
              type="email"
              required
              onChange={handleChange}
            />
            <Form.Label>Number</Form.Label>
            <Form.Control
              name="number"
              value={consumedData.form.number}
              type="number"
              required
              onChange={handleChange}
            />
            <ModalFooter>
              <Button type="submit" className="btn-primary">
                Submit
              </Button>
              <Button
                className="btn-primary"
                // onClick={() => setShowMOdal(false)}
                onClick={closeModal}
              >
                Close
              </Button>
            </ModalFooter>
          </Form>
        ) : (
          <ModalFooter>
            <Button variant="secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={(e) => consumedData?.onSubmitData(e)}
            >
              Confirm
            </Button>
          </ModalFooter>
        )}
      </ModalBody>
    </Modal>
  );
};

export default PopupModal;
