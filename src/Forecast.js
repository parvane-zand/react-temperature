import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  const [Name, setName] = useState("");
  const [minTemp, setminTemp] = useState("");
  const [maxTemp, setmaxTemp] = useState("");
  let [loaded, setLoaded] = useState(false);

  function showForecast(response) {
    console.log(response);
    let forecastDay = response.data.daily[0].dt;
    let date = new Date(forecastDay * 1000);
    let day = date.getDay();
    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    setName(weekDays[day]);
    setminTemp(response.data.daily[0].temp.min);
    setmaxTemp(response.data.daily[0].temp.max);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <hr />
        <div className="col-2">
          <strong>{Name}</strong>
          <div className="icons">
            <WeatherIcon icon={props.info.icon} />
          </div>
          <span className="future-max">
            <strong>{Math.round(minTemp)}°</strong>
          </span>
          <span className="future-min"> {Math.round(maxTemp)}°</span>
        </div>
      </div>
    );
  } else {
    let appKey = `6a48a550fc04f170639e60d52b8a6bc5`;
    let lat = props.info.lat;
    let lon = props.info.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${appKey}&units=metric`;
    axios.get(url).then(showForecast);
    return null;
  }
}
