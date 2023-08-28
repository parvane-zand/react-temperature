import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherTemp(props) {
  const [unit, setunit] = useState("celsius");
  function ConvertFahrenheit(event) {
    event.preventDefault();
    setunit("fahrenheit");
  }
  function ConvertCelsius(event) {
    event.preventDefault();
    setunit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="row attributes">
        <div className="col-4">
          <WeatherIcon icon={props.icon} />
        </div>
        <div className="col-4 degree float-left">
          {Math.round(props.celsius)}
        </div>
        <div className="col-4">
          <span className="units"></span>
          °C |{" "}
          <a href="/" onClick={ConvertFahrenheit}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row attributes">
        <div className="col-4">
          <WeatherIcon icon={props.icon} size={60} />
        </div>
        <div className="col-4 degree float-left">
          {Math.round((props.celsius * 9) / 5 + 32)}
        </div>
        <div className="col-4">
          <span className="units"></span>
          <a href="/" onClick={ConvertCelsius}>
            °C
          </a>{" "}
          | °F
        </div>
      </div>
    );
  }
}
