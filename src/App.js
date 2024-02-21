import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";
import Refreshdate from "./components/Refreshdate";
import Sidebar from "./components/Sidebar";
import { Col, Row } from "react-bootstrap";
import PaaS from "./components/PaaS";
import CaaS from "./components/CaaS"; // Import the CaaS component
import PaaSAnc from "./components/PaasAnc";
import CaaSAnc from "./components/CaasAnc";

function App() {
  return (
    <Router>
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
            <Route path="/paas" component={PaaS} />
            <Route path="/caas" component={CaaS} />
            <Route path="/paasAnc" component={PaaSAnc} />
            <Route path="/caasAnc" component={CaaSAnc} />
          </Col>
        </Row>
      </div>
    </Router>
  );
}

export default App;
