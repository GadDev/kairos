import { forecastIsLoading, forecastSucceeded } from "./actions-creators";

import { errorHasOccurred } from "../error/actions-creators";

const loadForecast = (lat, lng) => dispatch => {
  const key = "c4692383bc048da19f7aefdf355f6bbf";
  const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/${lat},${lng}`;

  dispatch(forecastIsLoading(true));

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      dispatch(forecastIsLoading(false));
      return dispatch(forecastSucceeded(data));
    })
    .catch(e => dispatch(errorHasOccurred(e)));
};

export default {
  loadForecast
};
