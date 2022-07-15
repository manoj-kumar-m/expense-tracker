import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const PublicNavbar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="">
      <Container>
        <Navbar.Brand href="/" className="bi bi-currency-exchange fs-1 text-warning " ></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="btn btn-outline-danger me-2 mb-2" >Home</Nav.Link>
            <Nav.Link href="/add-expense" className="btn btn-outline-warning me-2 mb-2">New Expense</Nav.Link>
            <Nav.Link href="/add-income" className="btn btn-outline-primary me-2 mb-2">New Income</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="/login" className="btn btn-outline-success me-2 mb-2">Login</Nav.Link>
            <Nav.Link eventKey={2} href="/register" className="btn btn-outline-info me-2 mb-2">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default PublicNavbar;
