import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function showWeather(response) {
    alert(`temp in ${props.city} is: ${Math.round(response.data.main.temp)}`);
  }
  let appKey = `210d99196a88b9257ed8cb3535a0a0c5`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${appKey}&units=metric`;
  axios.get(url).then(showWeather);
  return (
    <div>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
