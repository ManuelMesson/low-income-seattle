import React, { Component } from "react";
import { Button } from "@material-ui/core";

class navShowerMenu extends Component {
  render = () => {
    return (
      <div>
        <Button onClick={this.displayAll} variant="contained" color="secondary">
          Display All
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            this.filterPeopleServed("woman");
          }}
        >
          Woman Only
        </Button>
        <Button variant="contained" color="primary" onClick={this.filterByMen}>
          Men Only
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            this.filterPeopleServed("youth");
          }}
        >
          Youth Only
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            this.filterPeopleServed("senior");
          }}
        >
          Senior Only
        </Button>
      </div>
    );
  };
}

export default navShowerMenu;
