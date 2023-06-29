import React from "react";
import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import MoviesPagination from "./MoviesPagination.js";

function MovieList({ movies, getMoviesByPage, totalPages }) {
  return (
    <Row className="mt-3">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
      ) : (
        <h1>لا يوجد أفلام</h1>
      )}

      <MoviesPagination
        getMoviesByPage={getMoviesByPage}
        pageCount={totalPages}
      />
    </Row>
  );
}

export default MovieList;
