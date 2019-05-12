import React, { Component } from "react";

import MealCard from "../components/MealCard";
import { Grid, Typography, CircularProgress } from "@material-ui/core";

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
        List of Free Meals
      </Typography>
    </Grid>
  );
};
class FreeMeals extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: [],
      error: null
    };
  }

  componentDidMount = () => {
    this.fetchFreeMeals();
  };
  render = () => {
    const { isLoading, data } = this.state;

    return (
      <div>
        <Title />
        <Grid container spacing={24} direction="row">
          {!isLoading ? (
            data.map((item, index) => {
              const {
                day_time,
                location,
                meal_served,
                name_of_program,
                people_served
              } = item;
              const id = index;
              return (
                <Grid item xs={3}>
                  <MealCard
                    key={id}
                    day_time={day_time}
                    location={location}
                    meal_served={meal_served}
                    name_of_program={name_of_program}
                    people_served={people_served}
                  />
                </Grid>
              );
            })
          ) : (
            <Grid container justify="center" alignItems="center">
              <CircularProgress />
            </Grid>
          )}
        </Grid>
      </div>
    );
  };

  fetchFreeMeals() {
    fetch("https://data.seattle.gov/resource/hmzu-x5ed.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          isLoading: false,
          data: data,
          error: null
        });
      });
  }
}

export default FreeMeals;
