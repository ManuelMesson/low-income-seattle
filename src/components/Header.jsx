import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function Header(props) {
  const { classes } = props;
  return (
    <header role="banner">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Low Income Seattle
            </Typography>
            
            <Button color="inherit" component={Link} to="/food-banks">Food Banks</Button>
            <Button color="inherit" component={Link} to="/free-meals">Free Meals</Button>
            <Button color="inherit" component={Link} to="/public-showers">Public Showers</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
          </Toolbar>
        </AppBar>
      </div>
    </header>
  );
}

export default withStyles(styles)(Header);
