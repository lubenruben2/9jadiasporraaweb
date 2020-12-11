import React, { Component } from "react";
import "./form.css";
import axios from "axios";
import Swal from "sweetalert2";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      gender: "",
      howDidHearAboutUs: "",
      textarea: "",
    };
  }

  resetInput = () => {
    this.setState({
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      gender: "",
      howDidHearAboutUs: "",
      textarea: "",
    });
  };

  submitted = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/messages`, this.state).then((res) => {});

    Swal.fire("Thank you!", "Your form has been submitted!", "success");

    this.resetInput();
  };

  handleChange = (event) => {
    const { name, checked, value, type } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <div className="talk">
          {" "}
          <br />
          <h2>Talk to Us~~ </h2>
        </div>
        <br />
        <form onSubmit={this.submitted}>
          <label>First Name: </label>
          <div>
            <input
              required
              className="inp"
              value={this.state.firstName}
              name="firstName"
              type="text"
              onChange={this.handleChange}
            />
          </div>
          <br />

          <label>Last Name: </label>
          <div>
            <input
              required
              className="inp"
              value={this.state.lastName}
              name="lastName"
              type="text"
              onChange={this.handleChange}
            />
          </div>
          <br />

          <label>Email: </label>
          <div>
            <input
              required
              className="inp"
              value={this.state.email}
              name="email"
              type="text"
              onChange={this.handleChange}
            />
          </div>
          <br />

          <label>Phone number: </label>
          <div>
            <input
              required
              className="inp"
              value={this.state.number}
              name="number"
              type="number"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <input
              required
              value="female"
              type="radio"
              name="gender"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />{" "}
            <label>Female</label>
          </div>

          <div>
            <input
              required
              value="male"
              type="radio"
              name="gender"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />{" "}
            <label>Male</label>
          </div>
          <br />

          <label>How did you hear about us</label>
          <div>
            <select
              required
              className="texx"
              value={this.state.howDidHearAboutUs}
              onChange={this.handleChange}
              name="howDidHearAboutUs"
            >
              <option value="">-----------Please select-------------</option>
              <option value="google">google</option>
              <option value="facebook">facebook</option>
              <option value="twitter">twitter</option>
              <option value="instagram">instagram</option>
              <option value="search engine">search engine</option>
              <option value="recommended">recommended</option>
            </select>
          </div>
          <br />

          <label>Comment: </label>
          <div>
            <textarea
              required
              className="tex"
              value={this.state.textarea}
              name="textarea"
              type="textarea"
              placeholder="How can we help you today!"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <button type="submit" className="push">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Message;
