import React from "react";
import { IMAGE_BASE_URL, tvApi } from "../../../api";
import Poster from "../../../components/Poster";
import * as S from "./styles";
import useTVDetail from "../../../hooks/useTVDetail";

const TVDetail = () => {
  const { data, isLoaded, isLoading, error } = useTVDetail();
  return (
    <S.MovieContainer>
      {isLoading && <div>TV프로그램 정보를 불러오고 있습니다.</div>}
      {error && <div>TV프로그램 정보를 불러오지 못했습니다.</div>}
      {data && isLoaded && (
        <>
          <S.BackgroundImage path={data.backdrop_path!} />
          <S.MovieDetailContainer>
            <S.DetailBackGroundImage
              src={`${IMAGE_BASE_URL}original${data.poster_path}`}
            />
            <S.DetailInfoContainer>
              <S.DetailHeader>
                <S.MovieTitle>{data.name}</S.MovieTitle>
                <S.MovieOriginalTitle>{data.name}</S.MovieOriginalTitle>
              </S.DetailHeader>
              <S.DetailContents>
                <S.DetailOverview>{data.overview}</S.DetailOverview>
                <S.DetailInfo>
                  <S.DetailGenres>
                    장르:{" "}
                    {data.genres!.map(({ id, name }, idx: number) => (
                      <S.Genre key={id}>
                        {data.genres!.length - 1 === idx ? name : `${name}, `}
                      </S.Genre>
                    ))}
                  </S.DetailGenres>
                  <div className="season-title">시즌 목록</div>
                  <S.DetailSeasons>
                    {data.seasons!.map(show => (
                      <Poster key={show.id} movie={show} isMovie={false} />
                    ))}
                  </S.DetailSeasons>
                </S.DetailInfo>
              </S.DetailContents>
            </S.DetailInfoContainer>
          </S.MovieDetailContainer>
        </>
      )}
    </S.MovieContainer>
  );
};

export default TVDetail;
