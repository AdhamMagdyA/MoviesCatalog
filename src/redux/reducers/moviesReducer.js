import { ALL } from "../action_types/moviesTypes";

const initialState = { movies: [], page: 0 };

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL:
      return {
        movies: action.data,
        page: action.page,
      };

    default:
      return state;
  }
};
