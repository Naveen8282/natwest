import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
function Sidebar() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <div className="headerstyle">
          <Card.Header>Environment</Card.Header>
        </div>
        <ListGroup variant="flush">
          <ListGroup.Item>PaaS Environment</ListGroup.Item>
          <ListGroup.Item>PaaS Documentation</ListGroup.Item>
        </ListGroup>
      </Card>
      <Card style={{ width: "18rem" }}>
        <div className="headerstyle">
          <Card.Header>Environment</Card.Header>
        </div>
        <ListGroup variant="flush">
          <ListGroup.Item>PaaS Environment</ListGroup.Item>
          <ListGroup.Item>PaaS Documentation</ListGroup.Item>
        </ListGroup>
      </Card>
      <Card style={{ width: "18rem" }}>
        <div className="headerstyle">
          <Card.Header>Environment</Card.Header>
        </div>
        <ListGroup variant="flush">
          <ListGroup.Item>PaaS Environment</ListGroup.Item>
          <ListGroup.Item>PaaS Documentation</ListGroup.Item>
        </ListGroup>
      </Card>
      <Card style={{ width: "18rem" }}>
        <div className="headerstyle">
          <Card.Header>Environment</Card.Header>
        </div>
        <ListGroup variant="flush">
          <ListGroup.Item>PaaS Environment</ListGroup.Item>
          <ListGroup.Item>PaaS Documentation</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default Sidebar;
