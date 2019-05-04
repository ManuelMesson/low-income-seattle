import React, { Component } from "react";
import {Link} from 'react-router-dom';
class Header extends Component {
  render = () => {
    return (
      <header role="banner" className="App-header">
        <a href="/">Low Income Seattle</a>
        <nav role="navigation" className="header-menu">
        <Link to="/">Home</Link>
          <a href="/contact">Contact</a>
          <Link to='/about'>About</Link>
        </nav>
      </header>
    );
  };
}

export default Header;