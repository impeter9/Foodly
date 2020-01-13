import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal.jsx';


const VerLine = styled.div`
height: 15px;
border-left: 1px solid rgb(228, 231, 231);
margin-left: 13px;
margin-right: 13px;
`;

// class CustomNavbar extends React.Component {
// const CustomNavbar = (props) => (
function CustomNavbar(props) {
  const [modalShow, setModalShow] = React.useState(false);
  // render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><img src="https://foodly-mvp.s3-us-west-1.amazonaws.com/foodly-logo.png" style={{height: 40}}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Find a recipe" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <VerLine />
          <Button variant="outline-success" onClick={() => setModalShow(true)}>Ingredient Search</Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}/>

        </Navbar.Collapse>
      </Navbar>
    )
}
//     )
// )
//   }
// }

export default CustomNavbar;