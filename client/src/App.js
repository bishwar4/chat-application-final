import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/layout/Home/home";
import Chat from "./component/layout/chat/Chat";
import Search from "./component/layout/track/Search";
import Faq from "./component/layout/faq/Faq";
import Query from "./component/layout/Queries/Query";
import Admin from "./component/layout/Admin/Admin";
import Logo from "./component/layout/Logo/logo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            {/* Router path */}
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/" component={Logo} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/home/query" component={Query} />
            <Route exact path="/home/chat" component={Chat} />
            <Route exact path="/home/search" component={Search} />
            <Route exact path="/home/faq" component={Faq} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
