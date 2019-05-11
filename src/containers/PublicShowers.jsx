import React, { Component } from "react";
import ShowerCard from "./../components/ShowerCard";
import { PUBLIC_SHOWERS } from "./../constants/PublicShowers";

class PublicShowers extends Component {
  render = () => {
    const item = PUBLIC_SHOWERS.map(item => {
      return (
          <ShowerCard
            key={item.id}
            name={item.name}
            phone={item.phone}
            address={item.address}
            open={item.open}
            info={item.info}
          />
      );
    });
    return <div>{item}</div>;
  };
}

export default PublicShowers;
