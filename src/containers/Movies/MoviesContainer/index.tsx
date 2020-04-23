import React from "react";
import { moviesApi } from "../../../api";
import { Container } from "./styles";
import MoviesSection from "../../../components/MoviesSection";
import Poster from "../../../components/Poster";
import usePromise from "../../../hooks";
import { ICommonMovie } from "../../../types/types";

interface IResults {
  results: ICommonMovie[];
}

const MoviesContainer = () => {
  const [, nowPlayingResponse] = usePromise<IResults>(
    () => moviesApi.nowPlaying(),
    []
  );
  const [, topRatedResponse] = usePromise<IResults>(
    () => moviesApi.topRated(),
    []
  );
  const [, popularResponse] = usePromise<IResults>(
    () => moviesApi.popular(),
    []
  );
  const [, upcomingResponse] = usePromise<IResults>(
    () => moviesApi.upcoming(),
    []
  );

  return (
    <Container>
      <MoviesSection title="현재 상영작">
        {nowPlayingResponse
          ? nowPlayingResponse.data.results.map(movie => (
              <Poster key={movie.id} movie={movie} isMovie={true} />
            ))
          : "현재 상영 중인 영화 목록을 불러오지 못했습니다."}
      </MoviesSection>
      <MoviesSection title="평점순">
        {topRatedResponse
          ? topRatedResponse.data.results.map(movie => (
              <Poster key={movie.id} movie={movie} isMovie={true} />
            ))
          : "최고 평점 순서 영화 목록을 불러오지 못했습니다."}
      </MoviesSection>
      <MoviesSection title="인기순">
        {popularResponse
          ? popularResponse.data.results.map(movie => (
              <Poster key={movie.id} movie={movie} isMovie={true} />
            ))
          : "인기있는 순서 영화 목록을 불러오지 못했습니다."}
      </MoviesSection>
      <MoviesSection title="개봉예정작">
        {upcomingResponse
          ? upcomingResponse.data.results.map(movie => (
              <Poster key={movie.id} movie={movie} isMovie={true} />
            ))
          : "개봉 예정 영화 목록을 불러오지 못했습니다."}
      </MoviesSection>
    </Container>
  );
};

export default MoviesContainer;
