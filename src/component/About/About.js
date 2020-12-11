import React from "react";
import "./About.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <Container className="container-sm bg">
      <div className="about_1">
        <p>
          ABOUT US: <br />
          <br />
          9jDaispora is a platform for Nigerians living in Diaspora. It
          showcases our core value, it shows our everyday life in Diaspora and
          how it defers from our life back home. <br />
          Nigerians have been known to reside around the world. Continents that
          have been known to be frequented by Nigerians includes Asia and
          Europe. Nigerians are well educated and business minded. Nigeria have
          a vast culture and cultural heritage. Nigeria have good food and
          excellent man-power. <br />
          This site shows what it's like living abroad by a Nigerian. Everyone
          has a story to tell and 9jDaispora is one stop place to let your story
          be told. <br />
          9jDaispora also involves in sales promotion of cars from the USA.
          Stick with us and explore more for upcoming news, event, sales and
          many more.{" "}
        </p>
      </div>

      <div className="about_2"></div>
    </Container>
  );
}

export default About;
