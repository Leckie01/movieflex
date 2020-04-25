import React from "react";
import Router from "./components/Router";
import GlobalStyles from "./styles/GlobalStyles";
import { Provider } from "react-redux";
import rootReducer, { rootSaga } from "./modules";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <GlobalStyles />
    </Provider>
  );
};

export default App;
