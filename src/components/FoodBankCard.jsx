import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography, Link } from "@material-ui/core";

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

class FoodBankCard extends Component {
  computeAddressMapsUrl = () => {
    return (
      "https://www.google.com/maps/search/?api=1&origin=Seattle,Washington&query=" +
      this.props.address
    );
  };

  getPhoneNumberLink = () => {
    return "tel:" + this.props.phone;
  };

  computeHomeDelivery = () => {
    if (this.props.homeDelivery === undefined) {
      return null;
    }
    return "Home Delivery: " + this.props.homeDelivery;
  };

  render = () => {
    const distributionHours = this.props.distributionHours.map(item => (
      <li key={Math.random()}>{item}</li>
    ));
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" color="primary">
            {this.props.name}
          </Typography>
          <address>
            <a
              href={this.computeAddressMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.address}
            </a>
          </address>
          <Link
            href={this.props.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.website}
          </Link>
          <br />
          <a href={this.getPhoneNumberLink()}>{this.props.phone}</a>
          <br />
          <br />
          <Typography>Requirements: {this.props.requirements}</Typography>
          <Typography>Zip Codes Served: {this.props.areaServed}</Typography>
          <ul>{distributionHours}</ul>
          <p>{this.computeHomeDelivery()}</p>
          <i>Last Update: {this.props.lastUpdate}</i>
        </CardContent>
      </Card>
    );
  };
}

export default withStyles(styles)(FoodBankCard);
