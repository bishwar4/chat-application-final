import React, { Component } from "react";
import "./Search.css";
import axios from "axios";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Search extends Component {
  state = {
    token: "",
    data: []
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newData = {
      token: this.state.token
    };
    //to search lodge token
    axios
      .post("/api/searchtoken/token", newData)
      .then(res => {
        this.setState({ data: res.data });
        console.log(this.state.data);
      })
      .catch(err => console.log(err));
    this.setState({
      token: ""
    });
  }

  render() {
    return (
      <div className="Search" style={{ "text-align": "center" }}>
        <div
          style={{ "font-family": "cursive", "text-transform": "capitalize" }}
        >
          <h3>
            {this.state.data.name}
            <br />
            {this.state.data.resolution}
          </h3>
          <br />
        </div>

        <form onSubmit={this.onSubmit.bind(this)}>
          <div>
            <h3>Enter Your Token No.</h3>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Tokent no"
              name="token"
              value={this.state.token}
              onChange={this.onChange.bind(this)}
              required
            />
          </div>
          <div>
            <input type="submit" className="btn btn-info btn-block mt-4" />
          </div>
        </form>
      </div>
    );
  }
}
export default Search;
