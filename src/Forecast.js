import React from "react";
import axios from "axios";

export default function Forecast(props) {
  function showForecast(response) {
    console.log(response.data.daily);
    //let list = [7, 15, 23, 31, 39];
  }
  let appKey = `4a3at3d40ab2fo50c8da2bb2428082bd`;
  let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${appKey}&unit=metric`;
  axios.get(url).then(showForecast);
  return (
    <div>
      <hr />
      forecast
    </div>
  );
}
