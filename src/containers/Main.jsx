import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './../components/About';
class Main extends Component {
  render = () => {
    return (
      <main role="main">
     
          <Route path="/about" component={About}></Route>
   
      </main>
    );
  };
}

export default Main;