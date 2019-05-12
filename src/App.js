import React, { Component } from "react";

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Main from "./containers/Main";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#026ca0" }, 
    secondary: { main: "#ffc400" },
  },
  // background: {
  //   paper: '#222',
  //   default: "#222"
  // },
  typography: { useNextVariants: true }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Header />
            <Main />
          <Footer />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
