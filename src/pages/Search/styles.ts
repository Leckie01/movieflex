import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  top: 20px;
`;

export const Input = styled.input`
  border-style: none;
  width: 100%;
  background-color: inherit;
  color: white;
  height: 40px;
  font-size: 25px;
  padding: 10px;
  ::placeholder {
    font-size: 25px;
    text-align: start;
  }
`;
