import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
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

function DismissibleAlert({ error, index }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{error.msg}</Alert.Heading>
      </Alert>
    );
  } else {
    return (
      <div></div>
    )
  }
}

function RegisterForm({updateErrors, handleRegisterComplete}) {
  const handleRegister = e => {
    e.preventDefault();
    const {name, value, email, password, password2} = e.target;
    axios.post('http://localhost:3000/api/register', {
      name: name.value,
      email: email.value,
      password: password.value,
      password2: password2.value
    }).then((res) => {
      if(res.data.length === 0) {
        handleRegisterComplete();
      }
      updateErrors(res.data);
    })
  };
  return (
    <form onSubmit={handleRegister} action="/users/register" method="POST">
      <div className="form-group">
        <label value="name">Name</label>
        <input
          type="name"
          id="name"
          name="name"
          className="form-control"
          placeholder="Enter Name"
          // value="<%= typeof name != 'undefined' ? name : '' %>"
        />
      </div>
      <div className="form-group">
        <label value="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          placeholder="Enter Email"
          // value="<%= typeof email != 'undefined' ? email : '' %>"
        />
      </div>
      <div className="form-group">
        <label value="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-control"
          placeholder="Create Password"
          // value="<%= typeof password != 'undefined' ? password : '' %>"
        />
      </div>
      <div className="form-group">
        <label value="password2">Confirm Password</label>
        <input
          type="password"
          id="password2"
          name="password2"
          className="form-control"
          placeholder="Confirm Password"
          // value="<%= typeof password2 != 'undefined' ? password2 : '' %>"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Register
      </button>
    </form>
  )
}

function RegisterModal(props) {
  const [errors, setErrors] = useState([]);
  const {setModalShowL,setModalShowR, handleRegisterComplete, ...modalProps} = props;

  const updateErrors = (newErrors) => {
    setErrors(newErrors);
    console.log(errors);
  }
  return (
    <Modal
      {...modalProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton onHide={() => {setErrors([])}}>
        <Modal.Title id="contained-modal-title-vcenter">
          Welcome to Foodly!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <div className="card card-body">
              <h1 className="text-center mb-3">
                <i className="fas fa-user-plus"></i> Register
              </h1>
              {errors.map((error, index)=> (
                <DismissibleAlert key={index} index={index} error={error} />
              ))}
              <RegisterForm updateErrors={updateErrors} handleRegisterComplete={props.handleRegisterComplete} />
              <HorGrid className="lead mt-4">Already Have An Account? <ButtonHover
                onClick={() => {props.setModalShowR(false); props.setModalShowL(true); setErrors([])}}>&nbsp;Login</ButtonHover></HorGrid>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>   </Modal.Footer>
    </Modal>
  );
}

export default RegisterModal;