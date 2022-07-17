import React from "react";
import ReactDOM from "react-dom/client";
import createSagaMiddleware from "@redux-saga/core";

import 'bootstrap/dist/css/bootstrap.min.css';


import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";

import helper from "./reducers/helper";
import rootSaga from "./sagas";
import Web from "./routes/web";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(helper, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Web />
  </Provider>
);
