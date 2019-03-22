import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header role="banner" className="App-header">
          <span>Low Income Seattle</span>
          <nav role="navigation" className="header-menu">
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
            <a href="/about">About</a>
          </nav>
        </header>

        <div className="container">
          <main role="main">
            <section>
              <header>
                <h1>titulo</h1>
                <b>peow</b>
              </header>
            </section>
          </main>
          <aside>
            <div className="menu">
            <ul>
              <li>link1</li>
              <li>link1</li>
              <li>link1</li>
            </ul>
            </div>
          </aside>
        </div>

        <footer role="contentinfo" className="App-footer" />
      </div>
    );
  }
}

export default App;
