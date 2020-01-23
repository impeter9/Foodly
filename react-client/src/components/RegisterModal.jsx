import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
import axios from "axios";

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

  const handleRegister = function(e) {
    e.preventDefault();
    const {name, value, email, password, password2} = e.target;
    console.log(name.value);
    console.log(email.value);
    console.log(password.value);
    console.log(password2.value);
    axios.post('http://localhost:3000/api/register', {
      name: name.value,
      email: email.value,
      password: password.value,
      password2: password2.value
    })
  };

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
              <form onSubmit={handleRegister} action="/users/register" method="POST">
                <div class="form-group">
                  <label value="name">Name</label>
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
                  <label value="email">Email</label>
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
                  <label value="password">Password</label>
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
                  <label value="password2">Confirm Password</label>
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