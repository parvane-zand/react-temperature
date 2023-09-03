import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDays(props) {
    let fDay = props.data.dt;
    let date = new Date(fDay * 1000);
    let day = date.getDay();
    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayName = weekDays[day];
    console.log(dayName);
    return (
        <div>
          <strong>{dayName}</strong>
          <div className="icons">
            <WeatherIcon icon={props.data.weather[0].icon} size={40} />{" "}
          </div>
          <span className="future-max">
            <strong>{Math.round(props.data.temp.max)}°</strong>
          </span>
          <span className="future-min"> {Math.round(props.data.temp.min)}°</span>
        </div>
    )
}