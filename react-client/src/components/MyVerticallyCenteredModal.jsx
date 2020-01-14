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
        {/* <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p> */}
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <Button>Go</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;