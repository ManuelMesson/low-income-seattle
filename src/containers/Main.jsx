import React, { Component } from "react";
import { Route } from "react-router-dom";

import About from "./../components/About";
import FoodBank from "./FoodBank";
import FreeMeals from "./FreeMeals";
import PublicShowers from "./PublicShowers";
class Main extends Component {
  render = () => {
    return (
      <main role="main">
          <Route path="/about" component={About} />
          <Route path="/food-banks" component={FoodBank} />
          <Route path="/free-meals" component={FreeMeals} />
          <Route path="/public-showers" component={PublicShowers} />
      </main>
    );
  };
}

export default Main;
