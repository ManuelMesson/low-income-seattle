import React from "react";

export const MealCard = props => (
  <div>
    <section>
      <h1>{props.name_of_program}</h1>
      <p>
        <i>
          {props.meal_served} served to: {props.people_served} every <date>{props.day_time}</date>
        </i>
        <br />
        <address>{props.location}</address>
      </p>
    </section>
  </div>
);
