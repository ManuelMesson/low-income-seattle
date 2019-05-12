import React, { Component } from "react";
import FoodBankCard from "../components/FoodBankCard";
import { FOOD_BANK } from "../constants/FoodBanks";
import { Grid, Typography } from "@material-ui/core";

const Title = () => {
  const divStyle = {
    marginTop: 5,
    marginBottom: 25 
  } 
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={24}
    >
      <Typography variant="h3" style={divStyle}>List of Seattle Food Banks</Typography>
    </Grid>
  );
};

class FoodBank extends Component {
  render = () => {
    const items = FOOD_BANK.map(item => (
      <Grid item xs={3} key={item.id}>
        <FoodBankCard
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
      </Grid>
    ));
    return (
      <div>
        <Title />
        <Grid container spacing={24}>
          {items}
        </Grid>
      </div>
    );
  };
}

export default FoodBank;
