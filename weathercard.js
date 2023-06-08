import React, { useState, useEffect } from "react";

const Weathercard = ({ tempInfo }) => {
  const [weatherState, setWeatherState] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;
  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-windy");
          break;
        case "Dust":
          setWeatherState("wi wi-dust");
          break;
        default:
          setWeatherState("wi wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name},{country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-day-sunny"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr}
                <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-fog "}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
            <div className="weather-extra-info">
              <div className="two-sided-section">
                <p>
                  <i className={"wi wi-rain"}></i>
                </p>
                <p className="extra-info-leftside">
                  {pressure}
                  <br />
                  Pressure
                </p>
              </div>
              <div className="two-sided-section">
                <p>
                  <i className={"wi wi-strong-wind"}></i>
                </p>
                <p className="extra-info-leftside">
                  {speed}
                  <br /> Rain
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard;
