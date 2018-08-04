import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import "./logo.css";

class logo extends Component {
  render() {
    return (
      <div className="size">
        <Link to="/home">
          <img src={Logo} style={{ width: 100, height: 100 }} alt="My logo" />
        </Link>
      </div>
    );
  }
}
export default logo;
