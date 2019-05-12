import React, { Component } from "react";
import { Typography, Link, Grid } from "@material-ui/core";

class Footer extends Component {
  render = () => {
    return (
      <footer role="contentinfo">
        <Grid container spacing={24} justify="center" alignItems="center">
            <Typography>
              Made with &hearts; by&nbsp;
              <Link href="https://github.com/mmesson">Manuel Messon-Roque</Link>
            </Typography>
        </Grid>
      </footer>
    );
  };
}

export default Footer;
