import React, { Component, createContext } from "react";

const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  // shared data
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };
  render() {
    return (
      // Provide shared data
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
