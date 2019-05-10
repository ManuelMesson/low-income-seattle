import React, { Component } from "react";

import { MealCard } from "../components/MealCard";
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
    const { isLoading, data, error } = this.state;

    return (
      <div>
        {!isLoading ? (
          data.map(item => {
            const {
              day_time,
              location,
              meal_served,
              name_of_program,
              people_served
            } = item;
            return (
              <MealCard
                day_time={day_time}
                location={location}
                meal_served={meal_served}
                name_of_program={name_of_program}
                people_served={people_served}
              />
            );
          })
        ) : (
          <p>loading</p>
        )}
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
