import React, { Component } from "react";
import "./App.css";


import Header from './components/Header';
import Main from './containers/Main';
import Aside from './containers/Aside';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
        <Aside />
        <Main />
        </div>

        <footer role="contentinfo" className="App-footer" />
      </div>
    );
  }
}

export default App;
