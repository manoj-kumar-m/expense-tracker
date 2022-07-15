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
            <Nav.Link href="/expenses"  className="btn btn-outline-danger me-2 mb-2 text-white t-2" >Expenses List</Nav.Link>
            <Nav.Link href="/incomes" className="btn btn-outline-success me-2 mb-2 text-white">Income List</Nav.Link>
            <Nav.Link href="/dashboard" className="btn btn-outline-warning me-2 mb-2 text-white">Dashboard</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/profile"  className="btn btn-outline-primary me-2 mb-2 text-white">Profile</Nav.Link>
            <Nav.Link eventKey={3} href="/add-expense" className="btn btn-outline-danger me-2 mb-2 text-light">New Expense</Nav.Link>
            <Nav.Link eventKey={3} href="/add-income" className="btn btn-outline-success me-2 mb-2 text-white " >New Income</Nav.Link>
            <Form>
              <Button variant="outline-warning mb-0 w-100 " onClick={() => dispatch(logout())}  >Logout</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
  );
};

export default PrivateNavbar;
