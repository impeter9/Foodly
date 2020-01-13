import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Search with Ingredients
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form inline>
          <FormControl type="text" placeholder="Keywords" className="mr-sm-0" />
          <Button variant="outline-success">Add</Button>
        </Form>
        <Form inline>
          <FormControl type="text" placeholder="include ingredients" className="mr-sm-0 mt-sm-3" />
          <Button className="mt-sm-3" variant="outline-success"> + </Button>
        </Form>
        <Form inline>
          <FormControl type="text" placeholder="exclude ingredients" className="mr-sm-0 mt-sm-3" />
          <Button className="mt-sm-3" variant="outline-success"> - </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button>Go</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;