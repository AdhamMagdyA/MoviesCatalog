import { ALL } from "../action_types/moviesTypes";
import axios from "axios";

export const getAllMovies = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=ar&api_key=11ae0c1833b4f80baa0c8f53a07781c8"
    );
    const movies = response.data.results;
    console.log(movies);
    dispatch({
      type: ALL,
      data: movies,
      page: 1,
    });
  };
};
