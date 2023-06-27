import React from "react";
import "./Navbars.css";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navbars = () => {
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
          <div className="rest">
            <a
              className="res"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1FjrDQ83iuuWj04ywVSSb8CXM1a8NacVU/view?usp=drive_link"
            >
              Resume
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
