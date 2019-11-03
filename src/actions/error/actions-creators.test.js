import { errorHasOccurred } from "./actions-creators";

describe("error action-creator", () => {
  test("return an action wtih correct errorHasOccurred property", () => {
    const action = errorHasOccurred();
    expect(action.payload).toBe(true);
  });
});
