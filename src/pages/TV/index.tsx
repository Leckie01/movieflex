import React from "react";
import MoviesSection from "../../components/MoviesSection";
import Poster from "../../components/Poster";
import { Container } from "./styles";
import useTV from "../../hooks/useTV";
import { LoaderDots } from "../Search/styles";

const TVContainer = () => {
  const { data, error, isLoading } = useTV();
  return (
    <Container>
      {isLoading && (
        <LoaderDots
          type="ThreeDots"
          color="#2dbaba"
          height={70}
          width={80}
          timeout={2000}
        />
      )}
      {error ? (
        <div>TV프로그램 목록을 불러오지 못했습니다.</div>
      ) : (
        <>
          <MoviesSection title="현재 방영작 ">
            {data &&
              data.onTheAir.map(movie => (
                <Poster key={movie.id} movie={movie} isMovie={false} />
              ))}
          </MoviesSection>
          <MoviesSection title="평점순">
            {data &&
              data.topRated.map(movie => (
                <Poster key={movie.id} movie={movie} isMovie={false} />
              ))}
          </MoviesSection>
          <MoviesSection title="인기순">
            {data &&
              data.popular.map(movie => (
                <Poster key={movie.id} movie={movie} isMovie={false} />
              ))}
          </MoviesSection>
          <MoviesSection title="오늘 방송 예정작">
            {data &&
              data.nowPlaying.map(movie => (
                <Poster key={movie.id} movie={movie} isMovie={false} />
              ))}
          </MoviesSection>
        </>
      )}
    </Container>
  );
};

export default TVContainer;
