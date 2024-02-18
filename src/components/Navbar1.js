import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Button from "react-bootstrap/Button";

function Navbar1() {
  return (
    <div className="navbar1color">
      <Navbar data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            Paas & Caas | Self help portal{" "}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Welcome : <a href="#login">Naveen</a>
            </Navbar.Text>
            <Button className="ms-2 ml-lg-2 mt-2 mt-lg-0 " href="#logout">
              logout
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar1;
