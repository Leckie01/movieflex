import React from "react";
import { Container } from "./styles";
import MoviesSection from "../../components/MoviesSection";
import Poster from "../../components/Poster";
import useMovies from "../../hooks/useMovies";
import { LoaderDots } from "../Search/styles";

const MoviesContainer = () => {
  const { data, error, isLoading } = useMovies();
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
        <div>영화 목록을 불러오지 못했습니다.</div>
      ) : (
        <>
          <MoviesSection title="현재 상영작">
            {data &&
              data.nowPlaying.map(movie => (
                <Poster key={movie.id} movie={movie} isMovie={true} />
              ))}
          </MoviesSection>
          <MoviesSection title="평점순">
            {data &&
              data.topRated.map(movie => (
                <Poster key={movie.id} movie={movie} isMovie={true} />
              ))}
          </MoviesSection>
          <MoviesSection title="인기순">
            {data &&
              data.popular.map(movie => (
                <Poster key={movie.id} movie={movie} isMovie={true} />
              ))}
          </MoviesSection>
          <MoviesSection title="개봉예정작">
            {data &&
              data.upcoming.map(movie => (
                <Poster key={movie.id} movie={movie} isMovie={true} />
              ))}
          </MoviesSection>
        </>
      )}
    </Container>
  );
};

export default MoviesContainer;
