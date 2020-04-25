import React, { ChangeEvent, useState, useEffect } from "react";
import styled from "styled-components";
import { moviesApi, tvApi } from "../../api";
import { ICommonMovie } from "../../types/types";
import MoviesSection from "../../components/MoviesSection";
import Poster from "../../components/Poster";

const SearchContainer = styled.div`
  position: relative;
  top: 20px;
`;

const Input = styled.input`
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

const Search = () => {
  const [term, setTerm] = useState("");
  const [moviesResults, setMoviesResults] = useState<ICommonMovie[]>([]);
  const [tvResults, setTVResults] = useState<ICommonMovie[]>([]);

  const onChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = e;
    setTerm(value);
  };

  useEffect(() => {
    const getResults = async () => {
      if (term) {
        const {
          data: { results: moviesResults }
        } = await moviesApi.search(term);
        setMoviesResults(moviesResults);

        const {
          data: { results: tvResults }
        } = await tvApi.search(term);
        setTVResults(tvResults);
      }
    };

    getResults();
  }, [term]);

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="검색어를 입력하세요."
        onChange={onChangeHandler}
      />
      {moviesResults.length > 0 ? (
        <MoviesSection title="영화 검색 결과">
          {moviesResults.map(movie => (
            <Poster key={movie.id} movie={movie} isMovie={true} />
          ))}
        </MoviesSection>
      ) : (
        <div>영화 검색 결과가 존재하지 않습니다.</div>
      )}
      {tvResults.length > 0 ? (
        <MoviesSection title="TV 프로그램 검색 결과">
          {tvResults.map(movie => (
            <Poster key={movie.id} movie={movie} isMovie={false} />
          ))}
        </MoviesSection>
      ) : (
        <div>TV프로그램 검색 결과가 존재하지 않습니다.</div>
      )}
    </SearchContainer>
  );
};

export default Search;
