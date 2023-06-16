import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import "./styles/movie-card.css";

function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Col sm="3">
      <Card
        className="bg-dark text-white my-2 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Card.Img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="Card image"
          className={"min_hight"}
        />
        {isHovered && (
          <Card.ImgOverlay
            className={
              isHovered ? "overlay overlay-visible text-center" : "overlay"
            }
          >
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.original_title}</Card.Text>
            <Card.Text>{movie.release_date}</Card.Text>
            <Card.Text>التقييم: {movie.vote_average}</Card.Text>
          </Card.ImgOverlay>
        )}
      </Card>
    </Col>
  );
}

export default MovieCard;
