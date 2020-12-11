import React from "react";
import Message from "./Message";
import "./Contact.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function About(props) {
  return (
    <Container className="contact_container">
      <div className="form_1">
        <Message />
      </div>
      <div className="form2"></div>
    </Container>
  );
}

export default About;
