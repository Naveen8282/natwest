import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function Navbar2() {
  return (
    <>
      <Navbar className="navbar2color " data-bs-theme="light" expand="lg">
        <Container>
          <Nav className="me-auto">
            <Nav.Link>PaaS Home</Nav.Link>
            <Nav.Link>CaaS Home</Nav.Link>
            <Nav.Link href="#paas">Paas Announcements</Nav.Link>
            <Nav.Link href="#caas">Caas Announcements</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar2;
