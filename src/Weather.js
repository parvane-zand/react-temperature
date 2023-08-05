import React, { useState } from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import "./Weather.css";
import Forecast from "./Forecast";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({ loaded: false });
  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            className="form-control w-100"
            type="search"
            placeholder="Enter a city.."
            onChange={getCity}
            autoFocus="on"
          />
        </div>
        <div className="col-3">
          <button className="btn btn-success" type="Submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );

  function showWeather(response) {
    console.log(response);
    setWeather({
      loaded: true,
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      precipitation: response.data.main.precipitation,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let appKey = `210d99196a88b9257ed8cb3535a0a0c5`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  if (weather.loaded) {
    return (
      <div className="weather">
        {form}
        <h2>{weather.name}</h2>
        <h6>Saturday, 17:05</h6>
        <br></br>
        <div className="row attributes">
          <div className="col-3"></div>
          <div className="col-6 degree float-left">
            {Math.round(weather.temperature)}
          </div>
          <div className="col-3">
            <span className="units">
              <a href="/" onClick="">
                °C
              </a>{" "}
              |{" "}
              <a href="/" onClick="">
                °F
              </a>
              <br />
            </span>
          </div>
        </div>
        <div>
          <div className="row descriptions">
            <div className="col">{weather.description}</div>
            <div className="col">Humidity: {Math.round(weather.humidity)}%</div>
            <div className="col">Wind: {Math.round(weather.wind)}km/h</div>
          </div>
        </div>
        <Forecast city={city} />
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <h6>loading...</h6>
        <InfinitySpin width="50" color="#4fa94d" />
      </div>
    );
  }
}
