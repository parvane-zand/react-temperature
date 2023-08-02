import React, { useState } from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={getCity} />
      <button type="Submit">Search</button>
    </form>
  );

  function showWeather(response) {
    setLoaded(true);
    console.log(response);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
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

  if (loaded) {
    return (
      <div>
        {form}
        <br></br>
        <ul className="attributes">
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {Math.round(weather.humidity)}%</li>
          <li>Wind: {Math.round(weather.wind)}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
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
