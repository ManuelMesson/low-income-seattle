import React, { Component } from "react";
import "./App.css";


import Header from './components/Header';
import Footer from './components/Footer';

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
        <Footer />
        
      </div>
    );
  }
}

export default App;
