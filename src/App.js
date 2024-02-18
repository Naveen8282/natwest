import React from "react";
import "./App.css";
import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";
import Refreshdate from "./components/Refreshdate";
import Sidebar from "./components/Sidebar";
import { Col, Row } from "react-bootstrap";
import PaaS from "./components/PaaS";


function App() {
  return (
    <div>
      <Navbar1 />
      <Refreshdate />
      <Navbar2 />
      <br />
      <Row>
        <Col xs={12} md={4} lg={3}>
          <Sidebar />
        </Col>
        <Col xs={12} md={8} lg={9}>
          <PaaS />
        </Col>
      </Row>
    </div>
  );
}

export default App;
