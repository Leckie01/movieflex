import styled from "styled-components";
import { IMAGE_BASE_URL } from "../../../api";

interface SCProps {
  path: string;
}

export const MovieContainer = styled.div`
  width: calc(100vw - 100px);
  height: 100%;
  position: absolute;
  left: 100px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const BackgroundImage = styled.div<SCProps>`
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

export const MovieDetailContainer = styled.div`
  display: flex;
  padding: 1.5em;
  width: 100%;
  height: 100%;
`;

export const DetailBackGroundImage = styled.img`
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

export const DetailInfoContainer = styled.div`
  margin: 30px;
  width: 60%;
`;

export const DetailHeader = styled.div``;

export const DetailContents = styled.div`
  font-size: 1.125vw;
  font-weight: 300;
`;

export const MovieTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;

export const MovieOriginalTitle = styled.h2`
  margin-top: 10px;
  font-size: 20px;
`;

export const DetailOverview = styled.p`
  font-size: 1.125vw;
  font-weight: 300;
  line-height: 1.6;
  opacity: 0.7;
  margin-top: 0.8em;
`;

export const DetailInfo = styled.div`
  margin-top: 1em;

  .season-title {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

export const DetailGenres = styled.ul`
  display: flex;
  margin: 1rem 0;
`;

export const Genre = styled.li`
  margin-left: 5px;
`;

export const DetailSeasons = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  width: 100%;
  height: 15vw;
  min-width: 10vw;
`;
