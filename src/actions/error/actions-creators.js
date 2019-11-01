import { ERROR_HAS_OCCURRED } from "../constants/action-types";

export const errorHasOccurred = e => ({
  type: ERROR_HAS_OCCURRED,
  payload: e
});
