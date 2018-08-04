import React, { Component } from "react";
import axios from "axios";
import { Scrollbars } from "react-custom-scrollbars";

import "./faq.css";
class Admin extends Component {
  state = {
    faqs: []
  };
  componentDidMount() {
    // to get faq from the server
    axios
      .get("/api/faq/find")
      .then(res => {
        this.setState({ faqs: res.data.faq });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="Faq">
        <Scrollbars style={{ width: 350, height: 600 }}>
          <h5 style={{ textAlign: "center" }}>FAQ</h5>

          {this.state.faqs.map(item => (
            <div>
              <h6>
                <strong>{item.question}</strong>
              </h6>
              <h6>{item.answer}</h6>
            </div>
          ))}
        </Scrollbars>
      </div>
    );
  }
}
export default Admin;
