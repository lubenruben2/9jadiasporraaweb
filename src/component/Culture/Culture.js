import React from "react";
import { Container } from "react-bootstrap";
import "./Culture.css";

function Culture() {
  return (
    <Container className="culture_contain">
      <div className="culture_grid">
        <div className="culture_1  culture_text"> Culture is our heritage.</div>
        <div className="culture_2">
          <div className="culture_title">
            Nigerian Cultural Activities around the world
          </div>
          <div className="culture_article">
            <div className="article_side1">
              <p>What is Nigeria Masquerade Exhibition?</p>
              Many Nigerian societies have a rich tradition of masquerades. They
              are a symbol of culture and customs normally portrayed in colorful
              robes accompanied by traditional dancers and music. The masks
              adorned are determined by tradition and beliefs. The Exhibition
              branded alongside the parade & festival is a display of authentic
              masquerades from Nigeria representing key tribal groups. It
              symbolizes the artistry through colorful-traditional attire and
              displays that embrace history and traditions.
              <br />
              <br />
              <button className="more_event">Read More</button>
            </div>
            <div className="article_side2">
              <img
                className="eventimg1"
                src={require("../Image/eventimg1.jpg")}
                alt="masqurade"
                width="550px"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Culture;
