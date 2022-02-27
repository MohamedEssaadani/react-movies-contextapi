import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1>Movies App</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
