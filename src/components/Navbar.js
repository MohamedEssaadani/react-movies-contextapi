import React, { Component, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// class Navbar extends Component {
//   // inject the shared state to this.context property
//   // static contextType = ThemeContext;

//   render() {
//     // destructuring context
//     const { isLightTheme, light, dark } = this.context;

//     // theme to use
//     const theme = isLightTheme ? light : dark;

//     return (
//       <nav style={{ backgroundColor: theme.bg, color: theme.syntax }}>
//         <h1>Movies App</h1>
//         <ul>
//           <li>Home</li>
//           <li>Contact</li>
//           <li>About</li>
//         </ul>
//       </nav>
//     );
//   }
// }

export const Navbar = () => {
  // get context
  const context = useContext(ThemeContext);

  // destructuring context
  const { isLightTheme, light, dark } = context;

  // theme to use
  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ backgroundColor: theme.bg, color: theme.syntax }}>
      <h1>Movies App</h1>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
