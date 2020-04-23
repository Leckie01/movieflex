import React from "react";
import Router from "./components/Router";
import GlobalStyles from "./styles/GlobalStyles";
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <GlobalStyles />
    </Provider>
  );
};

export default App;
