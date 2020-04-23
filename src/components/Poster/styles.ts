import styled from "styled-components";

export const MovieContainer = styled.div`
  transition: transform 0.3s ease 0.1ms;
  &:not(:last-child) {
    margin-right: 0.2vw;
  }

  &:hover:first-child {
    transform: translateX(10%) scale(1.15) !important;

    ~ div {
      transform: translateX(20%) !important;
    }
  }

  &:hover ~ div {
    transform: translateX(10%) !important;
  }

  &:hover {
    transform: scale(1.15) !important;
  }
`;

export const MovieTitle = styled.h2`
  font-weight: 300;
  font-size: 13px;
  text-overflow: ellipsis;
`;

export const MovieImg = styled.img`
  height: 15vw;
  min-height: 10vw;
`;
