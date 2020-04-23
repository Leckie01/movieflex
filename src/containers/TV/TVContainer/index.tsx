import React, { useEffect, useState } from "react";
import { tvApi } from "../../../api";
import { ICommonMovie } from "../../../types/types";
import MoviesSection from "../../../components/MoviesSection";
import Poster from "../../../components/Poster";
import { Container } from "./styles";

const TVContainer = () => {
  const [onTheAir, setOnTheAir] = useState<ICommonMovie[]>([]);
  const [topRated, setTopRated] = useState<ICommonMovie[]>([]);
  const [popular, setPopular] = useState<ICommonMovie[]>([]);
  const [airingToday, setAiringToday] = useState<ICommonMovie[]>([]);

  useEffect(() => {
    const getTVs = async () => {
      const {
        data: { results: onTheAirResults }
      } = await tvApi.onTheAir();
      setOnTheAir(onTheAirResults);

      const {
        data: { results: topRatedResults }
      } = await tvApi.topRated();
      setTopRated(topRatedResults);

      const {
        data: { results: popularResults }
      } = await tvApi.popular();
      setPopular(popularResults);

      const {
        data: { results: airingTodayResults }
      } = await tvApi.airingToday();
      setAiringToday(airingTodayResults);
    };

    getTVs();
  }, []);

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
        {airingToday
          ? airingToday.map(movie => (
              <Poster key={movie.id} movie={movie} isMovie={false} />
            ))
          : "오늘 방송 예정 TV프로그램 목록을 불러오지 못했습니다."}
      </MoviesSection>
    </Container>
  );
};

export default TVContainer;
