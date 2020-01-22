import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';

const ButtonHover = styled.p`
  color: rgb(238, 90, 91);
  &:hover {
    color: rgb(229, 25, 34);
    text-decoration: underline;
  }
`;

const HorGrid = styled.div`
  display: flex;
  flex-direction: row;
`;

function RegisterModal(props) {
  const {setModalShowL,setModalShowR, ...modalProps} = props;
  return (
    <Modal
      {...modalProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Welcome to Foodly!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="row mt-5">
          <div class="col-md-6 m-auto">
            <div class="card card-body">
              <h1 class="text-center mb-3">
                <i class="fas fa-user-plus"></i> Register
              </h1>
              <form action="/users/register" method="POST">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    class="form-control"
                    placeholder="Enter Name"
                    // value="<%= typeof name != 'undefined' ? name : '' %>"
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-control"
                    placeholder="Enter Email"
                    // value="<%= typeof email != 'undefined' ? email : '' %>"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="form-control"
                    placeholder="Create Password"
                    // value="<%= typeof password != 'undefined' ? password : '' %>"
                  />
                </div>
                <div class="form-group">
                  <label for="password2">Confirm Password</label>
                  <input
                    type="password"
                    id="password2"
                    name="password2"
                    class="form-control"
                    placeholder="Confirm Password"
                    // value="<%= typeof password2 != 'undefined' ? password2 : '' %>"
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-block">
                  Register
                </button>
              </form>
              <HorGrid class="lead mt-4">Already Have An Account? <ButtonHover
                onClick={() => {props.setModalShowR(false); props.setModalShowL(true)}}>&nbsp;Login</ButtonHover></HorGrid>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>   </Modal.Footer>
    </Modal>
  );
}

export default RegisterModal;