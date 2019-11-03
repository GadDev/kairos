import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { forecastIsLoading, forecastSucceeded } from "./actions-creators";
import { errorHasOccurred } from "../error/actions-creators";
import forecast from ".";

describe("Forecast ACTIONS", () => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({});

  beforeEach(() => {});

  afterEach(() => {
    fetchMock.restore();
    store.clearActions();
  });

  describe("success", () => {
    beforeEach(() => {
      const key = "c4692383bc048da19f7aefdf355f6bbf";
      const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/69,69`;
      const body = {
        json: () =>
          Promise.resolve({
            some: "data"
          })
      };
      fetchMock.get(url, body);
    });

    test("fetch forecast from DARK SKY API", () => {
      const expectedActions = [
        forecastIsLoading(true),
        forecastIsLoading(false),
        forecastSucceeded({})
      ];

      return store.dispatch(forecast.loadForecast(69, 69)).then(() => {
        expect(store.getActions()).toStrictEqual(expectedActions);
      });
    });
  });

  describe("error", () => {
    beforeEach(() => {
      const key = "c4692383bc048da19f7aefdf355f6bbf";
      const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/1000,1000`;

      fetchMock.get(url, 404, {
        some: "data"
      });
      fetchMock.get("/api/auth/status", 200);
    });

    test("should dispatch errorHasOccurred", () => {
      const expectedActions = [forecastIsLoading(true), errorHasOccurred()];

      return store.dispatch(forecast.loadForecast(1000, 1000)).then(() => {
        expect(store.getActions()).toStrictEqual(expectedActions);
      });
    });
  });
});
