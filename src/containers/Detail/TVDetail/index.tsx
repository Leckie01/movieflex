import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import { ICommonMovie } from "../../../types/types";
import styled from "styled-components";
import { IMAGE_BASE_URL, tvApi } from "../../../api";
import Poster from "../../../components/Poster";

interface SCProps {
  path: string;
}

const MovieContainer = styled.div`
  width: calc(100vw - 100px);
  height: 100%;
  position: absolute;
  left: 100px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const BackgroundImage = styled.div<SCProps>`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background: url(${({ path }) => `${IMAGE_BASE_URL}original${path}`}) no-repeat
    center center fixed;
  background-size: cover;
  z-index: -1;
  opacity: 0.4;
`;

const MovieDetailContainer = styled.div`
  display: flex;
  padding: 1.5em;
  width: 100%;
  height: 100%;
`;

const DetailBackGroundImage = styled.img`
  height: 70vh;
  left: 0;
  top: 0;
  z-index: 10;
  mask-image: -webkit-gradient(
    linear,
    100% 0%,
    0% 0%,
    to(rgb(0, 0, 0)),
    color-stop(0.3, rgb(0, 0, 0)),
    from(rgba(0, 0, 0, 0))
  );
`;

const DetailInfoContainer = styled.div`
  margin: 30px;
  width: 60%;
`;

const DetailHeader = styled.div``;

const DetailContents = styled.div`
  font-size: 1.125vw;
  font-weight: 300;
`;

const MovieTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;

const MovieOriginalTitle = styled.h2`
  margin-top: 10px;
  font-size: 20px;
`;

const DetailOverview = styled.p`
  font-size: 1.125vw;
  font-weight: 300;
  line-height: 1.6;
  opacity: 0.7;
  margin-top: 0.8em;
`;

const DetailInfo = styled.div`
  margin-top: 1em;
`;

const DetailGenres = styled.ul`
  display: flex;
  margin: 1rem 0;
`;

const Genre = styled.li`
  margin-left: 5px;
`;

const DetailSeasons = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  width: 100%;
  height: 15vw;
  min-width: 10vw;
`;

const TVDetailContainer = () => {
  const [tvDetail, setTVDetail] = useState<ICommonMovie | null>(null);
  const {
    params: { id }
  } = useRouteMatch();

  useEffect(() => {
    const getTV = async () => {
      const { data } = await tvApi.detail(id);
      setTVDetail(data);
    };
    getTV();
  }, [id]);
  if (tvDetail) {
    return (
      <MovieContainer>
        <BackgroundImage path={tvDetail.backdrop_path!} />
        <MovieDetailContainer>
          <DetailBackGroundImage
            src={`${IMAGE_BASE_URL}original${tvDetail.poster_path}`}
          />
          <DetailInfoContainer>
            <DetailHeader>
              <MovieTitle>{tvDetail.name}</MovieTitle>
              <MovieOriginalTitle>{tvDetail.name}</MovieOriginalTitle>
            </DetailHeader>
            <DetailContents>
              <DetailOverview>{tvDetail.overview}</DetailOverview>
              <DetailInfo>
                <DetailGenres>
                  장르:{" "}
                  {tvDetail.genres!.map(({ id, name }) => (
                    <Genre key={id}>{name}</Genre>
                  ))}
                </DetailGenres>
                <DetailSeasons>
                  {tvDetail.seasons!.map(show => (
                    <Poster key={show.id} movie={show} isMovie={false} />
                  ))}
                </DetailSeasons>
              </DetailInfo>
            </DetailContents>
          </DetailInfoContainer>
        </MovieDetailContainer>
      </MovieContainer>
    );
  }
  return <div></div>;
};

export default TVDetailContainer;
