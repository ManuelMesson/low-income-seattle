import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import About from "./../components/About";
import FoodBank from "./FoodBank";
class Main extends Component {
  render = () => {
    return (
      <main role="main">
        <Route path="/about" component={About} />
        <Route path="/food-banks" component={FoodBank} />
      </main>
    );
  };
}

export default Main;
