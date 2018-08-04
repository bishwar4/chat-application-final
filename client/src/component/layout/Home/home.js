import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "./chatbot2.png";
export default class home extends Component {
  render() {
    return (
      <div class="form-style-5">
        <form>
          <img src={logo} alt="My logo" />
          <br />
          <small>
            <p>
              hello,<br /> i am {"{"}BIZ{"}"} Bot, how i can<br /> help you
              today?
            </p>
          </small>
          <Link to="./home/chat">
            <h5>Talk To Our Expert</h5>
          </Link>
          <Link to="./home/query">
            <h5>Post Your Inquaries/Issue</h5>
          </Link>
          <Link to="./home/search">
            <h5>Track My Ticket</h5>
          </Link>
          <Link to="./home/faq">
            <h5>Frequently Asked Questions</h5>
          </Link>
          <h6 style={{ textAlign: "center" }}>Powered by Prackr</h6>
        </form>
      </div>
    );
  }
}
