import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  right: 0;
  @media (max-width: 600px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const MoviesSection = styled.section`
  margin-bottom: 60px;
`;

export const MoviesSectionTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 8vh;
`;

export const MoviePreviewContainer = styled.div`
  &:hover div {
    transform: translateX(-20%);
  }
`;
