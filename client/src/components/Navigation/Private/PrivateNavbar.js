import React from "react";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/slices/users/usersSlices";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PrivateNavbar = () => {
  const dispatch = useDispatch();
  



  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand href="/" className="bi bi-currency-exchange fs-1 text-warning " ></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/expenses"  className="btn btn-outline-danger me-2 mb-2 text-white " >Expenses List</Nav.Link>
            <Nav.Link href="/incomes" className="btn btn-outline-warning me-2 mb-2 text-white">Income List</Nav.Link>
            <Nav.Link href="/profile"  className="btn btn-outline-primary me-2 mb-2 text-white">Profile</Nav.Link>
          </Nav>
          <Nav>
            <Form className="d-flex">
            <Nav.Link eventKey={2} href="/add-expense" className="btn btn-danger me-2 mb-2 text-light">New Expense</Nav.Link>
            <Nav.Link eventKey={2} href="/add-income" className="btn btn-info me-2 mb-2 text-dark">New Income</Nav.Link>
            <Button variant="warning mb-2 " onClick={() => dispatch(logout())}>Logout</Button>
          </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
  );
};

export default PrivateNavbar;
