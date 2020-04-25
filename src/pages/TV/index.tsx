import React, { useEffect, useState } from "react";
import { tvApi } from "../../api";
import { ICommonMovie } from "../../types/types";
import MoviesSection from "../../components/MoviesSection";
import Poster from "../../components/Poster";
import { Container } from "./styles";
import { ITV } from "../../modules/tv";
import useTV from "../../hooks/useTV";

const TVContainer = () => {
  const { nowPlaying, onTheAir, popular, topRated } = useTV() as ITV;

  return (
    <Container>
      <MoviesSection title="현재 방영작 ">
        {onTheAir
          ? onTheAir.map(movie => (
              <Poster key={movie.id} movie={movie} isMovie={false} />
            ))
          : "현재 방영 중인 TV프로그램 목록을 불러오지 못했습니다."}
      </MoviesSection>
      <MoviesSection title="평점순">
        {topRated
          ? topRated.map(movie => (
              <Poster key={movie.id} movie={movie} isMovie={false} />
            ))
          : "최고 평점 순서 TV프로그램 목록을 불러오지 못했습니다."}
      </MoviesSection>
      <MoviesSection title="인기순">
        {popular
          ? popular.map(movie => (
              <Poster key={movie.id} movie={movie} isMovie={false} />
            ))
          : "인기있는 순서 TV프로그램 목록을 불러오지 못했습니다."}
      </MoviesSection>
      <MoviesSection title="오늘 방송 예정작">
        {nowPlaying
          ? nowPlaying.map(movie => (
              <Poster key={movie.id} movie={movie} isMovie={false} />
            ))
          : "오늘 방송 예정 TV프로그램 목록을 불러오지 못했습니다."}
      </MoviesSection>
    </Container>
  );
};

export default TVContainer;
