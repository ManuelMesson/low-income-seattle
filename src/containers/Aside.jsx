import React, { Component } from "react";
import { Link } from "react-router-dom";
class Aside extends Component {
  render = () => {
    return (
      <aside>
        <div className="menu">
          <ul>
            <li>
              <Link to="/food-banks">Food Banks</Link>
            </li>
            <li>
              <Link to="/free-meals">Free Meals</Link>
            </li>
            <li>
              <Link to="/public-shower">Public Showers</Link>
            </li>
          </ul>
        </div>
      </aside>
    );
  };
}

export default Aside;
