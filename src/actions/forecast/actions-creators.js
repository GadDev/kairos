import {
  FORECAST_IS_LOADING,
  FORECAST_IS_SUCCEEDED
} from "../constants/action-types";

export const forecastIsLoading = bool => ({
  type: FORECAST_IS_LOADING,
  payload: bool
});

export const forecastSucceeded = data => ({
  type: FORECAST_IS_SUCCEEDED,
  payload: data
});
