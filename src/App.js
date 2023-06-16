import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const getMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=ar&api_key=11ae0c1833b4f80baa0c8f53a07781c8"
    );
    setMovies(response.data.results);
    response.data.total_pages <= 500
      ? setTotalPages(response.data.total_pages)
      : setTotalPages(500);
  };

  const getMoviesByPage = async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?language=ar&page=${page}&api_key=11ae0c1833b4f80baa0c8f53a07781c8`
    );
    setMovies(response.data.results);
  };

  const searchMovies = async (query) => {
    if (query === "") return getMovies();
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&page=1&language=ar&api_key=11ae0c1833b4f80baa0c8f53a07781c8`
    );
    setMovies(response.data.results);
    response.data.total_pages <= 500
      ? setTotalPages(response.data.total_pages)
      : setTotalPages(500);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <NavBar searchMovies={searchMovies} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MovieList
                  movies={movies}
                  getMoviesByPage={getMoviesByPage}
                  totalPages={totalPages}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
