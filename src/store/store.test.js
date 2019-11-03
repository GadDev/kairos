import store from ".";

describe("STORE", () => {
  test("configure the store with initial state ", () => {
    expect(store.getState()).toStrictEqual({
      error: {},
      forecast: {}
    });
  });
});
