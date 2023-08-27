import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  const [Name, setName] = useState("");
  const [minTemp, setminTemp] = useState("");
  const [maxTemp, setmaxTemp] = useState("");

  function showForecast(response) {
    console.log(response);
    let forecastDay = response.data.list[0].dt;
    let date = new Date(forecastDay * 1000);
    let day = date.getDay();
    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    setName(weekDays[day]);
    setminTemp(response.data.list[0].main.temp_min);
    setmaxTemp(response.data.list[0].main.temp_max);
  }
  //let appKey = `4a3at3d40ab2fo50c8da2bb2428082bd`;
  let appKey = `210d99196a88b9257ed8cb3535a0a0c5`;
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.info.name}&appid=${appKey}&units=metric`;
  axios.get(url).then(showForecast);

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
}
