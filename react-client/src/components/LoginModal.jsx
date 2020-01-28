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

function LoginModal(props) {
  const {setModalShowL,setModalShowR, regComp, ...modalProps} = props;
  return (
    <Modal
      {...modalProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Welcome Back!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.regComp ? <div>reg complete please sign in</div> : <div>nothing</div>}
        <div class="row mt-5">
          <div class="col-md-6 m-auto">
            <div class="card card-body">
              <h1 class="text-center mb-3"><i class="fas fa-sign-in-alt"></i>  Login</h1>
              <form action="/users/login" method="POST">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="form-control"
                    placeholder="Enter Password"
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-block">Login</button>
              </form>
              <HorGrid class="lead mt-4">
                No Account? <ButtonHover
                onClick={() => {props.setModalShowL(false); props.setModalShowR(true)}}>&nbsp;Register</ButtonHover>
              </HorGrid>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>   </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;