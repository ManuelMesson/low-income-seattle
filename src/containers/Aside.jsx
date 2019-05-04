import React, { Component } from "react";
import {Link} from 'react-router-dom';
class Aside extends Component {
  render = () => {
    return (
        <aside>
          <div className="menu">
            <ul>
              <li>link1</li>
              <li>link1</li>
            </ul>
          </div>
        </aside>
    );
  };
}

export default Aside;