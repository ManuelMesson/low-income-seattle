import React, { Component } from "react";
import Card from "../components/Card";
import { FOOD_BANK } from "../constants/FoodBanks";
class FoodBank extends Component {
  render = () => {
    const items = FOOD_BANK.map(item => (
      <Card
        key={item.id}
        name={item.name}
        address={item.address}
        phone={item.phone}
        website={item.website}
        distributionHours={item.distributionHours}
        areaServed={item.areaServed}
        requirements={item.requirements}
        commodity={item.commodity}
        commodityDistribution={item.commodityDistribution}
        commodityDistributionDate={item.commodityDistributionDate}
        homeDelivery={item.homeDelivery}
        additionalInformation={item.additionalInformation}
        lastUpdate={item.lastUpdate}
      />
    ));
    return (
      <section>
        <h1>List of Seattle Food Banks</h1>
        {items}
      </section>
    );
  };
}

export default FoodBank;
