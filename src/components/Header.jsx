import React, { Component } from "react";

class Header extends Component {
  render = () => {
    return (
      <header role="banner" className="App-header">
        <span>Low Income Seattle</span>
        <nav role="navigation" className="header-menu">
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a>
        </nav>
      </header>
    );
  };
}

export default Header;