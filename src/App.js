import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Main from "./containers/Main";
import Aside from "./containers/Aside";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <div className="container">
            <Aside />
            <Main />
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
