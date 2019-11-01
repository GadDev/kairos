import { combineReducers } from "redux";

import { ERROR_HAS_OCCURRED } from "../actions/constants/action-types";
import forecastReducer from "./forecast";

export const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_HAS_OCCURRED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  error: errorReducer,
  forecast: forecastReducer
});

export default reducers;
