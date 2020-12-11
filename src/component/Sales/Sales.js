import React from "react";
import { Container } from "react-bootstrap";
import "./Sales.css";

function Sales() {
  return (
    <Container className="contain_sales">
      <div className="sales_title">
        <h3 className="sharp">Buy! Sharp TOKUNBO Cars from the USA </h3>
      </div>
      <div className="divider2">.</div>
      <div className="first_g1">
        <button className="pop1" />
      </div>
      <div className="first_g2">
        <button className="pop2" />
      </div>
      <div className="first_g3">
        <button className="pop3" />
      </div>
      <div className="car_info">
        <div className="h3">
          -Model: 2010 Lexus RX <br />
          -MPG: Up to 18 city / 25 highway
          <br />
          -Towing capacity: 2,000 lbs
          <br />
          -Tire size: P235/60R18
          <br />
          -Dimensions: 188″ L x 74″ W x 66″ H<br />
          -Horsepower: 275 hp
          <br />
          -Curb weight: 4,178 to 4,343 lbs
          <br />
        </div>

        <div className="h4">
          {" "}
          <a href="http://localhost:3000/Contact.js">Click here!</a> for more
          pictures and pricing. <br />
          <br />
          Also dont like what you see? let <br />
          us find you a car.{" "}
          <a href="http://localhost:3000/Contact.js">Click here!</a>
          <br />
        </div>
      </div>

      <div className="divider">.</div>

      <div className="second_g1">
        <button className="pop22" />
      </div>
      <div className="second_g2">
        <button className="pop333" />
      </div>
      <div className="second_g3">
        <button className="pop11" />
      </div>
      <br />
      <div className="car_info2 car_info">
        <div className="h3">
          -Model: 2020 Toyota C-HR Subcompact sport utility vehicle <br />
          -MPG: 27 city / 31 highway
          <br />
          -Towing capacity: 2,000 lbs
          <br />
          -Tire size: P235/60R18
          <br />
          -Dimensions: 173″ L x 71″ W x 62″ H <br />
          -Horsepower: 144 hp
          <br />
          -Curb weight: 4,178 to 4,343 lbs
          <br />
          Fuel tank capacity: 13.2 gal
          <br />
        </div>

        <div className="h4">
          {" "}
          <a href="http://localhost:3000/Contact.js">Click here!</a> for more
          pictures and pricing. <br />
          <br />
          Also dont like what you see? let <br />
          us find you a car.{" "}
          <a href="http://localhost:3000/Contact.js">Click here!</a>
          <br />
        </div>
      </div>
    </Container>
  );
}

export default Sales;
