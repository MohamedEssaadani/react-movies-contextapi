/**
 * Actions Types
 */
export const ADD_MOVIE = "ADD_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";

/**
 * Initial State
 */
export const initialState = {
  movies: [],
};

/**
 * Actions
 */
// Add Movie Action
export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});

// Remove Movie Action
export const removeMovie = (movie) => ({
  type: REMOVE_MOVIE,
  payload: movie,
});

/**
 * Reducer
 */
export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: state.movies.concat(action.payload),
      };

    case REMOVE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload.id),
      };

    default:
      return state;
  }
};
