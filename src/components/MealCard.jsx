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

const MealCard = props => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6">{props.name_of_program}</Typography>
        <Typography variant="subtitle1">
          <address>{props.location}</address>
        </Typography>
        <Typography>
          {props.meal_served} served to: {props.people_served} every{" "}
          {props.day_time}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(MealCard);
