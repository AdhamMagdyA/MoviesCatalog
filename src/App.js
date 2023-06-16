import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=ar&api_key=11ae0c1833b4f80baa0c8f53a07781c8"
    );
    setMovies(response.data.results);
  };

  const searchMovies = async (query) => {
    if (query === "") return getMovies();
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&page=1&language=ar&api_key=11ae0c1833b4f80baa0c8f53a07781c8`
    );
    setMovies(response.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <NavBar searchMovies={searchMovies} />
      <Container>
        <MovieList movies={movies} />
      </Container>
    </div>
  );
}

export default App;
