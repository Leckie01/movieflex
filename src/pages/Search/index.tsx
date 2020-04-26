import React from "react";
import MoviesSection from "../../components/MoviesSection";
import Poster from "../../components/Poster";
import * as S from "./styles";
import useSearch from "../../hooks/useSearch";

const Search = () => {
  const { onChangeHandler, search } = useSearch();

  return (
    <S.SearchContainer>
      <S.Input
        type="text"
        placeholder="검색어를 입력하세요."
        onChange={onChangeHandler}
      />
      {search.isLoading && (
        <div>영화, TV프로그램 목록을 불러오고 있습니다.</div>
      )}
      {!search.isLoading &&
        search.isLoaded &&
        search.all!.movies.length === 0 && (
          <div>영화 검색 결과가 존재하지 않습니다.</div>
        )}
      {!search.isLoading && search.isLoaded && search.all!.tv.length === 0 && (
        <div>TV프로그램 검색 결과가 존재하지 않습니다.</div>
      )}
      {search.all && search.all.movies.length > 0 && (
        <MoviesSection title="영화 검색 결과">
          {search.all!.movies.map((movie) => (
            <Poster key={movie.id} movie={movie} isMovie={true} />
          ))}
        </MoviesSection>
      )}
      {search.all && search.all.tv.length > 0 && (
        <MoviesSection title="TV 프로그램 검색 결과">
          {search.all!.tv.map((show) => (
            <Poster key={show.id} movie={show} isMovie={false} />
          ))}
        </MoviesSection>
      )}
    </S.SearchContainer>
  );
};

export default Search;
