import React from "react";
import { useRouteMatch } from "react-router";
import { ICommonMovie } from "../../../types/types";
import { moviesApi, IMAGE_BASE_URL, VIDEO_BASE_URL } from "../../../api";
import * as S from "./styles";
import usePromise from "../../../hooks";

const DetailContainer = () => {
  const {
    params: { id }
  } = useRouteMatch();
  const [loading, movieDetail] = usePromise<ICommonMovie>(
    () => moviesApi.detail(id),
    []
  );

  if (loading) {
    return <div>영화 정보를 불러오는 중입니다.</div>;
  }

  if (movieDetail) {
    const { data } = movieDetail;
    return (
      <S.MovieContainer>
        <S.BackgroundImage path={data.backdrop_path!} />
        <S.MovieDetailContainer>
          <S.DetailBackGroundImage
            src={`${IMAGE_BASE_URL}original${data.poster_path}`}
          />
          <S.DetailInfoContainer>
            <S.DetailHeader>
              <S.MovieTitle>{data.title}</S.MovieTitle>
              <S.MovieOriginalTitle>{data.original_title}</S.MovieOriginalTitle>
            </S.DetailHeader>
            <S.DetailContents>
              <S.DetailOverview>{data.overview}</S.DetailOverview>
              <S.DetailInfo>
                <S.DetailGenres>
                  장르:{" "}
                  {data.genres!.map(({ id, name }) => (
                    <S.Genre key={id}>{`${name}, `}</S.Genre>
                  ))}
                </S.DetailGenres>
                <S.DetailVideos>
                  {data.videos!.results.map((video, idx) => {
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
      </S.MovieContainer>
    );
  }
  return <div>영화 정보를 불러오지 못했습니다.</div>;
};

export default DetailContainer;
