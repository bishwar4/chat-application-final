import React, { Component } from "react";
import axios from "axios";
class Admin extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    axios
      .get("/api/register/test")
      .then(res => {
        this.setState({ users: res.data.user });
        console.log(res);
      })
      .catch(err => console.log(err));
  }
  render() {
    return <div>{this.state.users.map(item => <h1>{item.name}</h1>)}</div>;
  }
}
export default Admin;
