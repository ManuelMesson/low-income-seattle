import React, { Component } from "react";
import ShowerCard from "./../components/ShowerCard";
import { PUBLIC_SHOWERS } from "./../constants/PublicShowers";
import { Grid } from "@material-ui/core";

class PublicShowers extends Component {
  render = () => {
    const item = PUBLIC_SHOWERS.map(item => {
      return (
        <Grid item xs={3} key={item.id}>
        <ShowerCard
          key={item.id}
          name={item.name}
          phone={item.phone}
          address={item.address}
          open={item.open}
          info={item.info}
        />
        </Grid>
      );
    });
    return (
      <Grid container spacing={16}>
          {item}
      </Grid>
    );
  };
}

export default PublicShowers;
