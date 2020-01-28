import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
import IngredientSearchModal from './IngredientSearchModal.jsx';
import RegisterModal from './RegisterModal.jsx';
import LoginModal from './LoginModal.jsx';


const VerLine = styled.div`
  height: 25px;
  border-left: 1px solid rgb(228, 231, 231);
  margin-left: 13px;
  margin-right: 13px;
`;

function CustomNavbar(props) {
  const [modalShowIS, setModalShowIS] = React.useState(false);
  const [modalShowR, setModalShowR] = React.useState(false);
  const [modalShowL, setModalShowL] = React.useState(false);
  const [regComp, setRegComp] = React.useState(false);
  const handleRegisterComplete = () => {
    setRegComp(true);
    setModalShowR(false);
    setModalShowL(true);
  }
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><img src="https://foodly-mvp.s3-us-west-1.amazonaws.com/foodly-logo.png" style={{height: 45}} onClick={props.handleBackToHome} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" onClick={props.handleBackToHome}>Home</Nav.Link>
            <Nav.Link href="#link" onClick={props.handleShowFavorites}>Favorites</Nav.Link>
            <NavDropdown title="Options" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline onSubmit={props.handleSearchChange}>
            <FormControl type="text" placeholder="Find a recipe" className="mr-sm-0" />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
          <VerLine />
          <Button variant="outline-success" onClick={() => setModalShowIS(true)}>Ingredient Search</Button>
          <VerLine />
          <Button variant="secondary" onClick={() => setModalShowL(true)}>Login</Button>
          <Button variant="primary" onClick={() => setModalShowR(true)}>Register</Button>
          <IngredientSearchModal
            show={modalShowIS}
            onHide={() => setModalShowIS(false)}/>
          <RegisterModal
            handleRegisterComplete={handleRegisterComplete}
            setModalShowL={setModalShowL}
            setModalShowR={setModalShowR}
            show={modalShowR}
            onHide={() => setModalShowR(false)}/>
          <LoginModal
            regComp = {regComp}
            setModalShowL={setModalShowL}
            setModalShowR={setModalShowR}
            show={modalShowL}
            onHide={() => setModalShowL(false)}/>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default CustomNavbar;