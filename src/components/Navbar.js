import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
        <Link className="link" to={"/movies"}>
          Home
        </Link>
        <Link className="link" to={"/new-movie"}>
          Add Movie
        </Link>
        <Link className="link" to={"/movies"}>
          All Movies
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
