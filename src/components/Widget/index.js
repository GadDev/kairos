import React from "react";
import classNames from "classnames";

const Widget = ({ weather, location }) => {
  const toPercent = data => {
    return `${data * 100}%`;
  };

  const toCelsius = data => {
    const toCelsius = ((data - 32) * 5) / 9;
    const parseCelsius = parseInt(toCelsius);
    return parseCelsius;
  };

  const widgetClass = classNames({
    "weather-widget__wrapper": true,
    [`${location}`]: true
  });

  const iconWeatherClass = classNames({
    icon__wrapper: true,
    [`${weather.icon}`]: true
  });
  const celsiusTemp = toCelsius(weather.temperature);
  const humidity = toPercent(weather.humidity);
  const cloudCover = toPercent(weather.cloudCover);
  const currentTime = new Date(weather.time * 1000).toDateString().split(" ");

  return (
    <article className={widgetClass}>
      <article className="block-content">
        <h3>{location}</h3>
        <h4>
          {currentTime[0]} {currentTime[1]} {currentTime[2]}
        </h4>
        <div className={iconWeatherClass}></div>
        <p>{weather.summary}</p>
      </article>
      <article className="block-content">
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
