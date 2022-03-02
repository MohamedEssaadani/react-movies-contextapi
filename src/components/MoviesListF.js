import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import { ThemeContext } from "../contexts/ThemeContext";

const MoviesListF = () => {
  // get values of theme context
  const { isLightTheme, light, dark } = useContext(ThemeContext);

  // get movies from context
  const { movies } = useContext(MoviesContext);

  // theme to use
  const theme = isLightTheme ? light : dark;

  return (
    <div className="movies-list" style={{ background: theme.bg }}>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} style={{ background: theme.ui }}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesListF;
