import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Spinner,
  Badge,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import "./styles/movie-details.css";
import { Reveal } from "react-reveal";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [movieHomePage, setMovieHomePage] = useState(null);

  const getMovieDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?language=ar&api_key=11ae0c1833b4f80baa0c8f53a07781c8`
      );
      const response_en = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?language=en&api_key=11ae0c1833b4f80baa0c8f53a07781c8`
      );
      setMovie(response.data);
      setMovieHomePage(response_en.data.homepage);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // reset the search value
    document.getElementById("search-input").value = "";
    getMovieDetails();
  });

  return movie ? (
    <Container>
      <Reveal>
        <Card className="my-3">
          <Card.Header className="d-flex justify-content-between">
            <Card.Title className="text-right">
              {movie.title}

              <Badge bg="warning" className="py-1 my-1 mx-3">
                {movie.vote_average.toFixed(2)}
              </Badge>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={4}>
                <Card.Img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
              </Col>
              <Col md={8}>
                <Card.Text className="text-right">{movie.overview}</Card.Text>
                <Card.Text className="text-right">
                  <strong>التصنيف:</strong>{" "}
                  {movie.genres.map((genre) => genre.name).join(", ")}
                </Card.Text>
                <Card.Text className="text-right">
                  <strong>تاريخ الإصدار:</strong> {movie.release_date}
                </Card.Text>
                <Card.Text className="text-center my-5">
                  {movieHomePage ? (
                    <a href={movieHomePage} target="_blank" rel="noreferrer">
                      <Button variant="primary" className="text-right">
                        رابط الفيلم
                      </Button>
                    </a>
                  ) : (
                    <>لا يوجد رابط لمشاهدة الفيلم</>
                  )}

                  <Link to="/">
                    <Button variant="secondary" className="text-right mx-2">
                      العودة للقائمة
                    </Button>
                  </Link>
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Reveal>
    </Container>
  ) : (
    <div className="spinner-container">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">جارٍ التحميل...</span>
      </Spinner>
    </div>
  );
}

export default MovieDetails;
