import { forecastIsLoading, forecastSucceeded } from "./actions-creators";

describe("FORECAST ACTIONS CREATORS", () => {
  test("returns an action with correct forecastIsLoading property", () => {
    const action = forecastIsLoading(true);

    expect(action.payload).toBe(true);
  });

  test("return an action with correct forecastSucceeded property", () => {
    const action = forecastSucceeded({ some: "data" });

    expect(action.payload).toEqual({ some: "data" });
  });
});
