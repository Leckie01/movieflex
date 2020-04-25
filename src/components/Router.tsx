import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Sidebar from "./Sidebar";
import Movies from "../pages/Movie";
import TV from "../pages/TV";
import Search from "../pages/Search";
import MoviesDetail from "../pages/Detail/MovieDetail";
import TVDetail from "../pages/Detail/TVDetail";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 130px;
`;

const Router = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Sidebar />
        <Route path="/" exact component={Movies} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Route path="/movie/:id" exact component={MoviesDetail} />
        <Route path="/tv/:id" exact component={TVDetail} />
        <Redirect from="*" to="/" />
      </Wrapper>
    </BrowserRouter>
  );
};

export default Router;
