import React, { Component } from "react";
import { Link } from "react-router-dom";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
class Aside extends Component {
  render = () => {
    return (
      <aside>
        <Paper square elevation="1" className="menu">
          <ClickAwayListener>
            <MenuList className="test">
              <Link to="/food-banks">
                <MenuItem>Food Banks</MenuItem>
              </Link>
              <Link to="/free-meals">
                <MenuItem>Free Meals</MenuItem>
              </Link>
              <Link to="/public-showers">
                <MenuItem>Public Showers</MenuItem>
              </Link>
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </aside>
    );
  };
}

export default Aside;
