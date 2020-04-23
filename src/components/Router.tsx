import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Sidebar from "./Sidebar";
import Movies from "../containers/Movies/MoviesContainer";
import TV from "../containers/TV/TVContainer";
import Search from "../containers/Search";
import MoviesDetail from "../containers/Detail/MovieDetail";
import TVDetail from "../containers/Detail/TVDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Route path="/" exact component={Movies} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" exact component={Search} />
      <Route path="/movie/:id" exact component={MoviesDetail} />
      <Route path="/tv/:id" exact component={TVDetail} />
      <Redirect from="*" to="/" />
    </BrowserRouter>
  );
};

export default Router;
