import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import MoviesPagination from "./MoviesPagination.js";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../redux/actions/moviesAction";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);
  const moviesData = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(moviesData);
  }, [moviesData]);

  return (
    <Row className="mt-3">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
      ) : (
        <h1>لا يوجد أفلام</h1>
      )}

      <MoviesPagination />
    </Row>
  );
}

export default MovieList;
