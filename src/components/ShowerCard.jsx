import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
    card: {
        minWidth: 300,
        maxWidth: 375,
        minHeight: 472,
        maxHeight: 472
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  };

const ShowerCard = props => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" color="primary">
          {props.name}
        </Typography>
        <address>
          <Typography variant="subtitle1">{props.address}</Typography>
          <Typography variant="subtitle1">Telephone: {props.phone}</Typography>
        </address>
        <br />
        <Typography>Open: {props.open}</Typography>
        <br />
        <b>Info: </b>
        {props.info}
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(ShowerCard);
