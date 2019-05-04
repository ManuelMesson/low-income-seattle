import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './../components/About';
class Main extends Component {
  render = () => {
    return (
      <main role="main">
      <Router>
          <Route path="/about" component={About}></Route>
      </Router>
      </main>
    );
  };
}

export default Main;