import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import reduxLogger from "redux-logger";

import reducers from "../reducers";

const middleware = [thunkMiddleware];
let composeEnhancers = compose;

composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
middleware.push(reduxLogger);

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
