import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super();
  }

  getPhoneNumberLink = () => {
      return ("tel+" + this.props.phone);
  }

  render = () => {
    const distributionHours = this.props.distributionHours.map(item => (
        <li>{item}</li>
    ));
    return (
      <div className="card">
        <h1>{this.props.name}</h1>
        <address>{this.props.address}</address>
        <a href={this.props.website} target="_blank" rel="noopener noreferrer">{this.props.website}</a><br />
        <a href={this.getPhoneNumberLink()}>{this.props.phone}</a>
        <ul>{distributionHours}</ul>
      </div>
    );
  };
}

export default Card;
