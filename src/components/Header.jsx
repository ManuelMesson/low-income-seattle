import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class Header extends Component {
  render = () => {
    return (
      <header role="banner">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Low Income Seattle
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
    );
  };
}

export default Header;
