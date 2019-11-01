import {
  FORECAST_IS_LOADING,
  FORECAST_IS_SUCCEEDED
} from "../../actions/constants/action-types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORECAST_IS_LOADING:
      return {
        ...state,
        forecastIsLoading: action.payload
      };
    case FORECAST_IS_SUCCEEDED:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
