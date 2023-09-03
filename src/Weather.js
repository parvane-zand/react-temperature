import React, { useState } from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import "./Weather.css";
import Forecast from "./Forecast";
import ConvertDate from "./ConvertDate";
import WeatherTemp from "./WeatherTemp";

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
    setWeather({
      loaded: true,
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      coord : response.data.coord
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
        <ConvertDate date={weather.date} />
        <br></br>
        <WeatherTemp celsius={weather.temperature} icon={weather.icon} />
        <div>
          <div className="row descriptions">
            <div className="col-4">{weather.description}</div>
            <div className="col-4">
              Humidity: {Math.round(weather.humidity)}%
            </div>
            <div className="col-4">Wind: {Math.round(weather.wind)}km/h</div>
          </div>
        </div>
        <Forecast city={city} info={weather} />
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
