import React from "react";
import * as S from "./styles";
import { faVideo, faTv, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <S.NavContainer>
      <S.NavList>
        <S.NavListItemLink to="/">
          <S.NavListItem current={pathname === "/"}>
            <S.NavListItemIcon icon={faVideo} />
            Movies
          </S.NavListItem>
        </S.NavListItemLink>
        <S.NavListItemLink to="/tv?hello=Leckie">
          <S.NavListItem current={pathname === "/tv"}>
            <S.NavListItemIcon icon={faTv} />
            TV
          </S.NavListItem>
        </S.NavListItemLink>
        <S.NavListItemLink to="/search">
          <S.NavListItem current={pathname === "/search"}>
            <S.NavListItemIcon icon={faSearch} />
            Search
          </S.NavListItem>
        </S.NavListItemLink>
      </S.NavList>
    </S.NavContainer>
  );
};

export default Sidebar;
