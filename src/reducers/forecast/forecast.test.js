import {
  FORECAST_IS_LOADING,
  FORECAST_IS_SUCCEEDED
} from "../../actions/constants/action-types";
import forecast from ".";

describe("FORECAST REDUCERS", () => {
  test("return initial state", () => {
    const action = {
      type: undefined
    };

    expect(forecast(undefined, action)).toStrictEqual({});
  });

  test("handle case FORECAST_IS_LOADING", () => {
    const action = {
      type: FORECAST_IS_LOADING,
      payload: true
    };
    expect(forecast({}, action)).toMatchObject({
      forecastIsLoading: true
    });
  });

  test("handle case FORECAST_IS_SUCCEEDED", () => {
    const action = {
      type: FORECAST_IS_SUCCEEDED,
      payload: {
        some: "data"
      }
    };

    expect(forecast({}, action)).toMatchObject({
      some: "data"
    });
  });
});
