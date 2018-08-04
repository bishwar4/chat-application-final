import React, { Component } from "react";
import axios from "axios";
import "./Query.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Query extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      query: "",
      error: {},
      user: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      query: this.state.query
    };
    //to submit queries to database
    axios
      .post("/api/register/track", newUser)
      .then(res => {
        this.setState({ user: res.data.user });
      })
      .catch(err => console.log(err));
    this.setState({
      name: "",
      email: "",
      query: ""
    });
  }
  render() {
    return (
      <div className="Query">
        <h3>{this.state.user.token}</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              required
            />
            <br />

            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Email Address"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              required
            />
            <br />

            <textarea
              name="query"
              value={this.state.query}
              onChange={this.onChange}
              className="form-control"
              placeholder="Enter Your Query"
              required
            />
            <br />
          </div>
          <input type="submit" className="btn btn-info btn-block mt-1" />
        </form>
      </div>
    );
  }
}
export default Query;
