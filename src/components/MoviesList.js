import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class MoviesList extends Component {
  // inject the shared state to this.context property
  // static contextType = ThemeContext;
  render() {
    // destructuring context
    // const { isLightTheme, light, dark } = this.context;

    // theme to use
    // const theme = isLightTheme ? light : dark;
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;

          // theme to use
          const theme = isLightTheme ? light : dark;
          return (
            <div className="movies-list" style={{ background: theme.bg }}>
              <ul>
                <li style={{ background: theme.ui }}>
                  <h3>Interstellar</h3>
                  <p>
                    Interstellar is a 2014 epic science fiction film co-written,
                    directed and produced by Christopher Nolan. ... Set in a
                    dystopian future where humanity is struggling to survive,
                    the film follows a group of astronauts who travel through a
                    wormhole near Saturn in search of a new home for mankind.
                  </p>
                </li>
                <li style={{ background: theme.ui }}>
                  <h3>Taken</h3>
                  <p>
                    A retired CIA agent travels across Europe and relies on his
                    old skills to save his estranged daughter, who has been
                    kidnapped while on a trip to Paris. Edit Report This.
                    Seventeen year-old Kim is the pride and joy of her father
                    Bryan Mills.
                  </p>
                </li>
                <li style={{ background: theme.ui }}>
                  <h3>The Matrix</h3>
                  <p>
                    The film describes a future in which reality perceived by
                    humans is actually the Matrix, a simulated reality created
                    by sentient Machines in order to pacify and subdue the human
                    population while their bodies' heat and electrical activity
                    are used as an energy source.
                  </p>
                </li>
                <li style={{ background: theme.ui }}>
                  <h3>Jhon Wick</h3>
                  <p>
                    John Wick is a fictional character and the titular
                    protagonist of the neo-noir action thriller film series John
                    Wick, portrayed by Keanu Reeves. John is a legendary hitman
                    who had retired until a gang invades his house, steals his
                    car, and kills the puppy that his late wife Helen had given
                    him.
                  </p>
                </li>
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default MoviesList;
