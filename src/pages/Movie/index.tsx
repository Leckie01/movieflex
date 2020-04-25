import React from "react";
import { Container } from "./styles";
import MoviesSection from "../../components/MoviesSection";
import Poster from "../../components/Poster";
import { IMovies } from "../../modules/movie";
import useMovies from "../../hooks/useMovies";

const MoviesContainer = () => {
  const { nowPlaying, popular, topRated, upcoming } = useMovies() as IMovies;
  return (
    <Container>
      <MoviesSection title="현재 상영작">
        {nowPlaying
          ? nowPlaying.map(movie => (
              <Poster key={movie.id} movie={movie} isMovie={true} />
            ))
          : "현재 상영 중인 영화 목록을 불러오지 못했습니다."}
      </MoviesSection>
      <MoviesSection title="평점순">
        {topRated
          ? topRated.map(movie => (
              <Poster key={movie.id} movie={movie} isMovie={true} />
            ))
          : "최고 평점 순서 영화 목록을 불러오지 못했습니다."}
      </MoviesSection>
      <MoviesSection title="인기순">
        {popular
          ? popular.map(movie => (
              <Poster key={movie.id} movie={movie} isMovie={true} />
            ))
          : "인기있는 순서 영화 목록을 불러오지 못했습니다."}
      </MoviesSection>
      <MoviesSection title="개봉예정작">
        {upcoming
          ? upcoming.map(movie => (
              <Poster key={movie.id} movie={movie} isMovie={true} />
            ))
          : "개봉 예정 영화 목록을 불러오지 못했습니다."}
      </MoviesSection>
    </Container>
  );
};

export default MoviesContainer;
