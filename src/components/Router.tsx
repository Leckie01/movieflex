import React from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Sidebar from "../containers/Sidebar";

const Router = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Route path="/" exact component={() => <div>Movie</div>} />
      <Route path="/tv" exact component={() => <div>TV</div>} />
      <Route path="/search" exact component={() => <div>Search</div>} />
    </BrowserRouter>
  );
};

export default Router;
