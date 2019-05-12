import React, { Component } from "react";
import ShowerCard from "./../components/ShowerCard";
import { PUBLIC_SHOWERS } from "./../constants/PublicShowers";
import { Grid, Typography, Tabs, Tab, AppBar } from "@material-ui/core";

const Title = () => {
  const divStyle = {
    marginTop: 5,
    marginBottom: 25
  };
  return (
    <Grid container justify="center" alignItems="center" spacing={24}>
      <Typography variant="h3" style={divStyle}>
        List of Public Showers
      </Typography>
    </Grid>
  );
};

class PublicShowers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "all",
      data: []
    };
  }

  componentDidMount = () => {
    this.setState({ data: PUBLIC_SHOWERS });
  };

  filterPeopleServed = input => {
    const result = PUBLIC_SHOWERS.filter(item => {
      return item.peopleServed === input;
    });
    this.setState({ data: result });
  };

  filterByMen = () => {
    const result = PUBLIC_SHOWERS.filter(item => {
      return item.peopleServed === "men";
    });
    this.setState({ data: result });
  };

  displayAll = () => {
    this.setState({ data: PUBLIC_SHOWERS });
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  
  render = () => {
    const item = this.state.data.map(item => {
      return (
        <Grid item xs={3} key={item.id}>
          <ShowerCard
            key={item.id}
            name={item.name}
            phone={item.phone}
            address={item.address}
            open={item.open}
            info={item.info}
          />
        </Grid>
      );
    });

    return (
      <div>
        <Title />
        <Grid container spacing={24} justify="center" alignContent="center">
      
            <AppBar
              position="static"
              style={{ marginBottom: 25 }}
              color="inherit"
              
            >
              <Tabs
                value={this.state.value}
                centered
                onChange={this.handleChange}
                
              >
                <Tab
                  value="all"
                  label="Display All"
                  onClick={this.displayAll}
                />
                <Tab
                  label="Woman Only"
                  onClick={() => {
                    this.filterPeopleServed("woman");
                  }}
                />
                <Tab
                  label="Youth Only"
                  onClick={() => {
                    this.filterPeopleServed("youth");
                  }}
                />
                <Tab label="Men Only" onClick={this.filterByMen} />
                <Tab
                  label="Seniors 55+"
                  onClick={() => {
                    this.filterPeopleServed("senior");
                  }}
                />
              </Tabs>
            </AppBar>
        </Grid>

        <Grid container spacing={24}>
          {item}
        </Grid>
      </div>
    );
  };
}

export default PublicShowers;
