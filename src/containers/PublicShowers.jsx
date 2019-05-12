import React, { Component } from "react";
import ShowerCard from "./../components/ShowerCard";
import { PUBLIC_SHOWERS } from "./../constants/PublicShowers";
import { Grid, Typography } from "@material-ui/core";

const Title = () => {
  const divStyle = {
    marginTop: 25,
    marginBottom: 25
  };
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={16}
    >
      <Typography variant="h3" style={divStyle}>
        List of Public Showers
      </Typography>
    </Grid>
  );
};

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
      <div>
        <Title />
        <Grid container spacing={16}>
          {item}
        </Grid>
      </div>
    );
  };
}

export default PublicShowers;
