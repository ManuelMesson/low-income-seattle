import React, { Component } from "react";
import {Link} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class Header extends Component {
  render = () => {
    return (
      <header role="banner">
        {/* <a href="/">Low Income Seattle</a>
        <nav role="navigation" className="header-menu">
        <Link to="/">Home</Link>
          <a href="/contact">Contact</a>
          <Link to='/about'>About</Link>
        </nav> */}

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