import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core/styles";
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
              <MenuItem>Public Showers</MenuItem>
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </aside>
    );
  };
}

export default Aside;
