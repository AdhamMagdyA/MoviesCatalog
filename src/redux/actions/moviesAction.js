import { ALL } from "../action_types/moviesTypes";
import axios from "axios";

export const getAllMovies = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=ar&api_key=11ae0c1833b4f80baa0c8f53a07781c8"
    );
    const movies = response.data.results;
    const page = response.data.total_pages;
    dispatch({
      type: ALL,
      data: movies,
      page: page,
    });
  };
};

export const searchMovies = (query, page = 1) => {
  return async (dispatch) => {
    // if (query === "") return getMovies();
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&page=1&language=ar&page=${page}&api_key=11ae0c1833b4f80baa0c8f53a07781c8`
    );
    const movies = response.data.results;
    const pageCount = response.data.total_pages;

    dispatch({
      type: ALL,
      data: movies,
      page: pageCount,
    });
  };
};

export const getPageMovies = (page) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?language=ar&page=${page}&api_key=11ae0c1833b4f80baa0c8f53a07781c8`
    );
    const movies = response.data.results;
    const pageCount = response.data.total_pages;

    dispatch({
      type: ALL,
      data: movies,
      page: pageCount,
    });
  };
};
