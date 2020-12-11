import React, { Component } from "react";
import "./Footer.css";
import { Container, Row } from "react-bootstrap";

export class Footer extends Component {
  render() {
    return (
      <Container fluid className="containn">
        <Row className="footer-logo"> 9jaDiaspora </Row> <b />
        <Row className="foot-p">
          Author: Emmanuel 9jaDiaspora Blogger | Web-Developer | Promoter and
          sales | (c)2020 All right reserved{" "}
        </Row>{" "}
        <br />
        <br />
      </Container>
    );
  }
}

export default Footer;
