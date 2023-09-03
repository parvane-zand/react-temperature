import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDays from "./ForecastDays";
import "./Forecast.css"

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(
    () => {
      setLoaded(false);
      //set loaded to false
    },
    [props.info.coord]
    //if the coordinates change! variables that triggers setLoaded!
  );

  function showForecast(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row">
        <hr />
        {forecastData.map(function (dailyForecast, index) {
          if (0 < index && index < 6) {
            return (
              <div className="col" key={index}>
                <ForecastDays data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let appKey = `6a48a550fc04f170639e60d52b8a6bc5`;
    let lat = props.info.coord.lat;
    let lon = props.info.coord.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${appKey}&units=metric`;
    axios.get(url).then(showForecast);
    return null;
  }
}
