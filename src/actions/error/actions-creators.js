import { ERROR_HAS_OCCURRED } from "../constants/action-types";

export const errorHasOccurred = () => ({
  type: ERROR_HAS_OCCURRED,
  payload: true
});
