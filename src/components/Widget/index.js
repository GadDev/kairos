import React from "react";
import classNames from "classnames";

const Widget = ({ weather, location }) => {
  const toPercent = data => {
    return `${data * 100}%`;
  };

  const widgetClass = classNames({
    "weather-widget__wrapper": true,
    [`${location}`]: true
  });

  const iconWeatherClass = classNames({
    icon__wrapper: true,
    [`${weather.icon}`]: true
  });
  const celsiusTemp = `${((weather.temperature - 32) * 5) / 9}`;
  const humidity = toPercent(weather.humidity);
  const cloudCover = toPercent(weather.cloudCover);

  return (
    <article className={widgetClass}>
      <article>
        <div className={iconWeatherClass}></div>
        <p>{weather.summary}</p>
      </article>
      <article>
        <p className="temperature">
          {parseInt(celsiusTemp)} <sup>&#8451;</sup>
        </p>
        <p className="humidity">
          <span>humidity: </span>
          {parseInt(humidity)}%
        </p>
        <p className="cloudCover">
          <span>cloud cover: </span>
          {parseInt(cloudCover)}%
        </p>
      </article>
    </article>
  );
};

export default Widget;
