import React from "react";
import { IMAGE_BASE_URL, VIDEO_BASE_URL } from "../../../api";
import * as S from "./styles";
import useMovieDetail from "../../../hooks/useMovieDetail";

const MovieDetail = () => {
  const { movies, isLoaded, isLoading, error } = useMovieDetail();
  return (
    <S.MovieContainer>
      {isLoading && <div>영화 정보를 불러오고 있습니다.</div>}
      {error && <div>영화 정보를 불러오지 못했습니다.</div>}
      {movies && isLoaded && (
        <>
          <S.BackgroundImage path={movies.backdrop_path!} />
          <S.MovieDetailContainer>
            <S.DetailBackGroundImage
              src={`${IMAGE_BASE_URL}original${movies.poster_path}`}
            />
            <S.DetailInfoContainer>
              <S.DetailHeader>
                <S.MovieTitle>{movies.title}</S.MovieTitle>
                <S.MovieOriginalTitle>
                  {movies.original_title}
                </S.MovieOriginalTitle>
              </S.DetailHeader>
              <S.DetailContents>
                <S.DetailOverview>{movies.overview}</S.DetailOverview>
                <S.DetailInfo>
                  <S.DetailGenres>
                    장르:{" "}
                    {movies.genres!.map(({ id, name }, idx) => (
                      <S.Genre key={id}>
                        {movies.genres!.length - 1 === idx ? name : `${name}, `}
                      </S.Genre>
                    ))}
                  </S.DetailGenres>
                  <S.DetailVideos>
                    {movies.videos!.results.map((video, idx) => {
                      // 동영상 두 개만 표시
                      if (idx < 2) {
                        return (
                          <S.Video
                            key={video.id}
                            src={`${VIDEO_BASE_URL}${video.key}`}
                          />
                        );
                      } else {
                        return false;
                      }
                    })}
                  </S.DetailVideos>
                </S.DetailInfo>
              </S.DetailContents>
            </S.DetailInfoContainer>
          </S.MovieDetailContainer>
        </>
      )}
    </S.MovieContainer>
  );
};

export default MovieDetail;
