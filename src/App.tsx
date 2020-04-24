import React from "react";
import Router from "./components/Router";
import GlobalStyles from "./styles/GlobalStyles";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import { createStore } from "redux";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <GlobalStyles />
    </Provider>
  );
};

export default App;
