import React from "react";
import { Link } from "react-router-dom";

const PrivateNavbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to="/" className="navbar-brand">
            <i class="bi bi-currency-exchange fs-1 text-warning "></i>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/expenses" className="nav-link active">
                  Expenses List
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/incomes" className="nav-link active">
                  Income List
                </Link>
              </li>

              <li class="nav-item mb-2">
                <Link to="/dashboard" className="btn  btn-outline-warning me-2">
                  Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/profile" className="btn  btn-outline-primary me-2">
                  Profile
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <Link to="/add-expense" className="btn btn-danger me-2">
                New Expense
              </Link>
              <Link to="/add-income" className="btn btn-success me-2">
                New Income
              </Link>
              <button className="btn btn-warning me-2">Logout</button>
            </form>
          </div>
        </div>
      </nav>



      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/expenses" className="btn btn-outline-danger me-2 mb-2" > Expenses List</Nav.Link>
            <Nav.Link href="/incomes" className="btn btn-outline-warning me-2 mb-2">Income List</Nav.Link>
            <Nav.Link href="/dashboard" className="btn btn-outline-primary me-2 mb-2">Dashboard</Nav.Link>
            <Nav.Link href="/profile" className="btn btn-outline-primary me-2 mb-2">Profile</Nav.Link>
          </Nav>
          <Form className="d-flex" action="/">
          <Nav.Link href="/dashboard" className="btn btn-outline-primary me-2 mb-2">New Expense</Nav.Link>
            <Nav.Link href="/profile" className="btn btn-outline-primary me-2 mb-2">New Income</Nav.Link>
            <Nav.Link href="/" className="btn btn-outline-primary me-2 mb-2">Button</Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>




    </>
  );
};

export default PrivateNavbar;
