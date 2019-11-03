import { ERROR_HAS_OCCURRED } from "../actions/constants/action-types";
import { errorReducer } from ".";

describe("ERROR REDUCER", () => {
  test("return initial state", () => {
    const action = {
      type: undefined
    };

    expect(errorReducer(undefined, action)).toStrictEqual({});
  });

  test("handle case ERROR_HAS_OCCURRED", () => {
    const error = new Error("error message");
    const action = {
      type: ERROR_HAS_OCCURRED,
      payload: error
    };

    expect(errorReducer({}, action)).toHaveProperty("error");
  });
});
