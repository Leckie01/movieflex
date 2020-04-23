import React from "react";
import { MovieContainer, MovieImg } from "./styles";
import { Link } from "react-router-dom";
import { ICommonMovie } from "../../types/types";
import { IMAGE_BASE_URL } from "../../api";

interface IProps {
  key: number;
  movie: ICommonMovie;
  isMovie: boolean;
}

const Poster: React.FC<IProps> = ({ movie, isMovie = false }) => {
  return (
    <MovieContainer>
      <Link to={isMovie ? `/movie/${movie.id}` : `/tv/${movie.id}`}>
        <MovieImg
          src={`${IMAGE_BASE_URL}w300${movie.poster_path}`}
          alt={isMovie ? `Image of ${movie.title}` : `Image of ${movie.name}`}
          title={isMovie ? movie.title : movie.name}
        />
      </Link>
    </MovieContainer>
  );
};

export default Poster;
