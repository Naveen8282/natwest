import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navbar2() {
  return (
    <>
      <Navbar className="navbar2color " data-bs-theme="light" expand="lg">
        <Container>
          <Nav className="me-auto">
            <Link to="/paas" className="nav-link">
              PaaS Home
            </Link>
            <Link to="/caas" className="nav-link">
              CaaS Home
            </Link>
            <Link to="/paasAnc" className="nav-link">
              Paas Announcements
            </Link>
            <Link to="/caasAnc" className="nav-link">
              Caas Announcements
            </Link>
            <Link to="/contactus" className="nav-link">
              Contact Us
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar2;
