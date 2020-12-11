import React, { Component } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export class Header extends Component {
  render() {
    return (
      <Container fluid className="contain">
        <Row className="rows">
          <Col md={8}>
            <div className="logo">
              {" "}
              9JADIASPORA.
              <div className="anime"></div>
            </div>
          </Col>

          <Col md={4}>
            <div className="navvv">
              <ul>
                <NavLink
                  className="a"
                  to="/"
                  style={{ textDecoration: "none" }}
                  activeClassName="activee"
                >
                  <li className="navv">Home</li>
                </NavLink>
                <NavLink
                  className="b"
                  to="/Culture.js"
                  style={{ textDecoration: "none" }}
                  activeClassName="active"
                >
                  <li className="navv">Events</li>
                </NavLink>
                <NavLink
                  className="c"
                  to="/Sales.js"
                  style={{ textDecoration: "none" }}
                  activeClassName="active"
                >
                  <li className="navv">Sales</li>
                </NavLink>
                <NavLink
                  className="d"
                  to="/About.js"
                  style={{ textDecoration: "none" }}
                >
                  <li className="navv">About</li>
                </NavLink>
                <NavLink
                  className="d"
                  to="/Contact.js"
                  style={{ textDecoration: "none" }}
                >
                  <li className="navv">Contact</li>
                </NavLink>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
