import React, { Component } from "react";

class Card extends Component {

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
    return (
      <div className="card">
        <h1>{this.props.name}</h1>
        <address>
          <a
            href={this.computeAddressMapsUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.address}
          </a>
        </address>
        <a href={this.props.website} target="_blank" rel="noopener noreferrer">
          {this.props.website}
        </a>
        <br />
        <a href={this.getPhoneNumberLink()}>{this.props.phone}</a>
        <br />
        <br />
        <b>Requirements: {this.props.requirements}</b>
        <p>Zip Codes Area Served: {this.props.areaServed}</p>
        <ul>{distributionHours}</ul>
        <p>{this.computeHomeDelivery()}</p>
        <i>Last Update: {this.props.lastUpdate}</i>
      </div>
    );
  };
}

export default Card;
