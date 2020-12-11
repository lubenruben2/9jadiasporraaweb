import React from "react";
import "./Main.css";
import { Container, Row } from "react-bootstrap";

function Main() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let timeOfDay = "";
  const style = {
    fontsize: 30,
    fontWeight: 500,
  };

  if (hours < 12) {
    timeOfDay = "morning";
    style.color = "#2e8b57";
  } else if (hours >= 12 && hours < 13) {
    timeOfDay = "afternoon have you had lunch yet?";
    style.color = "#8b4513";
  } else {
    timeOfDay = "night";
    style.color = "#191970";
  }

  return (
    <Container className="main">
      <Row>
        <div className="time">
          <p>
            {" "}
            Good {timeOfDay}! Time is ( {hours}:{minutes} ){" "}
          </p>
        </div>
      </Row>
      <Row className="Banner">
        <div></div>
      </Row>
    </Container>
  );
}

export default Main;
